$(document).ready(onReady);
function onReady(){
    console.log('test')
    $('#equals').on('click', equalsButton)
    $('#add').on('click', addButton)
    $('#subtract').on('click', subtractButton)
    $('#multiply').on('click', multiplyButton)
    $('#divide').on('click', divideButton)
}
let add = '+'
let subtract = '-'
let multiply = '*'
let divide = '/'

let objectArray = [
    {
        input1: '',
        input2: '',
        operator: '',
        answer: ''
    },
    
]
function renderHistory(array){
    $('#calculatorHistory').empty();
    for(let i = 0; i < array.length; i++){
        console.log(array[i].input1);
        $('#calculatorHistory').append(`
            <li>${array[i].input1} ${array[i].operator} ${array[i].input2} = ${array[i].answer}</li>
        `)
    }
}
function equalsButton(){
    let test = 'test';
    let inputPlayer1 = $('#inputOne').val()
    let inputPlayer2 = $('#inputTwo').val()
    objectArray[0].input1 = inputPlayer1
    objectArray[0].input2 = inputPlayer2
    console.log(objectArray)
    $.ajax({
        method: 'POST',
        url: '/equals',
        data: objectArray[0]
    }).then((response) =>{
      
    })
    $.ajax({
        method: 'GET',
        url: '/answer'
    }).then((response) => {
        console.log(response)
        $('#answer').text(response[response.length - 1].answer);
        renderHistory(response);
    })
}
function addButton(){
   objectArray[0].operator = add;
}
function subtractButton(){
   objectArray[0].operator = subtract
}
function multiplyButton(){
    objectArray[0].operator = multiply
}
function divideButton(){
    objectArray[0].operator = divide
}
