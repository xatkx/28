const ol = document.querySelector('.lista');

let fizz = 3;
let buzz = 5;

for (let i = 1; i <= 100; i++) {
    let li = document.createElement('li');
    if( (i % fizz == 0) && (i % buzz == 0)){
        li.innerText = String(i) + ' fizzbuzz'
    }
    else if((i % fizz == 0)){
        
        
        li.innerText = String(i) + ' fizz'
    }
    else if((i % buzz == 0)){
        li.innerText = String(i) + ' buzz' 
    }

     ol.append(li)
    
    
}
