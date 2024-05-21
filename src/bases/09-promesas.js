import { getHeroeByID } from "./bases/08-import-export";

// const promesa = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         //Tarea
//         //Importar el getHeroeByID
//         const p1 = getHeroeByID(2)
//         //resolve(p1);
//         reject('No se pudo encontrar el heroe')
//     }, 2000);
// });

// promesa.then((heroe)=> {
//     console.log('heroe',heroe)
// }).catch(err => console.warn(err));

const getHeroeByIDAsync = (id) =>{
    return new Promise((resolve, reject)=>{
            setTimeout(() => {
                //Tarea
                //Importar el getHeroeByID
                const p1 = getHeroeByID(id)
                // resolve(p1);
                // reject('No se pudo encontrar el heroe')
                if (p1 === undefined){
                    reject('No se pudo encontrar el heroe');
                }
                resolve(p1);
            }, 2000);
        });
}

getHeroeByIDAsync(10)
.then(heroe => console.log('Heroe',heroe))
.catch(console.warn)//.catch(err => console.warn(err));