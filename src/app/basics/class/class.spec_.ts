import { Player } from './class';

describe('Pruebas de clases', () => {

  const player = new Player();  // Si inicializamos la variable aquí, evitamos inicializarla en cada prueba
                                // PERO todo se hará en base a este objeto: la primera vez tiene 100 de salud,
                                // pero al quitarle 20 tendrá 80, y al quitarle 50 tendrá 30, por lo que la última prueba fallará
                                // Para evitar esto tenemos EL CLICLO DE VIDA DE LAS PRUEBAS: beforeAll(), beforeEach(), AfterEach() y AfterAll()
                                // Ir al archivo class.spec.ts

  it('Debe retornar 80 de HP si recibe 20 de daño', () => {

    // const player = new Player();
    const resp = player.getHurt(20);

    expect(resp).toBe(80);

  });
  it('Debe retornar 50 de HP si recibe 50 de daño', () => {

    // const player = new Player();
    const resp = player.getHurt(50);

    expect(resp).toBe(50);

  });

});
