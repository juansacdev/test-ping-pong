const setPointDif = require('./setPointDif')

describe('setPointDif', () => {
	test('should return false if recived strings', () => {
		const expected = false
		const result = setPointDif('test', 'test')
		expect(expected).toBe(result)
	})

	test('should return false if not recived positive numbers', () => {
		const expected = false
		const result = setPointDif(-1, -8)
		expect(expected).toBe(result)
	})

	test('should return the diference betwen the numbers given when the first is greater than the second', () => {
		const expected = 2
		const result = setPointDif(5, 3)
		expect(expected).toBe(result)
	})

	test('should return the diference betwen the numbers given when the second is greater than the first', () => {
		const expected = 4
		const result = setPointDif(3, 7)
		expect(expected).toBe(result)
	})

	test('should return 0 when boths are the same number', () => {
		const expected = 0
		const result = setPointDif(4, 4)
		expect(expected).toBe(result)
	})
})