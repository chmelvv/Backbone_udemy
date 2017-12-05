var Song = Backbone.Model.extend({
    defaults: {
        listeners: 0
    }
});

var SongView = Backbone.View.extend({

    // by render
    // initialize: function(){
    //     this.model.on("change", this.render, this); //what, how, context = view, not model.
    // },

    //by specific function
    initialize: function(){
        this.model.on("change", this.onModelChange, this); //what, how, context = view, not model.
    },

    onModelChange: function(){
        this.$el.addClass("someClass");
    },

    render: function(){
        this.$el.html(this.model.get("title") + " - Listeners: " + this.model.get("listeners"));
        return this;
    }
});

var song = new Song({ title: "Blue in Green"});

var songView = new SongView({el: "#container", model: song});
songView.render();

