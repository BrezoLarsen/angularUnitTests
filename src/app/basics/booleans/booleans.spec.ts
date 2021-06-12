import { checkBook } from './booleans';

describe('Pruebas de booleanos', () => {

  it('Debe retornar true', () => {

    const resp = checkBook();

    expect(resp).toBeTruthy();

  });

});
