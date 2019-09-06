# Endpoints Spec

### Search

##### Search Music Artists
`GET` `/search/music/artist/:query`
```json
{}
```
Returns:
```json
{
    "results": [
        {
            "artist_name": "Primus",
            "deezer_artist_id": "asd87asd786a7sd"
        }
    ]
}
```

##### Search Music Albums
`GET` `/search/music/albums/:query`
```json
{}
```
Returns:
```json
{
    "results": [
        {
            "album_name": "Primus",
            "deezer_album_id": "asd87asd786a7sd"
        }
    ]
}
```



##### View Artist
`GET` `music/artist/:artistId`
```json
{}
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


##### View Album
`GET` `music/album/:albumId`
```json
{}
```
Returns:
```json
{
    "album": {
        "id": 3,            // ID from the DB
        "album_name": "Primus",
        "deezer_album_id": '123123123"
    }
}
```