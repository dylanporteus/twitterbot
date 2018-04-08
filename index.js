console.log('The bot is starting');

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

//GET

var params = {
	q: 'yeet',
	count: 10
};

T.get('search/tweets', params, gotData);

function gotData(err, data, response){
	var tweets = data.statuses;
	for (var i = 0; i < tweets.length; i++){
		console.log(tweets[i].text);
	}
};

//POST
var tweet = {
	status: 'Do not go gentle into that good night. Rage, rage against the dying of the light.'
}

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response){
	console.log("It worked!");
}