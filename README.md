Brendan Pauley Evari App

## Create a new react-based app

Using this snippet as an example:

```
function getMoviesFromApiAsync() {
  return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
}
```

- Get movie titles from api and display it
- Add a button to fetch the movie titles with a loading state
- Replace react state with redux