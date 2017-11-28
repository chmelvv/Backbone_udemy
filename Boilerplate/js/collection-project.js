//Create a Backbone collection for the Vehicle model you created in the last project.
var Cars = Backbone.Collection.extend({
    model: Car,

    list: function () {
        console.log("List Cars collection:");
        this.each(function(car){
            console.log( car.get("registrationNumber"));
        })
    }
});

// Add the following cars inside the collection:
// * car1: { registrationNumber = “XLI887”, colour = “Blue” }
// * car2: { registrationNumber = “ZNP123”, colour = “Blue” }
// * car3: { registrationNumber = “XUV456”, colour = “Gray” }
var cars = new Cars([
    new Car({ registrationNumber : "XLI887", colour : "Blue" }),
    new Car({ registrationNumber : "ZNP123", colour : "Blue" }),
    new Car({ registrationNumber : "XUV456", colour : "Gray" })
]);

//Find all the Blue cars and log them in the console.
console.log( cars.where({ colour : "Blue" }) );

//Find the car with the registration number XLI887 and log it in the console.
console.log( cars.where({ registrationNumber : "XLI887"}));

// Remove this car from the collection
cars.list();
cars.remove( cars.where({ registrationNumber : "XLI887"}) ); //must be passed object not filter predicate
cars.list();

//    Convert the collection to a JSON object and log it in the console.
console.log(JSON.stringify(cars));

//    Iterate the collection and log each car in the console.
cars.each(function(car){
    console.log(car.toJSON());
});

