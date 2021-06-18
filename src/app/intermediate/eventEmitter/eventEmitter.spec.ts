import { Player2 } from './eventEmitter';

describe('Pruebas de eventEmitter', () => {

  let player: Player2;

  beforeEach( () => player = new Player2() );


  it('Debe emitir un evento cuando recibe daño', () => {

    let newHp = 0;

    player.hpChange.subscribe(hp => {  // Como es un .emit podemos subscribirnos
      newHp = hp;
    })

    player.getHurt(1000);

    expect( newHp ).toBe(0);
  });

  it('Debe emitir un evento cuando recibe daño y sobrevivir si es menos de 100', () => {

    let newHp = 0;

    player.hpChange.subscribe(hp => {  // Aunque el subscribe es asíncrono, la prueba espera a recibir la respuesta para continuar
      newHp = hp;
    })

    player.getHurt(50);

    expect( newHp ).toBe(50);
  });

});
