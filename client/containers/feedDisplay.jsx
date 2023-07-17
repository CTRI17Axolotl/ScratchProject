// ---- imports ----
import React, { useEffect, useState } from 'react';
import FeedItem from '../components/feedItem.jsx';
import { HStack } from '@chakra-ui/react';

// ---- build the feed display ----

// declare a const, feedDisplay, and assign it the value of a function definition that accepts one parameter, props
const FeedDisplay = () => {
  const [display, setDisplay] = useState([]);

  //declare a variable, displayed items, and assign it the value of an empty array
  const displayedItems = [];
  //   make a get request to the database for the name, image, price and description of the art
  // fetch('/items', {
  //   method: 'GET',
  //   // mode: 'no-cors'
  // })
  let subArray = [];
  useEffect(() => {
    fetch('/items')
      .then((data) => data.json())
      // .then(console.log('testing line 18'))
      // .then((res) => console.log(res))
      .then((data) => {
        // console.log('fetch request to backend worked', data);
        // loop through the array of data
        for (let i = 0; i < data.length; i++) {
          // declare a variable, currentElem, and assign it the value of data at index i
          const currentElem = data[i];
          // if the length of the displayedItems array is less than six, push a feedItem that contains the props informtion for the name, image, price, and description for the currentElem
          // if (displayedItems.length < 6)
          // while(subArray.length < 3){
          // if (subArray.length >= 3) {
          //   displayedItems.push(subArray);
          //   subArray = [];
          //   console.log('i: ', i, 'displayedItems: ', displayedItems, 'subArray: ', subArray)
          // }
          displayedItems.push(
            <FeedItem
              key={i} // child node error fix
              itemName={currentElem.itemName}
              // image={currentElem.image}
              price={currentElem.price}
              artist={currentElem.artist}
              description={currentElem.description}
            />
          );
          // }
          // displayedItems.push(
          //   <div className="subArr--container">{subArray}</div>
          // );
        }
        setDisplay(displayedItems);
      })
      .catch((err) => console.log('an error has occurred'));
  }, []);

  // return the elements that comprise the feed display
  return <div id="feedDisplay">{display}</div>;
};

// ---- export ----
export default FeedDisplay;
