const numbers = document.getElementsByClassName('numbers');
// console.log(numbers);
// div
const mainDiv = document.getElementById('display');
// console.log(mainDiv.innerText);
for (const number of numbers) {
    // console.log(number);
    number.addEventListener('click', function (event) {
        // console.log(typeof event.target.innerText);
        const parsInt = parseInt(event.target.innerText);
        // console.log(typeof parsInt);
        // const sum = parsInt 
        function sum(number1, number2, number3) {
            // console.log()
            const sumNumber = (number1) number2 (number3);
            console.log(sumNumber);
        }
        sum(parsInt, parsInt, parsInt)

    })
}