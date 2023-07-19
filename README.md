## Database

### Users
- Unique ID - number /autogen
- Name - string 
- Password (Hashed + Salt) - string
- Session  - 
- Contact Email - string
- List of Favorites [UniqueId, UniqueId, ... ] - array of Unique Ids

### Pieces
- Unique ID - ID-  autogen? 
- Image - url / string ??
- Title - String
- Artist Name - String
- Description Text - String
- Owner: UniqueID (ref to user table)
- ForSale: Boolean
- Price - Num
- Collection - (Realism / Modernism / Classicism / Photography / Sculpture) 
- SizeClass - Int 0/1/2
- L - Num
- W - Num
- H - Num


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













Original Group: KYLE, WES, MIKE, WADE
