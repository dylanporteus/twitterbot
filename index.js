console.log('The bot is starting');

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

//GET

// var params = {
// 	q: 'yeet',
// 	count: 10
// };

// T.get('search/tweets', params, gotData);

// function gotData(err, data, response){
// 	var tweets = data.statuses;
// 	for (var i = 0; i < tweets.length; i++){
// 		console.log(tweets[i].text);
// 	}
// };

//POST

tweetIt();


setInterval(tweetIt, 1000*60*60) //This will cause the bot to post to Twitter automatically (once per hour in this case)



function tweetIt(){

  var r = Math.floor(Math.random()*100);

  var tweet = {
	status: 'Here is a random number ' + r 
  }

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response){
	console.log("It worked!");
 }
}