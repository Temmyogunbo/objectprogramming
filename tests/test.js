const assert = require('chai').assert;
const myApp = require('../src/main.js');

describe('Car class: Create a class give it properties', () => {

	describe('instance of object', () => {
		it('return an instance of object', () => {
			const volvo = new myApp.Car('Volvo');
			assert.equal(typeof volvo, typeof {});
		})
	})

	describe('The car should have four doors', () => {
		it('return the number 4', () => {
			const toyota = new myApp.Car('Toyota', 4, 'Camry', 120, '')
			assert.equal(toyota.numOfDoors, 4);
		})
	})


	describe('The car should have two doors', () => {
		it('return the number 2', () => {
			const toyota = new myApp.Car('Toyota', 4, 'Camry', 120, '');
			toyota.numOfDoors = 2
			assert.equal(toyota.numOfDoors, 2);
		})
	})

	describe('The make should be a property of the class', () => {
		it('return the make of car', () => {
			const honda = new myApp.Car('Honda', 4, 'civic', 120, '12/07/2017')
			assert.equal(honda.make, 'Honda');
		})
	})

	describe('The drive function should be a function of the class', () => {
		it('return the drive function of car', () => {
			const honda = new myApp.Car('Honda', 4, 'civic', 120, '12/07/2017')
			assert.equal(honda.drive(), `You be careful, the road is muddy and your car is 4 wheels with 4 doors`);
		})
	})
})




