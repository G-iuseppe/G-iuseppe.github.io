const form = document.getElementById("mailForm");

const nome = document.getElementById("name");
const mail = document.getElementById("email");
const description = document.getElementById("message");


form.addEventListener("submit",function(event){
event.preventDefault();

const templateParams={
name: nome.value,
email: mail.value,
message: description.value,
};

console.log("dati inviati", templateParams);

emailjs.send('service_ceyogv9', 'template_t52rosd', templateParams).then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
  },

  (error) => {
    console.log('FAILED...', error);
  },

);
})
