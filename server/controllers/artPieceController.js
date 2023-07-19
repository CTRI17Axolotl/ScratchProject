const ArtPiece = require('../dbModel/artPieceModel');

const artPieceController = {};

// GET: display the listings of art
// POST: create a new listing
// PATCH: update a listing
// DELETE: delete a listing

artPieceController.getArt = async (req, res, next) => {
  try {
    console.log('entered getItem method in itemController');
    const piece = await ArtPiece.find({});
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
    collection,
  } = req.body;

  try {
    const newArt = await ArtPiece.create({
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
      collection,
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
      newCollection,
    } = req.body;
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
        collection: newCollection,
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
    const deletedArt = await ArtPiece.findOneAndDelete({ title: title });
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
