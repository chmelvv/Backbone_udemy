// Create the required Backbone views to display a list of Vehicles.
var Vehicle = Backbone.Model.extend({
    idAttribute: "vehicleNumber"
});

var Vehicles = Backbone.Collection.extend({
    model: Vehicle
});

var VehicleView= Backbone.View.extend({
// Each Vehicle should be displayed as an LI with the class vehicle.
    tagName: "li",
    class: "vehicle",

    events: {
        "click .delete": "onClickDelete"
    },

// When the delete button is clicked, remove the corresponding LI from the DOM.
    onClickDelete: function(e){
        e.stopPropagation();
        this.remove();
    },

    render: function(){
// Inside the LI display the registration number of the vehicle followed by a button called Delete.
        this.$el.html(this.model.get("vehicleNumber") + ' <button class="delete">Delete</button>');
// Each list item should have the HTML5 data attribute data-color.
        this.$el.attr("data-color", this.model.get("color"));
        this.$el.attr("style", "color:" + this.model.get("color")); //my invention
        return this;
    }

});

var VehiclesView = Backbone.View.extend({

    initialize: function(){
        bus.on("newVehicle", this.addNewVehicle, this);
    },

    render: function () {
        var self = this;
        this.model.each( function(vehicle){
            var  vehicleView = new VehicleView({ model: vehicle}); //create vehicleView object
            self.$el.append(vehicleView.render().$el) //append to <ul> ours <li> elements
        });

        return this;
    },

    addNewVehicle: function(newVehicleNumber){
        var newVehicle = new Vehicle({vehicleNumber: newVehicleNumber, color: "black"});
        var vehicleView = new VehicleView({ model: newVehicle});
       // this.model.add(newVehicle);
        this.$el.prepend(vehicleView.render().$el)
    }


});

// Create a new view called NewVehicleView. This view should be rendered above the list
// of vehicles and include a text box to add a new vehicle to the list. Next to the text box
// should be a button called Add.

var NewVehicleView = Backbone.View.extend({

    model: Vehicle,

    //this.el = div by default

    events: {
        "click #addNewVehicleButton": "onAddButtonClick",
        "keypress input#newVehicleNumber" : "onEnterPress"

    },

    render: function(){
        this.$el.html("New vehicle number:" + "<input type='text' id='newVehicleNumber'>" +
            "<input type='submit' id='addNewVehicleButton' value='Add'>");

        return this;
    },

    onEnterPress: function(e){
        if (e.keyCode == 13) {
            this.onAddButtonClick();
        }
    },

    onAddButtonClick: function () {
        var input = this.$el.find("#newVehicleNumber");
        var newVehicleNumber = input.val();
        bus.trigger("newVehicle", newVehicleNumber);
        input.val("");
    }
});

var vehicles = new Vehicles([
    new Vehicle({vehicleNumber: "AI 1234", color: "blue"}),
    new Vehicle({vehicleNumber: "DF 2344", color: "red"}),
    new Vehicle({vehicleNumber: "RG 1456", color: "green"}),
    new Vehicle({vehicleNumber: "HJ 7734", color: "black"})
]);

var bus = _.extend({}, Backbone.Events);
var newVehicleView = new NewVehicleView({ bus: bus });
var vehiclesView = new VehiclesView({ model: vehicles,  bus: bus });

$("#container")
    .append(newVehicleView.render().$el)
    .append(vehiclesView.render().$el);