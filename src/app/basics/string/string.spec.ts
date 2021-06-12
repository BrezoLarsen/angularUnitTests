import { message } from './string';


describe('Pruebas de strings', () => {

  // Comprobando que devuelve el tipo que esperamos
  it('Debe regresar un string', () => {

    const resp = message('Miguel');

    expect(typeof resp).toBe('string');

  });

  // Comprobando que devuelve algo
  it('Debe regresar un saludo con el nombre enviado', () => {

    const name = 'Luis';
    const resp = message(name);

    expect(resp).toContain(name);

  });

});
