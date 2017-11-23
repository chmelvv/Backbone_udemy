var Song = Backbone.Model.extend({
    urlRoot : "api/songs",
    id: 2,
    title: "Title"
});

var song = new Song();
song.fetch() //GET  http://localhost:63342/Backbone_udemy/Boilerplate/api/songs/2
//see http://backbonejs.org/#Model-id - because "id" is used to generate model URLs by default.
// you can change this by setting "idAttribute"
song.save(); //PUT api/songs/1

//
// song.set("title", "new title");
// song.fetch() //GET

var Author = Backbone.Model.extend({
    urlRoot : "api/authors",
    idAttribute :  "name"
});
var author = new Author({name: "Serzh"})
author.fetch(); // http://localhost:63342/Backbone_udemy/Boilerplate/api/authors/Serzh