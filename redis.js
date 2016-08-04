var redis = require('redis');

// var client = redis.createClient(6379, '127.0.0.1');
var client = redis.createClient(6379,'test-001.wcy6sh.0001.usw2.cache.amazonaws.com', {});

client.on("error", function (err) {
	console.log("Error " + err);
});

client.on('ready', function() {
	console.log('redis READY.');
});

client.on('connect', function() {
	console.log('redis CONNECTED.');
});

// client.mset([
// 	"key1", "user1",
// 	"key2", "user2",
// 	"key3", "user3",
// ], function (err, res) {});

// client.get("key3", function(err, reply) {
// 	// reply is null when the key is missing
// 	console.log(reply);
// });

// client.append("key3","ishere", function(err,res) {});

// client.get("key3", function(err, reply) {
// 	// reply is null when the key is missing
// 	console.log(reply);
// });

// client.set('key', 'world', function(e,r) {});

// client.get("key", function(e,r) {
// 	// reply is null when the key is missing
// 	console.log(r);
// });

// client.del('list', function(e,r) {});

// client.rpush('list','hello', function(e,r) {});
// client.rpush('list',' world', function(e,r) {});
// client.rpush('list',' tapp', function(e,r) {});

// client.llen('list', function(e,r) {
// 	console.log(r);
// 	client.lrange('list', 0, r, function(e,r) {
// 		console.log(r);
// 	});
// });

// client.del('key', function(e,r) {});

// var person = {
// 	name: 'kevin',
// 	age: 21,
// }

// var personStr = JSON.stringify(person);

// client.set('key', personStr, function(e,r) {});

// client.get("key", function(e,r) {
// 	// reply is null when the key is missing
// 	console.log(JSON.parse(r));
// });


// // person with name = kevin and age = 21
// var name = 'kevin',
// var age = 21,
// var response = null;

// // GENERATE KEY
// var key = 'personQuery:name='+name+'&age='+age;

// // LOOK IN CACHE, IF FOUND THEN RETURN
// client.get(key, function(e,r) {
// 	if(r) {
// 		response = r;
// 	} else {
// 		// ELSE 
// 		// GENERATE sql EXECUTE sql AND STORE IN CACHE
// 		var sql = 'SELCT * FROM person WHERE name = "kevin" AND age = 21';
// 		response = {
// 			id: 1,
// 			name: 'kevin',
// 			age: 21
// 		};

// 		client.set('key', response.id, function(e,r){});
// 	}
// });

// // RETURN response to client
// return response;



