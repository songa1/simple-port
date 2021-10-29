const submitBtn = document.getElementById('submit');
const email = document.getElementById('email');
const nameValue = document.getElementById('name');

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
    .then(data=> console.log(data.name))
})