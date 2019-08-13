//
// Object Destructuring
///

// const person = {
//     name: 'Jeremy',
//     age: 34,
//     location: {
//         city: 'Las Vegas',
//         temp: 105
//     }
// };
//
// const { name: firstName = 'Anonymous', age } = person;
// // const name = person.name;
// // const age = person.age;
// console.log(`${firstName} is ${age}.`);
//
// const { temp: temperature, city } = person.location;
// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
//
// const { name: publisherName = 'Self-Published' } = book.publisher;
//
// console.log(publisherName); // Penguin, Self-Published


//
// Array Destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state = 'Nevada'] = address;
// console.log(`You are in ${city}, ${state}`);


const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [itemName, , mediumPrice] = item;
// Grab first and third items using array destructuring
console.log(`A medium ${itemName} costs ${mediumPrice}`);
