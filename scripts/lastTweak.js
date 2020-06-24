
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function lastTweak() {
    let childs = document.querySelector(".main").childNodes;
    for(let i = 0; i < childs.length; i++) {
        childs[i].style.backgroundColor ="blueviolet";
    }
    await sleep(500);
    for(let i = 0; i < childs.length; i++) {
        childs[i].style.backgroundColor ="green";
    }
}

export {lastTweak};