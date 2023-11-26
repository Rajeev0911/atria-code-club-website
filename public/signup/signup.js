const submitBtn = document.getElementById('submitbtn');
const personName = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const institution = document.getElementById('institution');


submitBtn.addEventListener('click' , (event) => {
  if (!personName.value || !email.value || !password.value || !institution.value) {
    event.preventDefault();
    alert("Enter all the details to signup");
  }
});