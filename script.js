
var submitBtn=document.getElementById('submitBtn');
var text=document.getElementById('changeText');
var toChange=document.getElementById('input1');


console.log(toChange);
console.log(submitBtn)
submitBtn.addEventListener('click',function (ev){

    text.innerText=toChange.value;
    ev.stopPropagation();
});