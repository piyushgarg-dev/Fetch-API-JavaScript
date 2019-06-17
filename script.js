var name = document.getElementById('name');
var email = document.getElementById('email');
var body = document.getElementById('body');
var container = document.getElementById('container');

async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const users = await res.json();

    console.log(users);
    updateUsersToUI(users);
}

function updateUsersToUI(users)
{
    users.forEach( function(user){
        var div = document.createElement('div');
        div.id = 'card';
        template = `
    <div>
        <p id="name">${user.name}</p>
        <p id="email">${user.email}</p>
        <p id="body">
                ${user.body}
        </p>
    </div>
        `;
        div.innerHTML = template;
        container.appendChild(div);
    });
}
fetchUsers();