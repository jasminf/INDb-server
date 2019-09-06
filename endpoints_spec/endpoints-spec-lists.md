# Endpoints Spec

### List

##### Create List
`POST` `/lists/create`
```json
{
    "list_name": "Top 10 Rock artists",
    "type": ListType.MusicArtist
}
```
```
ListType(Enum):
    MusicArtist
    MusicAlbum
    Comics
    BookAuthor
    Book
```

Returns:
```json
{
    "list": {
        "id": 3,
        "name": "Top 10 Rock artists"
    }
}
```


##### View List
`GET` `/lists/:listId`
```json
{}
```
Returns:
```json
{
    "list": {
        "id": 3,
        "name": "Top 10 Rock artists",
        "artists": [
            {
                "id": 3,            // ID from the DB
                "artist_name": "Primus",
                "deezer_artist_id": '123123123"
            },
            {...}
        ]
    }
}
```

##### Add Music Artist to List
Adds an Artist by it's `deezer_artist_id`.
If it's not saved in the DB - fetch the data from Deezer and save the new Artist.
It returns the Artist from the DB.
`PUT` `/lists/:listId/add_music_artist`
```json
{
    "artist": {
        "deezer_artist_id": '123123123"      // Primus artist ID
    }
}
```
Returns:
```json
{
    "artist": {
        "id": 3,            // ID from the DB
        "artist_name": "Primus",
        "deezer_artist_id": '123123123"
    }
}
```

##### Add Music Album to List
Adds an Album by it's `deezer_album_id`.
If it's not saved in the DB - fetch the data from Deezer and save the new Album.
It returns the Album from the DB.
`PUT` `/lists/:listId/add_music_album`
```json
{
    "album": {
        "deezer_album_id": '657567567567"
    }
}
```
Returns:
```json
{
    "album": {
        "album_name": "bla bla",
        "deezer_album_id": '657567567567",
    }
}
```
##### (**FOR LATER**) Add items to list in bulk
`PUT` `/lists/:listId/add_items_bulk`
```json
{
    "data": [{...}] // ***
}
```
Returns:
```json
{
    "ok": true
}
```
##### Remove item from list
Removes the Artist/Album from the List.
It **doesn't** delete the Artist/Album itself.
`PUT` `/lists/:listId/remove_item/:artistId||:albumId`
```json
{
    "artist_id||album_id": 123
}
```
Returns:
```json
{
    "ok": true
}
```
##### Edit list
`POST` `/lists/:listId/edit`
```json
{
    "list_name": "Top 10 Jazz artists"
}
```
Returns:
```json
{
    "list": {
        "id": 3,
        "name": "Top 10 Jazz artists"
    }
}
```
##### Delete list
`DELETE` `/lists/:listId/delete`
```json
{}
```
Returns:
```json
{
    "ok": true
}
```



##### View All My Lists
`GET` `/lists`
```json
{}
```
Returns:
```json
{
    "lists": [
        {
            "id": 3,
            "name": "Top 10 Rock artists"
        },
        {...}
    ]
}
```


##### View All My Lists By Type
`GET` `/lists/:listType`
```json
{}
```
Returns:
```json
{
    "lists": [
        {
            "id": 3,
            "name": "Top 10 Rock artists"
        },
        {...}
    ]
}
```


##### View All User's Lists
`GET` `user/:userId/lists`
```json
{}
```
Returns:
```json
{
    "lists": [
        {
            "id": 3,
            "name": "Top 10 Rock artists"
        },
        {...}
    ]
}
```