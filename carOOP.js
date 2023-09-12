
// test object 
// const person = {
//     firstName: "Alex",
//     lastName: "Gonzalez",
//     id: 5555,
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// };

class Vehicle {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return 'Beep!';
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`; //need to make sure youre using back ticks for template literals
      } 
      get isVehicle() {//this is a way to ensure that whatever is passed through is indeed a vehicle, and that a vehicle exists, we reference this later in the Garage class to ensure only vehicles are being passed
        return true;
      }
}

class Car extends Vehicle {
 constructor (make, model, year) {//need to make suer we add the specifc properties from the parent
    super (make, model, year); //calling the parent class constructor and setting up parameters for the child object 
    this.numWheels = 4;//setting the sub property specifically for this object at value of 2
 }

}

class Motorcycle extends Vehicle{
    constructor (make, model, year) {//the constructor is there for your to set up the template for inheriting properties and adding new properties, not for new methods, methods fo after 
        super (make, model, year);
        this.numWheels = 2;
    } 
      revEngine () {//new method
         return "VROOM!!!"
        };
}

class Garage {
    constructor (capacity) {// per instructions we only need to provide the capacity 
        this.capacity = capacity;
        this.vehicles = []; //empty array that will hold all our vehicles
    }
    add (vehicle) {
        if(this.vehicles.length === this.capacity) {
            return "Sorry, we are full";
        }
        if(!vehicle.isVehicle) {
            return "Only vehicles are allowed in here";
        }
        this.vehicles.push(vehicle);
        return "Vehicle added successfuly";
    }
}


let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);//this needs to be at the bottom, becuase the object needs to be initialized 

let myFirstCar = new Car("Toyota", "Corolla", 2005, 4);//creating new object to adhere to new Car class

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

let garage = new Garage(2);
