const ArtPiece = require('../dbModel/piecesModel');
const jwt = require('jsonwebtoken');
const { generateSecretKey } = require('../utils/helpers');

const artPieceController = {};

const secretKey = generateSecretKey();
// GET: display the listings of art
// POST: create a new listing
// PATCH: update a listing
// DELETE: delete a listing
const verifyToken = (token) => {
  return jwt.verify(token, secretKey);
};

artPieceController.getArt = async (req, res, next) => {
  try {
    console.log('entered getArt method in artPieceController');
    const piece = await ArtPiece.find({ title: title });
    res.locals.foundArt = piece;
    return next();
  } catch (err) {
    return next({
      log: `The following error occured: ${err}`,
      status: 400,
      message: { err: 'An error occured while trying to find the art piece' },
    });
  }
};

artPieceController.createArt = async (req, res, next) => {
  // console.log('req: ', req.body);
  // format the query using the info passed in on the body
  console.log('req.body: ', req.body);
  console.log('req.params: ', req.params);
  console.log('req.query: ', req.query);
  // console.log('req: ', req);
  // console log the received response from the database
  const {
    artist,
    genre,
    medium,
    dimensions,
    title,
    image,
    owner,
    buyer,
    seller,
    forSale,
    description,
    price,
    style,
  } = req.body;

  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = verifyToken(token);
    const userId = decodedToken.userId;

    const newArt = await ArtPiece.create({
      artist,
      genre,
      medium,
      dimensions,
      title,
      image,
      owner: userId,
      buyer,
      seller,
      forSale,
      description,
      price,
      style,
    });
    res.locals.newArt = newArt;
    return next();
  } catch (err) {
    return next({
      log: `The following error occured: ${err}`,
      status: 400,
      message: { err: 'An error occured while trying to create an art piece' },
    });
  }
};

artPieceController.updateArt = async (req, res, next) => {
  try {
    // const { name } = req.params;
    const {
      newArtist,
      newGenre,
      newMedium,
      newDimensions,
      newImage,
      newTitle,
      newDescription,
      newPrice,
      newOwner,
      newBuyer,
      newSeller,
      newForSale,
      newStyle,
    } = req.body;

    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = verifyToken(token);
    const userId = decodedToken.userId;

    const updatedArt = await ArtPiece.findOneAndUpdate(
      { title: newTitle },
      {
        description: newDescription,
        price: newPrice,
        artist: newArtist,
        genre: newGenre,
        medium: newMedium,
        dimensions: newDimensions,
        image: newImage,
        owner: newOwner,
        buyer: newBuyer,
        seller: newSeller,
        forSale: newForSale,
        style: newStyle,
      },
      { new: true }
    );
    res.locals.updatedArt = updatedArt;
    return next();
  } catch (err) {
    return next({
      log: `The following error occured: ${err}`,
      status: 400,
      message: { err: 'An error occured while trying to update a user' },
    });
  }
};

artPieceController.deleteArt = async (req, res, next) => {
  // const { name } = req.params;
  try {
    const { title } = req.body;

    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = verifyToken(token);
    const userId = decodedToken.userId;

    const deletedArt = await ArtPiece.findOneAndDelete({
      title: title,
      owner: userId,
    });
    res.locals.deletedArt = deletedArt;
    return next();
  } catch (err) {
    return next({
      log: `The following error occured: ${err}`,
      status: 400,
      message: { err: 'An error occured while trying to delete a user' },
    });
  }
};

module.exports = artPieceController;
