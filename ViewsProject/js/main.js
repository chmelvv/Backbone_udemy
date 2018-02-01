var SongView1 = Backbone.View.extend({

    // tagName: "p", //tagName - is about what element will be inserted while rendering
    // id: "SongView1_id", //id - is about what id will be inserted while rendering
    // className: "SongView1_class",
    // in this case this.el = p#SongView1_id.SongView1_class

    //this.el = div by default if nothing set before

    render: function(){
        this.$el.html("Hello world - 1 !");
            // this.$el - contains View`s DOM element
            // .html() - is jQuery method

        return this;
    }
});

var SongView2 = Backbone.View.extend({

    render: function(){
        this.$el.html("Hello world - 2 !");
        // this.$el - contains View`s DOM element
        // .html() - is jQuery method

        return this;
    }
});

var songView1 = new SongView1().render();
var songView2 = new SongView2().render();

$("#container")
    .append(songView1.$el)
    .append(songView2.$el);