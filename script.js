var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        src: 'http://getfound.pl/wp-content/uploads/2014/09/Alegriphotos.jpg',
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        src: 'http://getfound.pl/wp-content/uploads/2014/09/Alegriphotos.jpg',
    },
    {
        id: 3,
        title: 'Rocky',
        desc: 'Film o bokserze',
        src: 'one.jpeg',
    },
];

/*
var element =
    React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements),
    );
*/

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      React.createElement('h2', {}, this.props.title)
    )
  }
});


var MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      React.createElement('p', {}, this.props.desc)
    )
  }
});

var MovieSource = React.createClass({
  propTypes: {
    image: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('img', {}, this.props.src)
    )
  }
});


var MovieElements = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired
  },

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {},
          this.props.movies.map(function(movie) {
            return React.createElement(Movie, {key: movie.id, movie: movie});
          })
        )
      )
    )
  }
});


var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },

  render: function() {
    return (React.createElement('li', {key: movie.id},
        React.createElement(MovieTitle, {title: this.props.movie.title}),
        React.createElement(MovieDescription, {desc: this.props.movie.desc}),
        React.createElement(MovieSorce, {src: this.props.movie.src}),
      )
    )
  }
});

var element = React.createElement(Movie);
ReactDOM.render(element, document.getElementById('app'));


