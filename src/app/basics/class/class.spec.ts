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

});
