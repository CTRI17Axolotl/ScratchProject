// ---- import here ----
import React from 'react';

// ---- build the individual feedItem component ----

// declare a const, feedItem, that is assignment the value of a function definition that takes one parameter, props
const FeedItem = (props) => {
  // return a feedItem that displays the name, image, price, and description of the art object, all of which will be passed down as props
  return (
    <div className="feedItem">
      <div className="itemName"><strong>Title: </strong>{props.itemName}</div>
      <div className="artist"><strong>Artist: </strong> {props.artist}</div>
      {/* <img src={props.image}></img> */}
      <div className="price"><strong>Price: </strong>${props.price}</div>
      <div className="description"><strong>Description: </strong>{props.description}</div>
      {/* add the ability to users to adjust their bid and purchase the item at the bottom */}
      <div className="feedItemButtonsRow">
        <button className="inputBidButton">Input Bid</button>
        <button className="buyItemButton">Purchase Item</button>
      </div>
      
    </div>
  );
};

// ---- export here ----
export default FeedItem;
