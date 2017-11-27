var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
    model: Song
});

var songs = new Songs([
    new Song({ title: "Song1", genre: "Jazz", downloads: 300  }),
    new Song({ title: "Song2", downloads: 600 }),
    new Song({ title: "Song3", downloads: 1410  })
]);

songs.add(new Song({ title: "Song4" }));

console.log( songs.length );
console.log( songs.models.length );

// songs.at(0)
// songs.get("c1") //where c1 is cid of this model
// songs.remove(songs.at(0))


songs.add(new Song({ title: "Song5", genre: "Jazz", downloads: 110 }), { at : 0 }); //insert at specific place. We pass not just number, but JSON object which specifies index.
songs.push(new Song({ title: "Song6", genre: "Etno", downloads: 1210 })); //push came from stack - add to the end.

var jazzSongs = songs.where({ genre : "Jazz"}); // http://backbonejs.org/#Collection-where
console.log( jazzSongs );

var firstJazzSong = songs.findWhere({ genre: "Jazz" }); //http://backbonejs.org/#Collection-findWhere
console.log( firstJazzSong );

var filteredSongs = songs.where({ genre: "Jazz", title: "Song1"});
console.log( filteredSongs );

// http://underscorejs.org/#filter
// filter _.filter(list, predicate, [context]) Alias: select
// Looks through each value in the list, returning an array of all the values that pass a truth test (predicate).
var topDownloads = songs.filter(function (song) {
    return song.get("downloads") > 500; //a little bit unclear ....
});

console.log("top downloads",  topDownloads );

songs.each(function(song){ //iterate  http://underscorejs.org/#each
    console.log(song.get("title"));
});


//=== connecting collections to server

var ApiSongs = Backbone.Collection.extend({
    model: Song,
    url: "/api/songs"
});

var apiSongs = new ApiSongs();
apiSongs.fetch(); // GET /api/songs

apiSongs.fetch({
    data: {
        page: 2
    },
    success: function (){},
    error: function (){}
}); //GET /api/songs?page=2

