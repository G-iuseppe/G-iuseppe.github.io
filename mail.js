const form = document.getElementById("mailForm");

const nome = document.getElementsById("name");
const mail = document.getElementsById("email");
const description = document.getElementsById("message");


form.addEventListener("submit",function(event){
event.preventDefault();

const templateParams={
name: nome.name.value,
email: mail.email.value,
message: description.message.value,
};

emailjs.send('service_ceyogv9', 'template_t52rosd', templateParams).then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
  },

  (error) => {
    console.log('FAILED...', error);
  },
  
);
})
