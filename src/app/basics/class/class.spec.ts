import { Player } from './class';

describe('Pruebas de clases', () => {

  const player = new Player();

  beforeAll(() => {
    console.log('beforeAll');
  });

  beforeEach(() => {
    player.hp = 100;
    // player = new Player();
    console.log('beforeEach');
  });

  afterAll(() => {
    console.log('afterAll');
  });

  afterEach(() => {
    // player.hp = 100;
    // player = new Player();
    console.log('afterEach');
  });


  it('Debe retornar 80 de HP si recibe 20 de daño', () => {

    console.log(player)

    const resp = player.getHurt(20);

    expect(resp).toBe(80);

  });

  it('Debe retornar 50 de HP si recibe 50 de daño', () => {

    console.log('Esta prueba va a fallar'); // El resultado de este console.log sería:
                                            // beforeEach
                                            // Esta prueba va a fallar
                                            // afterEach
                                            // FAILED Pruebas de clases Debe retornar 50 de HP si recibe 50 de daño

    const resp = player.getHurt(50);

    expect(resp).toBe(50);

  });

  it('Debe retornar 0 de HP si el daño es mayor que la salud actual', () => {

    const resp = player.getHurt(110);

    expect(resp).toBe(0);

  });

  // Para ver el coverage el comando es: ng test --code-coverage
  // Las branches son los if() {} else {}
  it('Debe retornar 0 de HP si el daño es igual a la salud actual', () => {

    const resp = player.getHurt(100);

    expect(resp).toBe(0);

  });

});
