
/*test('adds 1 + 2 to equal 3', function() {
	expect(sum(1, 2)).toBe(3);
});*/

const app = require('../index');

test('position x of rover must be 50', function() {
	expect(app().x).toBe(50);
});

test('position y of rover must be 100', function() {
	expect(app().y).toBe(100);
});

test('direction of rover must be W', function() {
	expect(app().direction).toBe('W');
});