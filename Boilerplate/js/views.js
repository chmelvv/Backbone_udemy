// var SongView = Backbone.View.extend({
//
//     tagName: "span",
//     className: "song",
//     attributes: {
//         "data-genre": "Jazz"
//     },
//     id: "1234",
//     render: function(){
//         this.$el.html("Hello me!"); // http://api.jquery.com/html/ set html content for first matched element.
//         return this;
//     }
// });

// first variant
// var songView = new SongView({ el: "#container" });
// songView.render();

//second variant
//var songView = new SongView();

// songView.render();
// $("#container").html(songView.$el);
// $("#container").html(songView.render().$el);

// ======================

var Song = Backbone.Model.extend();
var Songs = Backbone.Collection.extend({
    model: Song
});
var songs = new Songs([
    new Song({title: "Blue in Green"}),
    new Song({title: "Romashello;)"}),
    new Song({title: "Червона Калина"})
]);


var SongView = Backbone.View.extend({

    tagName: "li",

    events: { //to catch DOM events
      "click": "onClick", //very general event listener!!!
      "click .bookmark": "onClickBookmark"
    },

    onClick: function () {
        console.log("Listen clicked");
    },

    // onClickBookmark: function(){
    //     console.log("Bookmark clicked");
    // },

    onClickBookmark: function(e){
        e.stopPropagation(); //does not pass to all other event listeners.
        // The first caught the most narrow event, so general onClick - does not catch
        console.log("Bookmark clicked");
    },

    render: function(){
        this.$el.html(this.model.get("title") + " <button>Listen</button> <button class='bookmark'>Bookmark</button>");
        return this;
    }
});

var SongsView = Backbone.View.extend({

    render: function(){
        var self = this; //to use SongsView "this" in each(), but not song "this"
        this.model.each(function(song){ //iterate by model = songs collection
            var songView = new SongView({model: song});
            self.$el.append(songView.render().$el);
        })
    }
});

var songsView = new SongsView({el: "#songs", model: songs});
songsView.render();

