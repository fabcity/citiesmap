# Fab City Network Map

This is an interactive map of the cities in the Fab City Network.

## How to View the Map

This map is completely self-contained in the `index.html` file. You do not need to run a local web server.

To view the map, simply open the `index.html` file in your web browser.

## How to Update the City Data

The city data is embedded directly in the `index.html` file inside a `<script>` tag, in a JavaScript variable called `CITIES_DATA`.

To add, remove, or edit cities, you will need to edit this array directly in the `index.html` file. Each city object in the array should have the following format:

```javascript
{
    "name": "City Name",
    "lat": 12.345,
    "lng": -67.890,
    "url": "https://example.com"
}
```

Make sure to maintain the correct JSON format when editing the data.
