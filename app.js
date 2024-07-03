let cont = [
    ">>Scanning your system",
    ">>Reading your files",
    ">>Password files found.",
    ">>Sending to server",
    ">>Proceeding",
    ">>Cleaning up",
    ">>Successfull"

];

   let t =  setInterval(async () => {
    let last = document.getElementsByTagName("div");
    last = last[last.length-1];
    if(last.innerHTML.endsWith("...")){
        last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3);
    } else{
        
            last.innerHTML = last.innerHTML + ".";
        }
    }, 200)


const delay = () => {
    return new Promise ((resolve, reject) => {
        t = 1 + 6*Math.random();
        setTimeout(()=> {
            resolve()}, t*1000
        );
    })
}

async function apnd(item){
    await delay();
    let div = document.createElement("div")
    div.innerHTML = item;
    document.body.appendChild(div);
}

async function additem(){

    for(data of cont){
         await apnd(data);
         clearInterval(t);
    }
}
    
additem();