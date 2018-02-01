var ArtistsView = Backbone.View.extend({
    render: function(){
        this.$el.html("ARTISTS VIEW");
         return this;
    }
});

var ArtistsViewByID = Backbone.View.extend({
    initialize: function(){
        this.artistId = arguments[0].artistId; //
    },

    render: function(){
        this.$el.html("ARTIST ID:" + this.artistId);
        return this;
    }
});

var AlbumsView = Backbone.View.extend({
    render: function(){
        this.$el.html("ALBUMS VIEW");
        return this;
    }
});

var GenresView = Backbone.View.extend({
    render: function(){
        this.$el.html("GENRES VIEW");
        return this;
    }
});

var DefaultView = Backbone.View.extend({
    render: function(){
        this.$el.html("Default VIEW");
        return this;
    }
});

var AppRouter = Backbone.Router.extend({
    routes: {
        "albums": "viewAlbums",
        "artists": "viewArtists",
        "artists/:artistId": "viewArtistById",
        "genres": "viewGenres",
        "*other": "default"
    },

    viewAlbums: function () {
        var view = new AlbumsView({el: "#container"});
        view.render();
    },

    viewArtists: function () {
        var view = new ArtistsView({el: "#container"});
        view.render();
    },

    viewGenres: function () {
        var view = new GenresView({el: "#container"});
        view.render();
    },

    viewArtistById: function (artistId) {
        var view = new ArtistsViewByID({el: "#container", artistId: artistId});
        view.render();
    },

    default: function () {
        var view = new DefaultView({el: "#container"});
        view.render();
    }
});

var router = new AppRouter();
Backbone.history.start();

var NavView = Backbone.View.extend({
    events: {
        "click": "onClick"
    },

    onClick: function(e){
        var $li = $(e.target);
        router.navigate($li.attr("data-url"), {trigger: true});
    }
});

var navView = new NavView({el: "#nav"});