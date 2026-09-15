


let users = [];


function getUsers(){
    fetch("https://dummyjson.com/users")
        .then((response)=>{
            return response.json();
        })
        .then((data) =>{
            users = data.users;

            showUsers(users);
        })
}


function showUsers(userList){
    const userContainer = document.getElementById("userContainer");

    userContainer.innerHTML = "";

    for(let i=0; i < userList.length; i++){
        const user = userList[i];

        userContainer.innerHTML += `
            <div class="card">
                <img 
                    src="${user.image}"
                    alt="${user.username}"
                    class="card-image"
                />

                <h2>${user.firstName} ${user.lastName}</h2>
            </div>
        `
    }
}


getUsers();