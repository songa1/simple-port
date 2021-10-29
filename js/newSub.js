const submitBtn = document.getElementById('submit');
const submitBtn = document.getElementById('submit');
const email = document.getElementById('email');
const nameValue = document.getElementById('name');

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    fetch('https://achille-api-stg.herokuapp.com/achille/api/subscribe', {
        method: 'POST',
        body: JSON.stringify({
            email: email.value,
            name: nameValue.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data=> console.log(data))
})