const form = document.getElementById('form');
const email = document.getElementById('email-input');

form.addEventListener('submit', e=>{
  e.preventDefault();
  const emailValue = email.value.trim();
  if(emailValue === '')  setError(email, `Whoops! It looks like you forgot to add your email`);
  else if(!isValidEmail(emailValue)) setError(email, 'Please provide a valid email address');
  else setSuccess(email);
})


function setError(element, message){
  const parent = element.parentElement;
  const errorDisplay = parent.querySelector('.error');
  errorDisplay.innerText = message;

  errorDisplay.classList.remove('hidden');
  parent.querySelector('input').classList.add('error-red');
  parent.querySelector('input').placeholder = ``;
}

function setSuccess(element){
  const parent = element.parentElement;
  const errorDisplay = parent.querySelector('.error');
  errorDisplay.innerText = ``;

  parent.querySelector('input').classList.remove('error-red');
  parent.querySelector('input').placeholder = `Your email address...`;

}

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}






