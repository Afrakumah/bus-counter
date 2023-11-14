// document.getElementById('counter').innerText= 5

// const count = 0;
// count = count + 1  



// function increment () {
//     console.log('btn clicked');
// }

 let countEl = document.getElementById('count-el');
 let saveEl = document.getElementById('save-el');
 let count = 0;
// console.log(countEl);
//  console.log(saveEl);

 

 function increment() {
//     //console.log('clicked');
       count = count + 1
//     console.log(count);
     countEl.innerText = count;
 }

 function save() {
    let countString = count + ' - ';

    //saveEl.innerText += countString

    //innerText alternative
    saveEl.textContent += countString;
    //initializing counter to 0 after saving
    countEl.textContent = 0;
    count = 0;
    //  console.log(count);
}









