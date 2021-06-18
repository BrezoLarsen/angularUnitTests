import { LoginForm } from "./forms";
import { FormBuilder } from "@angular/forms";

describe('Formularios', () => {

  let component: LoginForm;

  beforeEach(() =>{
    component = new LoginForm( new FormBuilder() );  // Debemos añadir el FormBuilder porque lo tenemos en el constructor del componente
  });

  it('Debe crear un formulario con dos campos', () => {

    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();

  });

  it('Email debe ser obligatorio', () => {

    const input = component.form.get('email');
    input.setValue('');
    expect(input.valid).toBeFalsy();

  });

  it('Email debe ser un email válido', () => {

    const input = component.form.get('email');
    input.setValue('brezo@gmail.com');
    expect(input.valid).toBeTruthy();

  });

  it('Password debe ser obligatorio', () => {

    const input = component.form.get('password');
    input.setValue('');
    expect(input.valid).toBeFalsy();

  });

})
