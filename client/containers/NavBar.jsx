import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, AppBar, Toolbar, Typography } from '@mui/material';

const NavBar = () => {

  useEffect(() => {
    //use effect so initial click triggers handleclick
    const userSubmissionForm = document.getElementById('userSubmissionForm');
    console.log('opening form');
    userSubmissionForm.style.display = 'none';
  }, []);

  let lastButtonClicked = undefined;

  const handleNavBarClick = (e) => {
    // console.log('handlePostClick invoked');
    // const name = document.getElementById('nameForm');
    // console.log(name);
    const userSubmissionForm = document.getElementById('userSubmissionForm');
    userSubmissionForm.style.display = 'block'; //displays form
    lastButtonClicked = e.target.innerText;
    // const formInfo = e.target.value; // stores form submission into form info
    // console.log('formInfo: ', formInfo);
    // e.preventDefault();
    if (lastButtonClicked === 'CREATE ART') {
      const artistLabel = document.getElementById('artistFormLabel');
      artistLabel.style.display = 'inline';
      const artistInputField = document.getElementById('artistForm');
      artistInputField.style.display = 'inline';
      const priceLabel = document.getElementById('priceLabel');
      priceLabel.style.display = 'inline';
      const priceInput = document.getElementById('priceForm');
      priceInput.style.display = 'inline';
      const descriptionLabel = document.getElementById('descriptionFormLabel');
      descriptionLabel.style.display = 'inline';
      const descriptionInputField = document.getElementById('descriptionForm');
      descriptionInputField.style.display = 'inline';
    }
    if (lastButtonClicked === 'UPDATE ART') {
      const artistLabel = document.getElementById('artistFormLabel');
      artistLabel.style.display = 'none';
      const artistInputField = document.getElementById('artistForm');
      artistInputField.style.display = 'none';
      const priceLabel = document.getElementById('priceLabel');
      priceLabel.style.display = 'inline';
      const priceInput = document.getElementById('priceForm');
      priceInput.style.display = 'inline';
      const descriptionLabel = document.getElementById('descriptionFormLabel');
      descriptionLabel.style.display = 'inline';
      const descriptionInputField = document.getElementById('descriptionForm');
      descriptionInputField.style.display = 'inline';
    }
    if (lastButtonClicked === 'DELETE ART') {
      const artistLabel = document.getElementById('artistFormLabel');
      artistLabel.style.display = 'none';
      const artistInputField = document.getElementById('artistForm');
      artistInputField.style.display = 'none';
      const priceLabel = document.getElementById('priceLabel');
      priceLabel.style.display = 'none';
      const priceInput = document.getElementById('priceForm');
      priceInput.style.display = 'none';
      const descriptionLabel = document.getElementById('descriptionFormLabel');
      descriptionLabel.style.display = 'none';
      const descriptionInputField = document.getElementById('descriptionForm');
      descriptionInputField.style.display = 'none';
    }
  };


  const submitClickHandler = (e) => {
    console.log('submit clicked');
    console.log(lastButtonClicked);
    e.preventDefault();
    // if the lastButtonClicked was post

      //successful during testing
    if (lastButtonClicked === 'CREATE ART') {
      console.log('CREATE ART is working');
      console.log('e: ', e);
      console.log('e.target: ', e.target);
      console.log('e.target.value: ', e.target.value);
      //submit button clears browser console unable to check e.target.value 
        //e= submit button event
        //target=the submit button
        //value= non-existent currently
      const body = {
        itemName: e.target[0].value,
        price: e.target[1].value,
        artist: e.target[2].value,
        description: e.target[3].value,
      };

      const form = document.getElementById('userSubmissionForm'); // resets the form values to empty after submission
      form.reset();

      console.log('body: ', body);
      fetch('/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then(() => {
          const userSubmissionForm =
            document.getElementById('userSubmissionForm');
          userSubmissionForm.style.display = 'none'; //displays form
        })
        .then(() => location.reload())
        .catch((err) => console.log('error when posting new data', err));
    }

    // if the lastButtonClicked was update
    //successful during testing 
    if (lastButtonClicked === 'UPDATE ART') {
      console.log('UPDATE ART is working');
      //prevents page reloading after button clicked and ensures JS functionality to handle the resetting of the page
      e.preventDefault();
      //body of the form to be included in the ajax request body

      //Same as Create Art no e.target.value
        //consider testing submit request button without e.preventDefault() to see body object defined below in browser console
      const body = {
        itemName: e.target[0].value,
        newPrice: e.target[1].value,
        newDescription: e.target[3].value,
      };

      const form = document.getElementById('userSubmissionForm'); // resets the form values to empty after submission

      //consider testing without form.reset()
        //seems to be working but unable to tell if the body variable functionality is implemented 
      form.reset();


      fetch('/items', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then(() => {
          const userSubmissionForm =
            document.getElementById('userSubmissionForm');
          userSubmissionForm.style.display = 'none'; //displays form
        })
        .then(() => location.reload()) // forces page reload to render update
        .catch((err) => console.log('error when updating new data', err));
    }


    
    // if the lastButtonClicked as delete
    if (lastButtonClicked === 'DELETE ART') {
      console.log('Delete ART is working');
      e.preventDefault();
      const body = {
        itemName: e.target[0].value,
      };
      const form = document.getElementById('userSubmissionForm'); // resets the form values to empty after submission
      form.reset();
      fetch('/items', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then(() => {
          const userSubmissionForm =
            document.getElementById('userSubmissionForm');
          userSubmissionForm.style.display = 'none'; //displays form
        })
        .then(() => location.reload()) // forces page reload to render update
        .catch((err) => console.log('error when updating new data', err));
    }
  };

  return (
    <div id="navBar">
      <button id="createArtButton" onClick={handleNavBarClick}>
        CREATE ART
      </button>
      {/* <button onClick={handleNavBarClick}>FIND ART</button> */}
      <button id="updateArtButton" onClick={handleNavBarClick}>
        UPDATE ART
      </button>
      <button id="deleteArtButton" onClick={handleNavBarClick}>
        DELETE ART
      </button>

      <form id="userSubmissionForm" onSubmit={submitClickHandler}>
        <div>
          <label htmlFor="nameForm">Item Name: </label>
          <input type="text" id="nameForm" name="nameForm"></input>
        </div>
        {/* <div>
          <label htmlFor="imageForm">Image: </label>
          <input type="file" id="imageForm" name="imageForm"></input>
        </div> */}
        <div>
          <label htmlFor="priceForm" id="priceLabel">
            Price:{' '}
          </label>
          <input type="number" id="priceForm" name="priceForm"></input>
        </div>
        <div>
          <label htmlFor="artistForm" id="artistFormLabel">
            Artist:{' '}
          </label>
          <input type="text" id="artistForm" name="artistForm"></input>
        </div>
        <div>
          <label id="descriptionFormLabel" htmlFor="descriptionForm">
            Description:{' '}
          </label>
          <input
            type="text"
            id="descriptionForm"
            name="descriptionForm"
          ></input>
        </div>
        <div className="formButtons">
          <input className="formButtons" type="submit"></input>
          <input className="formButtons" type="reset"></input>
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
