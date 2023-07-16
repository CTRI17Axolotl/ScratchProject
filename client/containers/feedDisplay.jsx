// ---- imports ----
import React from 'react';
import FeedItem from '../components/feedItem.jsx';

// ---- build the feed display ----

// declare a const, feedDisplay, and assign it the value of a function definition that accepts one parameter, props
const FeedDisplay = (props) => {
  //declare a variable, displayed items, and assign it the value of an empty array
  const displayedItems = [];
  //   make a get request to the database for the name, image, price and description of the art
  fetch(/*something will go here*/)
    .then((res) => res.json())
    .then((data) => {
      // loop through the array of data
      for (let i = 0; i < data.length; i++) {
        // declare a variable, currentElem, and assign it the value of data at index i
        const currentElem = data[i];
        // if the length of the displayedItems array is less than six, push a feedItem that contains the props informtion for the name, image, price, and description for the currentElem
        if (displayedItems.length < 6)
          displayedItems.push(
            <FeedItem
              name={currentElem.name}
              image={currentElem.image}
              price={currentElem.price}
              description={currentElem.description}
            />
          );
      }
    })
    .catch((err) => console.log('an error has occurred'));

  // return the elements that comprise the feed display
  return <div id="feedDisplay">{displayedItems}</div>;
};

// ---- export ----
export default FeedDisplay;
