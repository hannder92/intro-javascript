//Funciones en JS
//const saludar = function (nombre) {
    // return `Hola , ${nombre}`;
// }

const saludar2 = (nombre)=> {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

// console.log(saludar('Goku'));

console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
});

const user = getUser();
console.log(user);

//Tarea
// 1. Transformar a una funcion de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas

// function getActiveUser(nombre){
//     return{
//         uid: 'ABC567',
//         username: nombre
//     }
// };

// const activeUser = getActiveUser('Nombre')
// console.log(activeUser)

const getActiveUser =(nombre) => ({
        uid: 'ABC567',
        username: nombre
});

const activeUser = getActiveUser('Nombre')
console.log(activeUser)