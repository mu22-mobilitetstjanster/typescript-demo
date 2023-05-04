interface CoolestFormData {
  pronoun: string,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  password: string,
  repassword: string
}

function getField(ref: string): HTMLInputElement {
  const el = document.querySelector(ref);
  if(el == null) {
    console.warn(ref + " was not found by getField");
  }
  return document.querySelector(ref);
}

function getFieldValue(ref: string): string {
  //const fieldEl = document.querySelector(ref) as HTMLInputElement;
  return getField(ref).value
}

function handleSubmit(event: SubmitEvent) {
  event.preventDefault();
  
  const data: CoolestFormData = {
    password: getFieldValue('.password-field'),
    phone: getFieldValue('.phone-field'),
    pronoun: getFieldValue('.pronoun-field'),
    email: getFieldValue('.email-field'),
    firstName: getFieldValue('.first-name-field'),
    lastName: getFieldValue('.last-name-field'),
    repassword: getFieldValue('.repassword-field')
  }

  console.table(data);
}

document
  .querySelector('.coolest-form')
  .addEventListener('submit', handleSubmit);