var Song = Backbone.Model.extend();
var Songs = Backbone.Collection.extend({
    model: Song
});

var songs = new Songs([
    new Song({id: 1, title: "Blue in Green"}),
    new Song({id: 2, title: "shello;)"}),
    new Song({id: 3, title: "Червона Калина"})
]);

var SongView = Backbone.View.extend({
    tagName: "li",
    render: function(){
        this.$el.html(this.model.get("title"));
        this.$el.attr("id", this.model.id); //to identify in html code
        return this;
    }
});

var SongsView = Backbone.View.extend({
    tagName: "ul",

    initialize: function(){
        this.model.on("add", this.onSongAdded, this);
        this.model.on("remove", this.onSongRemoved, this);
    },

    onSongAdded: function(song){
        var songView = new SongView({model: song});
        this.$el.append(songView.render().$el);
    },

    onSongRemoved: function (song) {
        //this.$el.find("li#" + song.id).remove();
        this.$("li#" + song.id).remove();
    },

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