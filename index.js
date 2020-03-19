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

document.body.insertAdjacentHTML('beforeend', '<div id="digital-clock"><span class="hours"></span>:<span class="minuts"></span>:<span class="seconds"></span></div>');

function clock() {
    let digitalClock = document.querySelector('#digital-clock');
    let hoursSpan = document.querySelector('.hours');
    let minutesSpan = document.querySelector('.minuts');
    let secondsSpan = document.querySelector('.seconds');

    digitalClock.style.background = 'orange';
    hoursSpan.style.color = 'yellow';
    minutesSpan.style.color = 'yellow';
    secondsSpan.style.color = 'yellow';

    setInterval( () => {
        let date = new Date();
        let hrs = date.getHours();
        let mnts = date.getMinutes();
        let sec = date.getSeconds();

        if (hrs <= 9) {
            hoursSpan.innerHTML = '0' + date.getHours();
        } else {
            hoursSpan.innerHTML = date.getHours();
        }

        if (mnts <= 9) {
            minutesSpan.innerHTML = '0' + date.getMinutes();
        } else {
            minutesSpan.innerHTML = date.getMinutes();
        }

        if (sec <= 9) {
            secondsSpan.innerHTML = '0' + date.getSeconds();
        } else {
            secondsSpan.innerHTML = date.getSeconds();
        }
    },1000);
}

clock();