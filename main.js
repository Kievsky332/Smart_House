function myCode(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeHHMM = `${hours}:${minutes}`;
    const myParagraph = document.getElementById('time');
    myParagraph.textContent = timeHHMM;
}
const intervalId = setInterval(myCode, 1000);

function open(){
    alert("Вы открыли дверь ");
}
function up(){
    alert("Шлагбаум поднялся ");
    setTimeout(() => {
      alert("Машина проехала")
    }, 2000);
}
function five(){
    alert("Спасибо всем ");
}