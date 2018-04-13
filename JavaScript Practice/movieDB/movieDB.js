console.log("CONNECTED");
var movies = [
	{
		title: "In Bruges",
		watched: true,
		rating: 5
	},
	{
		title: "Frozen",
		watched: false,
		rating: 4.5
	},
	{
		title: "Mad Max Fury Road",
		watched: true,
		rating: 5
	},
	{
		title: "Les Miserables",
		watched: false,
		rating: 3.5
	}
];

movies.forEach(function(movie) {
	console.log(buildString(movie));
});

function buildString(movie) {
	var result = "You have ";
	if (movie.watched) {
		result += "watched";
	}
	else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + "stars";
	return result;
}