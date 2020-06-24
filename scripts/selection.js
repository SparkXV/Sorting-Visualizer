const pause = document.getElementById("pause");

let run = true;

pause.addEventListener("click", () => {
  run = run === true ? false : true;
  pause.textContent = run === true ? "Pause" : "Play";
});

let halt = 0;

const stop = document.getElementById("stop");

stop.addEventListener("click", () => {
  halt = 1;
});

async function pauseHandler() {
  while (run == false) await sleep(1);
  return;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function selectionSort(speed) {
  stop.disabled = false;
  halt = 0;
  let main = document.querySelector(".main");
  let childs = document.querySelector(".main").childNodes;
  for (let i = 0; i < main.childElementCount; i++) 
  {
    let min_index=childs[i].style.height;
    min_index = min_index.substr(0, min_index.length - 2);
    min_index=parseInt(min_index);
    childs[i].style.backgroundColor="yellow";
    let index=i;
    for (let j = i+1; j < main.childElementCount; j++) 
    {
      //childs[j].style.backgroundColor = "yellow";
      //let first = childs[j].style.height;
      //first = first.substr(0, first.length - 2);
      //first = parseInt(first);
      childs[j].style.backgroundColor = "blueviolet";
      let second = childs[j].style.height;
      second = second.substr(0, second.length - 2);
      second = parseInt(second);
      //console.log(second);
      await sleep(speed);
      if (min_index>second) 
      {
        index=j;
        min_index=second;
        //childs[j + 1].parentNode.insertBefore(childs[j + 1], childs[j]);
      }
      if (run == false) {
        await pauseHandler();
      }
      childs[j].style.backgroundColor = "green";
      //childs[j].style.backgroundColor = "green";
      //childs[j + 1].style.backgroundColor = "green";
      if (halt == 1) {
        break;
      }
    }
    //childs[j + 1].parentNode.insertBefore(childs[j + 1], childs[j]);
    
    let s=childs[i].style.height;
    childs[i].style.height=(min_index);
    childs[i].style.backgroundColor="green";
    childs[index].style.height=s;
    childs[index].style.backgroundColor="green";


    if (halt == 1) {
      console.log(halt);
      halt = 0;
      break;
    }
  }
}


export {selectionSort};