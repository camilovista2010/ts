import operation from '../src/index';

describe('operations module', () => {
  test('operations sum adds array [ 1 , 2 ] to equal 3', () => {
    expect(operation.sum([1, 2])).toBe(3);
  });

  test('operations multiply adds dividend 1 , divisor 2 to equal 2', () => {
    expect(operation.multiply(1, 2)).toEqual(2);
  });

  test('operations subtract adds minuend 1 , subtrahend 2 to equal 1', () => {
    expect(operation.subtract(1, 2)).toEqual(-1);
  });

  test('operations divide adds dividend 2 , divisor 2 to equal 1', () => {
    expect(operation.divide(2, 2)).toEqual(1);
  });
});
