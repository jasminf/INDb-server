# Models Spec

#### User
```json
{
    name: String
    email: String
}
```

#### List
```json
{
    id: Object
    name: String
    user_id: ObjectId
    type: ListType(Enum)
    item_ids: [ObjectId, ...]  // [MusicArtist.id] OR [MusicAlbum.id]
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

#### MusicArtist
```json
{
    artist_name: String,
    deezer_artist_id: String
    album_ids: [ObjectId, ...]  // FOR LATER
}
```


#### MusicAlbum
```json
{
    album_name: String,
    deezer_album_id: String
    artist_id: ObjectId     // FOR LATER
}
```