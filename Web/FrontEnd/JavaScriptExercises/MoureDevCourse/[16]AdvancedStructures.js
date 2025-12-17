/*
Clase 23 - Estructuras avanzadas
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=7514
*/

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let multitwo = numeros.map(num => num * 2);
// console.log(multitwo);

let numerospares = numeros.filter(num => num % 2 === 0);
// console.log(numerospares);

let sumadetodos = numeros.reduce((num1, num2) => num1 + num2, 0);
// console.log(sumadetodos);

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares

let cubosypares = numeros.map(num => num ** 3).filter(num => num % 2 === 0);
// console.log(cubosypares);

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección

let numerosdesordenados = [1,[2,[3]]]
let numerosordenados1 = numerosdesordenados.flat();
// console.log(numerosordenados1);
let numerosordenados2 = numerosordenados1.flat();
// console.log(numerosordenados2);
let numerosordenadostotdal = numerosdesordenados.flat(2);
// console.log(numerosordenadostotdal);

// 4. Ordena un array de números de mayor a menor
let arraydesordenado = [5,3,8,1,4];
let arrayordenado = arraydesordenado.sort((a,b) => b - a);
// console.log(arrayordenado);

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
let setA = new Set([1, 2, 3, 4, 5]);
let setB = new Set([4, 5, 6, 7, 8]);

let setC = new Set ([...setA, ...setB])
// console.log(setC);

let setD = new Set ([...setA].filter(element => setB.has(element)))
// console.log(setD);

let setE = new Set ([...setA].filter(element => !setB.has(element)))
// console.log(setE);

// 6. Itera los resultados del ejercicio anterior

// setA.forEach(element => console.log(element));
// setB.forEach(element => console.log(element));
// setC.forEach(element => console.log(element));
// setD.forEach(element => console.log(element));
// setE.forEach(element => console.log(element));

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos

let users = new Map([
    ['usuario1',  new Map ([
        ['nombre', 'Sebas'],
        ['edad', 18],
        ['email', 'sebastiandaza0209@gmail.com']
    ])],
    ['usuario2',  new Map ([
        ['nombre', 'Dhrelkan'],
        ['edad', 20],
        ['email', 'dhrelkan@gmail.com']
    ])],
    ['usuario3', new Map ([
        ['nombre', 'Donix'],
        ['edad', 18],
        ['email', 'donixcore@gmail.com'],
    ])],
])

// users.forEach(keys => console.log(keys.get('nombre')))

// 8. Dado el mapa anterior, crea un array con los nombres

let nombresmap = [...users.values()].map(element => element.get('nombre'))
// console.log(nombresmap);

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set

let mailmayores = [...users.values()].filter(element => element.get('edad') >= 18).map(element => element.get('email'))
// console.log(mailmayores);

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario

let objectusers = Object.fromEntries(users)
// console.log(objectusers);

let mapByEmail = new Map(
  Object.values(objectusers).map(u => {
    const m = new Map(u);
    return [m.get('email'), (m.delete('email'), m)];
  })
);
console.log(mapByEmail);
