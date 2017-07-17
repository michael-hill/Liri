var keys = require('./keys.js');
var fs = require('fs');
var request = require('request');
var twitter = require('twitter');
var spotify = require('spotify');

 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
		console.log(data);
});