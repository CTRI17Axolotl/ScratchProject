// Imports
import React, { useContext, useState, useEffect } from 'react';
import { StoreContext } from './dataStore';
import { Link, useNavigate } from 'react-router-dom';
import Gallery from '../components/Gallery.jsx';
import fakeData from '../components/Placeholder.jsx';
import UploadWidget from '../components/UploadWidget.jsx';
import backgrounds from '../components/Backgrounds.js';

export default function AddPiece(props) {
  const emptyForm = {
    ownerId: '',
    artist: '',
    title: '',
    description: '',
    collection: '',
    image: '',
    price: 0,
    sizeClass: '',
    forSale: '',
  };

  const [formData, setFormData] = useState(emptyForm);
  const nav = useNavigate();
  const { activeUser, updateFullPieceList, pallet } = useContext(StoreContext);

  useEffect(() => {
    document.body.style.backgroundImage = `url('${backgrounds.addPiece[pallet]}')`;
  }, [pallet]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  function setURL(url) {
    if (url) {
      formData.image = url;
      console.log('formData.image: ', formData.image);
    }
  }

  console.log('activeUser: ', activeUser);

  function handleSubmit(event) {
    event.preventDefault();

    //^ Get data submitted with Form fields

    async function addNewPiece() {
      const itemPrice = Number(formData.price);
      const priceClass = itemPrice < 100 ? 0 : itemPrice > 1000 ? 2 : 1;
      const sizeL = formData.sizeClass[0];
      const sizeClass = sizeL === 'S' ? 0 : sizeL === 'M' ? 1 : 2;
      const newPiece = {
        ownerId: activeUser,
        artist: formData.artist,
        title: formData.title,
        description: formData.description,
        style: formData.style,
        image: formData.image,
        price: itemPrice,
        priceClass: priceClass,
        sizeClass: sizeClass,
        forSale: formData.forSale === 'true' ? true : false,
      };
      console.log('New Submission: ', newPiece);
      try {
        //^ Check if input fields are empty and return an error
        const response = await fetch('/pieces', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newPiece),
        });

        setFormData(emptyForm);
      } catch (err) {
        console.log(err);
      }
    }
    addNewPiece();
    setTimeout(() => {
      nav('/');
    }, 800);
  }

  // updateFullPieceList (  pieceListParsedFromServerBackend);

  return (
    <div className="form-container">
      <div className="form-contents">
        <h2>Upload a New Piece</h2>
        <hr />
        <br />
        <UploadWidget setURL={setURL} />
        <br />
        <br />

        <form onSubmit={handleSubmit} className="form">
          <div>
            <label htmlFor="artist">
              <h3>Artist's Name</h3>
            </label>
            <input
              type="text"
              id="artist"
              name="artist"
              value={formData.artist}
              onChange={handleChange}
              placeholder="Artist"
            ></input>
          </div>
          <div>
            <label htmlFor="title">
              <h3>Title of Piece</h3>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
            ></input>
          </div>
          <div>
            <label htmlFor="description">
              <h3>Pieces's Description</h3>
            </label>
            <textarea
              type="text"
              id="description"
              name="description"
              rows="5"
              cols="16"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description here..."
            ></textarea>
          </div>
          <div>
            <label htmlFor="title">
              <h3>Category of Art</h3>
            </label>
            <input
              list="category"
              id="style"
              name="style"
              value={formData.style}
              onChange={handleChange}
              placeholder="Art Style Category"
            ></input>
            <datalist id="category">
              <option>Realism</option>
              <option>Classicism</option>
              <option>Modernism</option>
              <option>Photography</option>
              <option>Sculpture</option>
            </datalist>
          </div>
          <div>
            <label htmlFor="price">
              <h3>Art Piece Value</h3>
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="$ USD"
            ></input>
          </div>
          <div>
            <label htmlFor="size">
              <h3>Size of Piece</h3>
            </label>
            <input
              list="sizing"
              type="text"
              id="sizeClass"
              name="sizeClass"
              value={formData.sizeClass}
              onChange={handleChange}
              placeholder="Size Value"
            ></input>
            <datalist id="sizing">
              <option>Small &nbsp; &nbsp; - up to 2' x 2'</option>
              <option>Medium - up to 4' x 4'</option>
              <option>Large &nbsp; &nbsp; - over 4' x 4'</option>
            </datalist>
          </div>
          <div>
            <label htmlFor="sale">
              <h3>Is Art Piece for Sale?</h3>
            </label>
            <input
              list="sale"
              type="text"
              id="forSale"
              name="forSale"
              value={formData.forSale}
              onChange={handleChange}
              placeholder="On the Market?"
            ></input>
            <datalist id="sale">
              <datalist id="sale">
                <option>true</option>
                <option>false</option>
              </datalist>
            </datalist>
          </div>
          <button className="addPieceSubmit">Submit</button>
        </form>
      </div>
      {/* <div id="imgContainer">
        <img src={formData.image} />
      </div> */}
    </div>
  );
}
