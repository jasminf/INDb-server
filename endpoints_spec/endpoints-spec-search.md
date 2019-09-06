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