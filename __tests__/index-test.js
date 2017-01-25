test('adds 1 + 2 to equal 3', function() {
	const sum = require('../index');
	expect(sum(1, 2)).toBe(4);
});