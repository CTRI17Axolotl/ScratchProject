const placeholderArr = {
  data: [
    {
      itemID: 321,
      image:
        'https://res.cloudinary.com/dbinuhocd/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1689729340/vy0y9qqshr3amheudqcy.jpg?_s=public-apps',
      title: 'FFSS',
      artist: 'Schlep',
      description: 'Cutsie pod',
      ownerId: 123,
      forSale: false,
      price: 600,
      collection: 'Realism',
      sizeClass: 2,
    },
    {
      itemID: 654,
      image:
        'https://i.pinimg.com/originals/d1/fa/cf/d1facf6ccdd0a9637194cf54897bff02.jpg',
      title: 'Balloon Dog Poo',
      artist: 'Jeff Koons',
      description: 'Balloon Dog Pooping a balloon',
      ownerId: 456,
      forSale: true,
      price: 120000,
      collection: 'Sculpture',
      sizeClass: 2,
    },
    {
      itemID: 789,
      image:
        'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/11/19/1416367346530/b6ca0631-1f40-471c-9ef4-a777212bb64e-1669x2040.jpeg?width=700&quality=85&auto=format&fit=max&s=2cd3f67ee10d97bb8a22abb91d1cfece',
      title: 'Guardian',
      artist: 'Chuck Close',
      description: 'Close',
      ownerId: 987,
      forSale: false,
      price: 3000000,
      collection: 'Modernism',
      sizeClass: 2,
    },
    {
      itemID: 321,
      image:
        'https://i.pinimg.com/736x/be/bf/f4/bebff40922af6045f66652b15f177ebe--photo-graphy-b-w-photos.jpg',
      title: 'Stuck In A Moment',
      artist: 'John Dominis',
      description: 'Woman really likes to jump-rope',
      ownerId: 123,
      forSale: true,
      price: 15000,
      collection: 'Photography',
      sizeClass: 1,
    },
    {
      itemID: 432,
      image:
        'https://media.npr.org/assets/img/2012/10/12/3287-129_custom-ff79df6489c058ed10a81c8405e15da71b963457-s1100-c50.jpg',
      title: 'Oh...Alright...',
      artist: 'Roy Lichtenstein',
      description: 'One Dot At A Time',
      ownerId: 234,
      forSale: true,
      price: 160000,
      collection: 'Modernism',
      sizeClass: 1,
    },
  ],
};

export default placeholderArr;
// - itemId - Unique ID - ID-  autogen?
// - image  - url / string ??
// - title - String
// - artist - String
// - description - String
// - ownerId: UniqueID (ref to user table)
// - forSale: Boolean
// - price - Num
// - collection - (Realism / Modernism / Classicism / Photography / Sculpture)
// - sizeClass - Int 0/1/2
