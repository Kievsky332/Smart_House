function myCode(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeHHMM = `${hours}:${minutes}`;
    const myParagraph = document.getElementById('time');
    myParagraph.textContent = timeHHMM;
}
const intervalId = setInterval(myCode, 1000);

function open1(){
    alert("Вы открыли дверь ");
}
function up(){
    alert("Шлагбаум поднялся ");
    setTimeout(() => {
      alert("Машина проехала")
    }, 2000);
}
function five(){       
    const myElement1 = document.getElementById('main');
    const myElement = document.getElementById('video');
    alert("Спасибо всем ");
    setTimeout(() => {
        myElement.style.display = 'block';
        myElement1.style.display = "none"    
    }, 2000);    
    setTimeout(() => {
         myElement1.style.display = "block"
        myElement.style.display="none"
    }, 5000);
}
function oplata(){
    const my = document.getElementById('cif');
    
    alert("Вы оплатили "+ my.innerHTML) 
    summa = 0 
}
let summa = 0
function myTask() {
    const my = document.getElementById('cif');
    my.innerHTML =summa+" ₽"
    summa +=100

}
let timerId = setInterval(myTask, 1000);
