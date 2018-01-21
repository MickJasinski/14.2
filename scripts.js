// var element =
//   React.createElement('div', {},
//     React.createElement('h1', {}, 'Films'),
//     React.createElement('ul', {},
//       React.createElement('li', {},
//         React.createElement('h2', {}, 'Plump Fiction'),
//         React.createElement('p', {}, 'Parody')
//       ),
//       React.createElement('li', {},
//         React.createElement('h2', {}, 'Kill Bill'),
//         React.createElement('p', {}, 'Kinda different')
//       )
//     )
//   );


// Movies data
var movies = [{
  id: 1,
  title: 'Plump Fiction',
  desc: 'Comedy',
  img: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Plump_Fiction.jpg/215px-Plump_Fiction.jpg'
}, {
  id: 2,
  title: 'Kill Bill',
  desc: 'Kinda different',
  img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYTczMGFiOWItMjA3Mi00YTU5LWIwMDgtYTEzNjRkNDkwMTE2XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_UX182_CR0,0,182,268_AL_.jpg'
}, {
  id: 3,
  title: 'Natural Born Killers',
  desc: 'Mad cool',
  img: 'https://upload.wikimedia.org/wikipedia/en/1/19/NBKillaz.jpg'
}, {
  id: 4,
  title: 'Hydrozagadka',
  desc: 'Another level',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Quotation_from_film_%27Hydrozagadka%27_advertising_XXXIV_Polish_Film_Festival_in_Gdynia_2009_-_1.jpg/800px-Quotation_from_film_%27Hydrozagadka%27_advertising_XXXIV_Polish_Film_Festival_in_Gdynia_2009_-_1.jpg'
}];

// Movie template
var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {
      key: movie.id
    },
    React.createElement('h2', {}, movie.title),
    React.createElement('p', {}, movie.desc),
    React.createElement('img', {
      src: movie.img
    })
  );
});

// Container
var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Movies:'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));