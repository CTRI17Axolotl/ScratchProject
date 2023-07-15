import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, AppBar, Toolbar, Typography } from '@mui/material';

const NavBar = () => {


  useEffect(() => {
    //use effect so initial click triggers handleclick
    const userSubmissionForm = document.getElementById('userSubmissionForm');
    userSubmissionForm.style.display = 'none';
  }, []);

  const handleClick = () => {
    const userSubmissionForm = document.getElementById('userSubmissionForm');
    (userSubmissionForm.style.display !== 'none'
      ? (userSubmissionForm.style.display = 'none')
      : (userSubmissionForm.style.display = 'block'))
    
    
    // console.log(userSubmissionForm.style);
    // if (userSubmissionForm.style.display !== 'none')
    //   userSubmissionForm.style.display = 'none';
    // else userSubmissionForm.style.display = 'block';
  };

  return (
    <div>
      <button onClick={handleClick}>CREATE ART</button>
      <button onClick={handleClick}>FIND ART</button>
      <button onClick={handleClick}>UPDATE ART</button>
      <button onClick={handleClick}>DELETE ART</button>
      <button onClick={handleClick}> OPEN FORM</button>

      <form id="userSubmissionForm">
        <div>
          <label htmlFor="nameForm">Name: </label>
          <input type="text" id="nameForm" name="nameForm"></input>
        </div>
        <div>
          <label htmlFor="imageForm">Image: </label>
          <input type="file" id="imageForm" name="imageForm"></input>
        </div>
        <div>
          <label htmlFor="priceForm">Price: </label>
          <input type="number" id="priceForm" name="priceForm"></input>
        </div>
        <div>
          <label htmlFor="descriptionForm">Description: </label>
          <input
            type="text"
            id="descriptionForm"
            name="descriptionForm"
          ></input>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
    </div>

    // <AppBar position="static">
    //   <Toolbar
    //     className="navBar"
    //     sx={{ display: 'flex', justifyContent: 'space-between' }}
    //  >
    //              <button>
    //    {'Add an Item'}
    //      </button>
    //     <Button color="error" variant="contained" >
    //       Add your art
    //     </Button>
    //     <Button color="error" variant="contained">
    //       Update your art
    //     </Button>
    //     <Button color="error" variant="contained">
    //       Delete your art
    //     </Button>
    //   </Toolbar>
    // </AppBar>
  );
};

export default NavBar;
