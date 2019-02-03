
/*
TABLE Users {

  id: int // primary key
  firstName: string,
  lastName: string,
  email: string,
  password: string,

}

// User has many Lists
// List belongs to User

TABLE Lists {
  id: int // primary key
  name: string, // custom name e.g "Top 5 artist of all time"
  user_id: string // foreign key
  type: string // "artist" | "albums" | "books" | ...
  is_default: boolean

  // favorite_ids: [8, 1, 4, 7] // optional!
}

// List has many Favorites
// Favorite has many Lists

TABLE FavoriteLists {
  id: int // primary key
  favorite_id: string // foreign key
  list_id: string // foreign key
}

TABLE Favorite {

  id: int // primary key
  type: string, // artist, album, comics, book, ...
  relation_id: string // foreign key e.g artist_id or book_id etc...

}



// I have listId == 3 AND type = "artist"

// User -> List -> FavoriteLists -> Favorites -> Artists|Album



// List has many Artists
// Artist has many Lists

TABLE Artist {

  id: int // primary key
  name: string,
  deezerArtistId: string

}
// List has many Album
// Album has many Lists

TABLE Album {

  id: int // primary key
  name: string,
    deezerArtistId: string

}







//=============================================================
// List has many Artists
// Artist has many Lists

TABLE Artist {

  id: int // primary key
  name: string,
  deezerArtistId: string

}
// List has many Album
// Album has many Lists

TABLE Album {

  id: int // primary key
  name: string,
  deezerArtistId: string

}

TABLE AristLists {
  id: int // primary key
  artist_id: string // foreign key
  list_id: string // foreign key
}

TABLE AlbumLists {
  id: int // primary key
  album_id: string // foreign key
  list_id: string // foreign key
}






class User {
  constructor(data) {
    this.data = data;
  }

  get firstName() {
    return this.data.firstName;
  }

  get lastName() {
    return this.data.lastName;
  }
}

const user = new User()

conse.log( user.firstName )




class UsersDAL {

  constructor() {
    this.dbClient = new PGClient(dbconfig);
    this.dbClient.connect();
  }

  findAll() {
    this.dbClient.runQuery('SELECT * FREOM "Users"')
      .then( (res)=> {
        const rawData = res.data;

        const users = rawData.map( (userData)=> new User(userData) );

        return users
      })
  }

}









 */