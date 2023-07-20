## Front -> Express Routes List

GET /pieces -- send art as array of objects[x]

POST /pieces -- receive new art piece: {title, image, artist, description, ownerId, forSale, price, style, sizeL, sizeW, sizeH}. Authenticate, Calculate sizeClass and priceClass, create new listing (which generates pieceId), and send newly updated array of all pieces.
-- is sizeClass and priceClass getting calculated on front end?

PUT /pieces/:pieceId -- receive updatable fields {description, forSale, price}, Authenticate, calculate priceClass, update the req.params.pieceId piece in the db, and send newly updated array of all pieces.
-- is it possible to update .pieceId? if it's created using a new Object constructur by mongoDB?

GET /users -- send array of _some_ data for all users -- userId, name, email, and favorites [x]
POST /users/login -- receive username, password -- verify user, return session [x]
POST /users/create -- receive username, password, name, email -- create user if valid, return session [x]
~~POST /users/logout -- destroy session (is this necessary?)~~
PUT /users/updateFaves -- receive array of pieceId 's, authenticate, update that user's favorites, return updated array for all users (see GET /users)

### Users

- userId - number /autogen
- username - string
- name - string
- password - (Hashed + Salt) - string
- session -
- email - string
- favorites - of Favorites [UniqueId, UniqueId, ... ] - array of Unique Ids

### Pieces

- pieceId - Unique ID - ID- autogen?
- image - url / string ??
- title - String
- artist - String
- description - String
- ownerId: UniqueID (ref to user table)
- forSale: Boolean
- price - Num
- style - (Realism / Modernism / Classicism / Photography / Sculpture)
- sizeClass -
-small
-medium
-large
<!-- - priceClass - Int 0/1/2
- sizeL - Num
- sizeW - Num
- sizeH - Num -->

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
    - Known: "Favorites \* Username"
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
    - "For Sale by _username_: \_price" or "Sold!"
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
  - Contact Seller - mailto:seller@gmail.com
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
    - Known: "Favorites \* Username"
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
    - "For Sale by _username_: \_price" or "Sold!"
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
  - Contact Seller - mailto:seller@gmail.com
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

Original Group: KYLE, WES, MIKE, WADE
