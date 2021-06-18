import { from, of } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';


describe('Pruebas de Spies', () => {

    let component: MedicosComponent;
    const service = new MedicosService(null); // Nos pide un argumento (public http: HttpClient), pero le enviamos null porque no nos interesa hacer nada con http

    beforeEach( () => {
        component = new MedicosComponent(service);
    });


    it('Init: Debe de cargar los médicos desde el servicio', () => {

        const medicos = ['medico1', 'medico2', 'medico3'];

        spyOn( service, 'getMedicos' ).and.callFake( () => {
            return from( [ medicos ] );   // Vas a llamar y fingir que retornas un array de médicos (que es lo que debería retornar realmente)
        });

        component.ngOnInit();

        expect( component.medicos.length ).toBeGreaterThan(0);

    });

    it('Debe de llamar al servidor para agregar un médico', () => {  // Comprobamos que se esté llamando a this._medicoService.agregarMedico()

      const spy = spyOn( service, 'agregarMedico' ).and.callFake( resp => {
          return of();  // Retornamos un observable vacío porque en esta prueba no me interesa el resultado, solo comprobar que se llame
      });

      component.agregarMedico();

      expect( spy ).toHaveBeenCalled();

  });

  it('Debe agregar un médico al array de médicos', () => {

    const medico = {
      id: 1,
      nombre: 'Juan'
    }

    spyOn( service, 'agregarMedico' )
      .and.returnValue( from([ medico ]) );

    component.agregarMedico();

    expect( component.medicos.indexOf( medico ) ).toBeGreaterThanOrEqual(0);

  });

});
