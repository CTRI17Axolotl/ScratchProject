const Item = require('../dbModel/itemModel');

const itemController = {};

// GET: display the listings of art
// POST: create a new listing
// PATCH: update a listing
// DELETE: delete a listing

itemController.getItem = async (req, res, next) => {
  try{
    console.log(req.params);
    const { name } = req.params;
    const item = await Item.find({itemName: name})
    res.locals.foundItem = item;
    return next();
  } catch(err){
    return next({
      log: `The following error occured: ${err}`,
      status: 400,
      message: { err: 'An error occured while trying to find an item' }
    });
  }
}

itemController.createItem = async (req, res, next) => {
  // console.log('req: ', req.body);
  // format the query using the info passed in on the body
  console.log('req.body: ', req.body)
  console.log('req.params: ', req.params)
  console.log('req.query: ', req.query)
  // console.log('req: ', req);
  // console log the received response from the database
  const { itemName, artist, description, price  } = req.body;
  

  try{
    await Item.create({itemName, artist, description, price})
    return next();
  } catch(err){
    return next({
      log: `The following error occured: ${err}`,
      status: 400,
      message: { err: 'An error occured while trying to create an item' }
    });
  }
}


itemController.updateItem = async (req, res, next) => {
  try{
    const { name } = req.params;
    const { newImage, newDescription, newPrice } = req.body;
    const updatedItem = await Item.findOneAndUpdate({itemName: name}, {image: newImage, description: newDescription, price: newPrice}, {new: true});
    res.locals.updatedItem = updatedItem;
    return next();
  } catch(err){
    return next({
      log: `The following error occured: ${err}`,
      status: 400,
      message: { err: 'An error occured while trying to update a user' }
    });
  }
}


itemController.deleteItem = async (req, res, next) => {
  const { name } = req.params;
    try{
      const deletedItem = await Item.findOneAndDelete({itemName: name})
      res.locals.deletedItem = deletedItem;
      return next();
    } catch(err){
      return next({
        log: `The following error occured: ${err}`,
        status: 400,
        message: { err: 'An error occured while trying to delete a user' }
      });
    }
}


module.exports = itemController;
