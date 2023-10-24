let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let op = "";

let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '='){
            op = eval(op);
            input.value = op;
        }
        else if(e.target.innerHTML == 'AC'){
            op = '';
            input.value = op;
        }
        else if(e.target.innerHTML == 'DEL'){
            op = op.substring(0,op.length-1);
            input.value = op;
        }
        else{
            op += e.target.innerHTML;
            input.value = op;
        }
        
    })
})