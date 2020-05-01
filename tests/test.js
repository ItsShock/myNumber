const myNumber = require('..');

describe('Zmienna myNumber', () => {
  it('powinna być obiektem', async () => {
    expect(typeof myNumber).toBe('object');
  });

  it('powinna być liczbą typu Integer', async () => {
    expect(Number.isInteger(Number(myNumber))).toBeTruthy();
  });

  it('nie powinna zawierać wartości NaN', async () => {
    expect(Number.isNaN(myNumber)).toBeFalsy();
  });

  it('powinna być instancją konstruktora Number', async () => {
    expect(myNumber.constructor.toString().toLowerCase().includes('number')).toBeTruthy();
  });
});
