## Database
## Database

### Users
- userId - number /autogen
- name - string 
- password - (Hashed + Salt) - string
- session  - 
- email - string
- favorites -  of Favorites [UniqueId, UniqueId, ... ] - array of Unique Ids

### Pieces
- itemId - Unique ID - ID-  autogen? 
- image  - url / string ??
- title - String
- artist - String
- description - String
- ownerId: UniqueID (ref to user table)
- forSale: Boolean
- price - Num
- collection - (Realism / Modernism / Classicism / Photography / Sculpture) 
- sizeClass - Int 0/1/2
- sizeL - Num
- sizeW - Num
- sizeH - Num


## Original Backend Express Routes
--ITEMS--
POST /items {itemName, artist, description, price}
GET /items -- get all
PATCH /items + {itemName, newDescription, newPrice} -- search for name, update description + price
DELETE /items + {itemName} 

--USERS--
POST /users/ + body {firstName, lastName, email, address} -- pst
GET /users/FIRSTNAME -- search db for first name
PATCH /users/FIRSTNAME + body {newEmail, newAddress} -- update 
DELETE /users/FIRSTNAME -- delete
## Original Backend Express Routes
--ITEMS--
POST /items {itemName, artist, description, price}
GET /items -- get all
PATCH /items + {itemName, newDescription, newPrice} -- search for name, update description + price
DELETE /items + {itemName} 

--USERS--
POST /users/ + body {firstName, lastName, email, address} -- pst
GET /users/FIRSTNAME -- search db for first name
PATCH /users/FIRSTNAME + body {newEmail, newAddress} -- update 
DELETE /users/FIRSTNAME -- delete

## Updated Backend Express Routes
GET /items -- get and return all items
## Updated Backend Express Routes
GET /items -- get and return all items



## Site Experience
- Home View
  - Nav Bar
    - Public: "Log In or Create Account" in corner
    - Known: "Favorites * Username"
  - Logged-In Gallery
    - Grid of your favorites (and fave artists?)
  - Filter
    - Price ($/$$/$$$)
    - Size (Small / Medium / Large)
    - Collection (Realism / Modernism / Classicism / Photography / Sculpture)
  - Cards
    - Big Image
    - Name
    - Artist
    - "For Sale by _username_: _price" or "Sold!"
    - Fave
  - Logged-In State
    - Change nav bar
    - Fave Icon on pictures ?? 

- Log-in / Sign-Up
  - Sign in or create new account


- Detail View - popover
  - Title 
  - Artist 
  - Big-Ass Art
  - "For Sale by _username_: price" or "Sold!" 
  - Contact Seller  - mailto:seller@gmail.com
  - Fave button
  - Description

- User View
  - For Sale by User Gallery
    - Owner: New Art Button / popover
    - Others: Contact Seller
  - Click on Art
    - Owner: 
    - Other: Edit (Pre-Populate Name/Artist/Price -- buttons to Mark as Sold, Delete)
## Site Experience
- Home View
  - Nav Bar
    - Public: "Log In or Create Account" in corner
    - Known: "Favorites * Username"
  - Logged-In Gallery
    - Grid of your favorites (and fave artists?)
  - Filter
    - Price ($/$$/$$$)
    - Size (Small / Medium / Large)
    - Collection (Realism / Modernism / Classicism / Photography / Sculpture)
  - Cards
    - Big Image
    - Name
    - Artist
    - "For Sale by _username_: _price" or "Sold!"
    - Fave
  - Logged-In State
    - Change nav bar
    - Fave Icon on pictures ?? 

- Log-in / Sign-Up
  - Sign in or create new account


- Detail View - popover
  - Title 
  - Artist 
  - Big-Ass Art
  - "For Sale by _username_: price" or "Sold!" 
  - Contact Seller  - mailto:seller@gmail.com
  - Fave button
  - Description

- User View
  - For Sale by User Gallery
    - Owner: New Art Button / popover
    - Others: Contact Seller
  - Click on Art
    - Owner: 
    - Other: Edit (Pre-Populate Name/Artist/Price -- buttons to Mark as Sold, Delete)

- New Art:
  - Name of piece
  - Artist
  - Price
  - Image
  - Dimensions: 
  - Collection
  - Description
- New Art:
  - Name of piece
  - Artist
  - Price
  - Image
  - Dimensions: 
  - Collection
  - Description













Original Group: KYLE, WES, MIKE, WADE