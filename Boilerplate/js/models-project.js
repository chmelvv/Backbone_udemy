var Vehicle = Backbone.Model.extend({

    urlRoot : "/api/vehicles",

    idAttribute : "registrationNumber",

    validate: function (attrs) {
        if (!attrs.registrationNumber)
            return "registrationNumber is required";
    },

    start: function () {
        console.log("Vehicle is started.");
    }
});

var Car = Vehicle.extend({
    start: function () {
        console.log("Car with registration number " + this.get("registrationNumber") + " started.");
    }
});

var car = new Car({
    registrationNumber : "XLI887",
    color: "Blue"
});

car.unset("registrationNumber");
console.log("Is car valid:" + car.isValid());

car.set({registrationNumber : "XLI887"});
console.log("Is car valid:" + car.isValid());
car.start();