var element = React.createElement(Movie, {key: movie_id, title: movie.title, desc: movie.desc, src: movie.src},
);
ReactDOM.render(element, document.getElementById('app'));

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



var element =
    React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements),
    );


var Movie = React.createClass('Movie', function() {
    propTypes: {
        image: React.PropTypes.object.isRequired,
        //desc: React.PropTypes.object.isRequired,
        //title: React.PropTypes.object.isRequired,
        //id: React.PropTypes.object.isRequired,
    },
    
    render: function() {
        return: var moviesElements = movies.map(function(movie) {
            return 
                React.createElement('li', {key: movie.id},
                React.createElement('h2', {}, movie.title),
                React.createElement('p', {}, movie.desc),
                React.createElement('img', {src: movie.src})
                );
        });
    },
});

    



