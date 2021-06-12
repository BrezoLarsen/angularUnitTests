import { increment } from './number';

describe('Pruebas de números', () => {

  it('Si el número es máyor de 100 debe de retornar 100', () => {

    const resp = increment(300);

    expect(resp).toBe(100);

  });

  it('Si el número es menor de 100 debe de retornar el número ingresado + 1', () => {

    const resp = increment(50);

    expect(resp).toBe(51);

  });

});
