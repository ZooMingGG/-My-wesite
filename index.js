const arr = [1,2,3,4,5];

const arr2 = arr.map(item => item**2);

console.log(arr2);

for(let i = 0; i < 10; i++) {
    if(i % 2 === 0) {
        console.log(i)
    }
}

for(let i = 0; i < 10; i++) {
    console.log(i);
}

// const askUser = prompt('Enter number from 0 to 3', '');

// switch (askUser) {
//     case '0':
//         console.log('You entered 0');
//         break;
//     case '1': 
//         console.log('You entered 1');
//         break;
//     case '2':
//     case '3':
//         console.log('You entered 2 or 3');
//         break;
//     default:
//         console.error('You entered wrong number!');   
// }

const plus = document.querySelector('.plus');
const out = document.querySelector('.out');
const minus = document.querySelector('.minus');

let x = 0;


plus.addEventListener('click', () => {
   out.innerHTML = ++x;
})

minus.addEventListener('click', () => {
   out.innerHTML = --x;
})

