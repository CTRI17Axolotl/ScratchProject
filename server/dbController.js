const User = require('./dbModel/userModel');

const dbController = {};

// GET: display the listings of art
// POST: create a new listing
// PATCH: update a listing
// DELETE: delete a listing

dbController.getUser = async (req, res, next) => {
  try{
    console.log(req.params);
    const { name } = req.params;
    const user = await User.find({firstName: name})
    res.locals.foundUser = user;
    return next();
  } catch(err){
    return next({
      log: `The following error occured: ${err}`,
      status: 400,
      message: { err: 'An error occured while trying to find a user' }
    });
  }
}

dbController.createUser = async (req, res, next) => {
  // console.log('req: ', req.body);
  // format the query using the info passed in on the body
  
  // console log the received response from the database
  const { firstName, lastName, email } = req.body;

  // if(!firstName || !lastName || !age){
  //   return next({
  //     log: `The following error occured: missing property`,
  //     status: 400,
  //     message: { err: 'An error occured while trying to create a user' }
  //   });
  // }

  try{
    const user = await User.create({firstName, lastName, email})
    res.locals.newUser = user;
    
    return next();
  } catch(err){
    return next({
      log: `The following error occured: ${err}`,
      status: 400,
      message: { err: 'An error occured while trying to create a user' }
    });
  }
}


dbController.updateUser = async (req, res, next) => {

}


module.exports = dbController;
