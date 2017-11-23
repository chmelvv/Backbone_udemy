//Song model
var Song = Backbone.Model.extend({  //constructor started from Capital letter
    initialize: function () {
        console.log("A new song.");
    }
});

var song = new Song();

//set attributes in model
var Artist = Backbone.Model.extend();
var artist = new Artist();


//variant  1: one parameter
artist.set("name", "Viktor");

//variant  2: several parameters
artist.set({
    surname: "Chmel",
    age: 34
});

//variant 3: in Constructor
var Actor = Backbone.Model.extend();
var actor = new Actor({
    name: "Mylkola",
    age: 25
})

//variant 4: default parameters
var Concert = Backbone.Model.extend({
    defaults: {
        notes: "With symphonic orchestra"
    }
});

// to see model in browser console type model name
// e.g. >artist

// to convert to JSON object:
// >artist.toJSON()

var age = actor.get("age"); //how to get attribute
actor.unset("age");
actor.has("age"); //false
actor.clear();

//===== Validation
var Person  = Backbone.Model.extend({
    validate: function (attrs) {
        if (!attrs.title)
            return "Title is missing";
    }
}) ;

var person = new Person();

// person.set("title")
// person.isValid()
// false
//
// person.set("title", "Sashko")
// person.isValid()
// true

person.isValid();

var lastError = person.validationError;

//=== Model Inheritance
var Animal = Backbone.Model.extend({
    walk: function () {
        console.log("Animal walking ...");
    }
});
var Dog = Animal.extend({
    walk: function () {
        console.log("Dog walking ..."); //rewrite ancestor
        Animal.prototype.walk.apply(this) //call parent methods
    }
});
var dog = new Dog();
dog.walk();
