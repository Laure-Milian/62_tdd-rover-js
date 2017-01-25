
/*test('adds 1 + 2 to equal 3', function() {
	expect(sum(1, 2)).toBe(3);
});*/

const app = require('../index');

test('The initial position of the rover should be x = 50 and y = 100', function() {
	const instance = app();
	expect(instance.x).toBe(0);
	expect(instance.y).toBe(0);
	expect(instance.direction).toBe('E');
});

test('The rover moves forward one time', function() {
	const instance = app();
	instance.forward();
	expect(instance.x).toBe(1);
	expect(instance.y).toBe(0);
	expect(instance.direction).toBe('E');
});

test('The rover moves forward two times', function() {
	const instance = app();
	instance.forward();
	instance.forward();
	expect(instance.x).toBe(2);
	expect(instance.y).toBe(0);
	expect(instance.direction).toBe('E');
})

test('The rover turn right one time', function() {
	const instance = app();
	instance.right();
	expect(instance.x).toBe(0);
	expect(instance.y).toBe(0);
	expect(instance.direction).toBe('S');
});