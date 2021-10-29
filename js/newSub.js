const submitBtn = document.getElementById('submit');
const email = document.getElementById('email');
const nameValue = document.getElementById('name');
let fb = document.querySelector('.feedback');

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    fetch('http://achille-api-stg.herokuapp.com/achille/api/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            email: email.value,
            name: nameValue.value
        })
    })
    .then(res => res.json())
    .then(data=> {
        fb.style.color = 'white';
        fb.style.backgroundColor = 'green';
        fb.style.padding = '10px';
        fb.style.borderRadius = '5px';
        fb.style.textAlign = 'center';
        submitBtn.style.display = 'none'
        email.style.display = 'none';
        nameValue.style.display = 'none';
        email.disabled = 'true'
        nameValue.disabled = 'true'
        fb.innerHTML = `Hi ${data.name}! Thank you for becoming my friend! Check your email for my gift.`
        setTimeout(() => {
            fb.style.display = 'none';
            
        }, 5000);
    })
})