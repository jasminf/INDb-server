# Endpoints Spec

### List

##### Create List
`POST` `/lists/create`
```json
{
    "list_name": "Top 10 Rock artists"
}
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

##### Add Item to List
`POST` `/lists/:listId/add_item`
```json
{
    "data": {...} // ***
}
```
Returns:
```json
{
    "ok": true
}
```
##### Add items to list in bulk
`POST` `/lists/:listId/add_items_bulk`
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
`DELETE` `/lists/:listId/remove_item/:itemId`
```json
{
    "item_id": 123
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


