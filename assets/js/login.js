const usuarios = [
    {
        "usuario":"juliana",
        "correo":"juliana@gmail.com",
        "password":"123456"
    },
    {
        "usuario":"mia",
        "correo":"mia@gmail.com",
        "password":"654321"
    },
    {
        "usuario":"kevin",
        "correo":"kevin@gmail.com",
        "password":"123456kevin"
    },
    {
        "usuario":"andres",
        "correo":"andres@gmail.com",
        "password":"789456"
    }
];

console.log("inputs", user, email, password);

function login(){
    let user = document.getElementById("inpUsuario").value;
    let email = document.getElementById("inpEmail").value;
    let password = document.getElementById("inpPassword").value;
    let pass=false;
    usuarios.forEach(e => {
        if(e.usuario == user && e.correo == email && e.password == password){
            alert("Bienvenido ", e.usuario);
            pass=true;
        }
    });
    if(pass == false){
        alert("Verifica tus credenciales...");
    }
}

console.log(usuarios[0]["usuario"], usuarios[0]["correo"], usuarios[0]["password"]);