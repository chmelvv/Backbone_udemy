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

var VehicleView= Backbone.View.extend({
// Each Vehicle should be displayed as an LI with the class vehicle.
    tagName: "li",
    class: "vehicle",



    render: function(){
// Inside the LI display the registration number of the vehicle followed by a button called Delete.
        this.$el.html(this.model.get("vehicleNumber") + ' <button>Delete</button>');
// Each list item should have the HTML5 data attribute data-color.
        this.$el.attr("data-color", this.model.get("color"));
        this.$el.attr("style", "color:" + this.model.get("color")); //my invention
        return this;
    }

});

var VehiclesView = Backbone.View.extend({
    tagName: "ul",

    render: function () {
        var self = this;
        this.model.each( function(vehicle){
            var  vehicleView = new VehicleView({ model: vehicle}); //create vehicleView object
            self.$el.append(vehicleView.render().$el) //append to <ul> ours <li> elements
        });

    }
});

var vehiclesView = new VehiclesView({ el: "#vehicles", model: vehicles});
vehiclesView.render();



// When the delete button is clicked, remove the corresponding LI from the DOM.