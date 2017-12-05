// Create the required Backbone views to display a list of Vehicles.
var VehicleView= new Backbone.View.extend({
    tagName: "li",
    class: "vehicle:"
});

// Each Vehicle should be displayed as an LI with the class vehicle. Inside the LI display
// the registration number of the vehicle followed by a button called Delete.

// Each list item should have the HTML5 data attribute data-color.

// When the delete button is clicked, remove the corresponding LI from the DOM.