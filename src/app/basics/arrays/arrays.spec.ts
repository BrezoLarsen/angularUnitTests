import { getRobots } from './arrays';

describe('Pruebas de arrays', () => {

  it('Debe retornar al menos tres objetos', () => {

    const resp = getRobots();

    expect(resp.length).toBeGreaterThanOrEqual(3);

  });

  it('Deben existir Terminator y Bender', () => {

    const resp = getRobots();

    expect(resp).toContain('Terminator');
    expect(resp).toContain('Bender');

  });

});
