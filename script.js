import { bubbleSort } from './scripts/bubble.js';
import { insertionSort } from './scripts/insertion.js';
import { mergeSort } from './scripts/merge.js'
import { quickSort } from './scripts/quick.js'
import { selectionSort } from './scripts/selection.js';
import { lastTweak } from './scripts/lastTweak.js';


let array = [];   // Work like global variable for Sorting Algorithm
let createbars=1;
let sorting=0;

const pause = document.getElementById('pause');
pause.disabled = true;

const speed = document.getElementById('speed');

const stop = document.getElementById('stop');
stop.disabled = true;

let inputVal;
let size=document.getElementById("submit");
size.addEventListener('click',function(){
    inputVal = document.getElementById("size").value;
    document.getElementById("size").value="";
    alert("Click On Random Array");
    //alert(inputVal);
});

function height(min, max) {
    let random = Math.random();
    let randomNumber = ((Math.floor(random * (max - min + 1)) + min));
    return randomNumber;
}

async function createArray(){
    array=[] 
                 // Initialise so that every time a new array is generated

    if(inputVal==null)
       inputVal=100;
    for(let i=0;i<inputVal;i++){
        array.push(height(1,20)*20);
    }

    let main=document.querySelector(".main");
    main.innerHTML = '';
    for (let i = 0; i < inputVal; i++) {
        let element = document.createElement('div');
        element.setAttribute('class', 'element');
        element.style.height = array[i]; //+"px";
        main.appendChild(element);
        //document.querySelector(".main").innerHTML = element
    }

}

let create=document.getElementById("create");
create.addEventListener('click',async function() {
    if(createbars===1){
        createbars=0;
        await createArray();
        createbars=1;
        sorting=1;
    }
})

let bubble = document.getElementById("bubble");
bubble.addEventListener('click', async function () {
    if (sorting === 1) {
        sorting = 0;
        createbars = 0;
        bubble.style.color =  "red";
        pause.disabled = false;
        speed.disabled = true;
        await bubbleSort(speed.max - speed.value);
        lastTweak();
        bubble.style.color =  "whitesmoke";
        sorting = 1;
        createbars = 1;
        pause.disabled = true;
        speed.disabled = false;
    }
});


let selection=document.getElementById("selection");
selection.addEventListener('click',async function(){
    if (sorting === 1) {
        sorting = 0;
        createbars = 0;
        selection.style.color =  "red";
        pause.disabled = false;
        speed.disabled = true;
        await selectionSort(speed.max - speed.value);
        lastTweak();
        selection.style.color =  "whitesmoke";
        sorting = 1;
        createbars = 1;
        pause.disabled = true;
        speed.disabled = false;
    }
});

let insertion = document.getElementById("insertion");
insertion.addEventListener('click', async function () {
    if (sorting === 1) {
        sorting = 0;
        createbars = 0;
        insertion.style.color =  "red";
        pause.disabled = false;
        speed.disabled = true;
        await insertionSort(array, speed.max - speed.value);
        lastTweak();
        insertion.style.color =  "whitesmoke";
        sorting = 1;
        createbars = 1;
        pause.disabled = true;
        speed.disabled = false;
    }
});

let merge = document.getElementById("merge");
merge.addEventListener('click', async function () {
    if (sorting === 1) {
        sorting = 0;
        createbars = 0;
        let start = 0;
        let end = array.length - 1;
        merge.style.color =  "red";
        pause.disabled = false;
        speed.disabled = true;
        stop.disabled = true;
        await mergeSort(array, start, end, speed.max - speed.value);
        lastTweak();
        merge.style.color =  "whitesmoke";
        sorting = 1;
        createbars = 1;
        pause.disabled = true;
        speed.disabled = false;
    }
});

let quick = document.getElementById("quick");
quick.addEventListener('click', async function () {
    if (sorting === 1) {
        sorting = 0;
        createbars = 0;
        let l = 0;
        let h = array.length;
        array.push(1000000);
        quick.style.color =  "red";
        pause.disabled = false;
        speed.disabled = true;
        stop.disabled = true;
        await quickSort(array, l, h, speed.max - speed.value);
        lastTweak();
        quick.style.color =  "whitesmoke";
        sorting = 1;
        createbars = 1;
        pause.disabled = true;
        speed.disabled = false;
    }
});