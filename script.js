const nav1  = document.querySelector('.nav1');
const toggleBtn  = document.querySelector('.toggle-btn');
const register =alert('Succesfully Registered');

toggleBtn.addEventListener('click',()=>{
    nav1.classList.toggle('active');
});

register.addEventlistener('click',()=>{
    register.classList.toggle('active');
});