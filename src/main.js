//A vehicle model 
class Vehicle {

    //Initializing class properties
	constructor (make, wheels, type, speed, soldOn) {
		this.make = make;
		this.wheels = wheels;
		this.type = type;
		this.speed = speed;
		this.soldOn = soldOn;
	}

	drive () {
		return `You are driving a ${this.make} ${this.type} at a speed of ${this.speed} km/hr`;
	}

	salePrice () {
		if (this.soldOn !== '') {
			return ' This vehicle has been sold';
		}else{return `This vehicle cost ` + 1000.0*this.wheels + ` dollars`};
	}
}

//Subclass to define inheritance
class Car extends Vehicle {
	constructor (make, wheels, type, speed, soldOn) {
		super(make, wheels, type, speed, soldOn);
		this._numOfDoors = 4;
	} 

	set numOfDoors (value) {
		this._numOfDoors = value;
	}

	get numOfDoors () {
		return this._numOfDoors;
	}
    
    //Drive is overridden: Polymorphism
	drive () {
		return `You be careful, the road is muddy and your car is ${this.wheels} wheels with ${this._numOfDoors} doors`
	}

	//static method to describe my car class
	static describe() {
		return 'The car class has functions and properties inherited for the vehicle class with the drive function overridden. '
	}

}

module.exports = {Car};