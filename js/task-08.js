const form=document.querySelector(".login-form")

form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event){
event.preventDefault();
const {
        elements: { email, password }
      } = event.currentTarget;
    //   console.dir(email);
      if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
    return;
          }
          console.log({email:email.value,passsword:password.value })
          event.currentTarget.reset();
}

