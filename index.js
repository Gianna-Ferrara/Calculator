let equations = [];
let index = 0;
function equals(){
    let num = document.getElementById("in").value;
    num = eval(num);
    document.getElementById("output").innerText = num;
    equations.push(document.getElementById("in").value);
    sessionStorage.setItem('item', JSON.stringify(equations));
}
function numbers(){
    let val = document.getElementById("but").innerText;
    document.getElementById("in").value += val;
}
function numbers1(){
    let val = document.getElementById("but1").innerText;
    document.getElementById("in").value += val;
}
function numbers2(){
    let val = document.getElementById("but2").innerText;
    document.getElementById("in").value += val;
}
function numbers3(){
    let val = document.getElementById("but3").innerText;
    document.getElementById("in").value += val;
}
function numbers4(){
    let val = document.getElementById("but4").innerText;
    document.getElementById("in").value += val;
}
function numbers5(){
    let val = document.getElementById("but5").innerText;
    document.getElementById("in").value += val;
}
function numbers6(){
    let val = document.getElementById("but6").innerText;
    document.getElementById("in").value += val;
}
function numbers7(){
    let val = document.getElementById("but7").innerText;
    document.getElementById("in").value += val;
}
function numbers8(){
    let val = document.getElementById("but8").innerText;
    document.getElementById("in").value += val;
}
function numbers9(){
    let val = document.getElementById("but9").innerText;
    document.getElementById("in").value += val;
}
function numbers10(){
    let val = document.getElementById("but10").innerText;
    document.getElementById("in").value += val;
}
function numbers11(){
    let val = document.getElementById("but11").innerText;
    document.getElementById("in").value += val;
}
function numbers12(){
    let val = document.getElementById("but12").innerText;
    document.getElementById("in").value += val;
}
function numbers13(){
    let val = document.getElementById("but13").innerText;
    document.getElementById("in").value += val;
}
function numbers14(){
    let val = document.getElementById("but14").innerText;
    document.getElementById("in").value += val;
}
function numbers15(){
    let val = document.getElementById("but15").innerText;
    document.getElementById("in").value += val;
}
function numbers16(){
    let val = document.getElementById("but16").innerText;
    document.getElementById("in").value += val;
}
function numbers17(){
    let val = document.getElementById("but17").innerText;
    document.getElementById("in").value += val;
}
function numbers18(){
    let val = document.getElementById("but18").innerText;
    document.getElementById("in").value += val;
}
function pageLoad(){
    const stored = sessionStorage.getItem('item');
    if(stored){
        equations = JSON.parse(stored);
    }
    else{
        equations = [];
        sessionStorage.setItem('item', JSON.stringify(equations));
    }
}
function arrowUp(){
    if(document.getElementById("in").value !== equations[index] ){
       index = equations.length -1;
       document.getElementById("in").value = equations[index];
       return;
    }
    if(index >0 ){
        document.getElementById("in").value = equations[--index];

    }

}
function arrowDown(){
    if(document.getElementById("in").value !== equations[index] ){
        index = equations.length - 1;
        document.getElementById("in").value = equations[index];
        return;
    }
    if(index < equations.length-1){
        document.getElementById("in").value = equations[++index];
    }
    else{
        document.getElementById("in").value = equations[index = equations.length -1];
    }
}
