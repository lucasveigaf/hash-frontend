import getAnticipation from '../src';

describe('anticipation calculation', () => {
  [
    [150, 3, 4, 1, 132.672],
    [150, 3, 4, 15, 135.36],
    [150, 3, 4, 30, 138.24],
    [150, 3, 4, 90, 144.00],
    [15000, 12, 3, 15, 11931.00],
    [15000, 12, 3, 90, 12913.125],
    [1000, 1, 1, 29, 989.67],
    [1000, 1, 1, 31, 990],
  ].forEach(([value, installments, mdr, days, expected]) => {
    it('should return the correct anticipation', () => {
      const anticipation = getAnticipation(value, installments, mdr, days);

      expect(anticipation).toBe(expected);
    });
  });

  [
    [0, 3, 4, 15, 'value can not be lower or equal to 0'],
    [150, 0, 4, 15, 'installments can not be lower than 1'],
    [150, 3, 0, 15, 'mdr percentage can not be lower or equal to 0'],
    [150, 3, 4, 0, 'days to receive can not be lower than 1'],
  ].forEach(([value, installments, mdr, days, expectedError]) => {
    it(`should throw an error with the message "${expectedError}"`, () => {
      expect(() => getAnticipation(value, installments, mdr, days))
        .toThrow(new Error(expectedError));
    });
  });
});
