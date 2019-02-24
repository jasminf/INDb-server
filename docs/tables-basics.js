/*

TABLE Users {

  id: int // primary key
  email: string
}

// User has one Settings
// Settings belongs to User

TABLE Settings {

  id: int // primary key

  user_id: int // foreign key
}

// column email => row id in table Users
{
  ['adam@email.com', 'adam'] => 3,
  'yasmin@email.com' => 4,
  'buzi@email.com' => 5,
}




// User has many Favorites
// Favorite belongs to User

TABLE Favorites {

  id: int // primary key

  user_id: int // foreign key
}




*/

