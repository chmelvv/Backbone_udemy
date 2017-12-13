// Create the required Backbone views to display a list of Vehicles.
var Vehicle = Backbone.Model.extend({
    idAttribute: "vehicleNumber"
});

var Vehicles = Backbone.Collection.extend({
    model: Vehicle
});

var vehicles = new Vehicles([
    new Vehicle({vehicleNumber: "AI 1234", color: "blue"}),
    new Vehicle({vehicleNumber: "DF 2344", color: "red"}),
    new Vehicle({vehicleNumber: "RG 1456", color: "green"}),
    new Vehicle({vehicleNumber: "HJ 7734", color: "black"})
]);

// Each Vehicle should be displayed as an LI with the class vehicle. Inside the LI display
// the registration number of the vehicle followed by a button called Delete.
var VehicleView= Backbone.View.extend({
    tagName: "li",
    class: "vehicle",

    render: function(){
        this.$el.html(this.model.get("vehicleNumber") + ' <button>Delete</button>');
        this.$el.attr("data-color", this.model.get("color"));
        this.$el.attr("style", "color:" + this.model.get("color"));
        return this;
    }

});

var VehiclesView = Backbone.View.extend({
    tagName: "ul",
    class: "vehicles",

    render: function () {
        var self = this;
        this.model.each( function(vehicle){
            var  vehicleView = new VehicleView({ model: vehicle});
            self.$el.append(vehicleView.render().$el)
        });

    }
});

var vehiclesView = new VehiclesView({ el: "#vehicles", model: vehicles});
vehiclesView.render();

//
// var vehiclesView = new VehiclesView({model: vehicles});
// vehiclesView.render();

// Each list item should have the HTML5 data attribute data-color.

// When the delete button is clicked, remove the corresponding LI from the DOM.