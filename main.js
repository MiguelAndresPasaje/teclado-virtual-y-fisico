const inpText = document.querySelector(".input-text");
const inpBtn = document.querySelector(".input-btn");

console.log(inpText , inpBtn);

const num = [];
const tecladoNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9","0"];

inpBtn.addEventListener("click" , e =>{
    e.preventDefault();
    console.log(inpBtn.value);
    num.push(inpBtn.value);
    inpText.value = num.join("");
    console.log(num);
});
inpText.addEventListener("keydown", e =>{
    console.log(e.key);
    if(e.key === "Tab"){
        return;
    }if(e.key === "Backspace" && num.length>0){
        num.pop();
    }
    if(tecladoNum.includes(e.key)/*  || inpText.value !== "" */){
        num.push(e.key);
        inpText.value = num.join("");        
    }
    e.preventDefault();
    console.log(num);
});