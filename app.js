// What events will your application need? - obtain location create map add location to map request desired locations from user add to map 
// What APIs will you need and in what order? - map API, geolocation api
// How will you obtain the user's location? using a geolocation api
// How will you add the user's location to the map?
// How will you get the selected location from the user? search ?
// How will you add that information to the map?

const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'fsq3G3YDOUqP+SU8isegsvfbs4hceJsus8ZsL8XqWoTYclA='
    }
  };
  
  fetch('https://api.foursquare.com/v3/places/search', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));