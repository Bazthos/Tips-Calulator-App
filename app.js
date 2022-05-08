let bill = document.getElementById('bill');

let people = document.getElementById('number_people');

let grid_tips = document.querySelector('.grid_tips');
let tips_button = grid_tips.querySelectorAll('button');
let custom = document.getElementById('custom');
let percent = 1;

let tip_amount = document.getElementById('tip_amount');
let total = document.getElementById('total');
let total_notips = 0;
let total_tips = 0;
let total_pers = 0;
let amount = 0;

let entry = document.querySelectorAll('.entry');
let error1 = entry[0].querySelector('span');
let error2 = entry[1].querySelector('span');

let reset = document.getElementById('reset');

custom.addEventListener('click', ()=>{
    tips_button.forEach( (e)=>{e.classList.remove('clicked')});
    percent = 1;
})

tips_button.forEach( (e, i) => {
    e.addEventListener('click', ()=>{
        tips_button.forEach( (e)=>{e.classList.remove('clicked')});
        e.classList.add('clicked');
        if(i == 0){
            percent = 1.05;
        }else if(i == 1){
            percent = 1.10;
        }else if(i == 2){
            percent = 1.15;
        }else if(i == 3){
            percent = 1.25;
        }else{
            percent = 1.5;
        }
    })
})

let test = 0;

reset.addEventListener('click', (e, event)=>{
    test = 0;

    error1.classList.add('none');
    bill.classList.remove('bad_entry');
    error2.classList.add('none');
    people.classList.remove('bad_entry');
    
    if(custom.value != ''){
        percent = 1 + custom.value/100;
    }
    if(bill.value == 0){
        error1.classList.remove('none');
        bill.classList.add('bad_entry');
        test=1;
    }else{
        test=0;
    }
    if(people.value == 0){
        error2.classList.remove('none');
        people.classList.add('bad_entry');
        test=1;
    }
    else{
        test=0;
    }

    if(test==1){
        return;
    }

    total_notips = bill.value / people.value;
    total_tips = bill.value * percent;
    total_pers = total_tips / people.value;
    amount = total_pers - total_notips;

    tip_amount.innerHTML = amount.toFixed(2);
    total.innerHTML = total_pers.toFixed(2);
})