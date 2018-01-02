describe("longest sequence of 1's", function(){

	it("находит самую большую непрерывную последовательность единиц в матрице 3x8", function(){

		var matrix = [[1, 1, 1, 0, 1, 1, 1, 1], [0, 0, 0, 1, 0, 0, 0, 1], [0, 0, 1, 0, 1, 1, 0, 0]];
		assert.equal(longestSequenceOfOne(matrix), 4);
	});

	it("находит самую большую непрерывную последовательность единиц в матрице 5x3", function(){

		var matrix = [[0, 1, 0], [0, 1, 1], [0, 1, 0], [0, 1, 1], [1, 1, 1]];
		assert.equal(longestSequenceOfOne(matrix), 5);
	})
})