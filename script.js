console.log("welcome to todo app");


todos = []
let work = prompt("enter what you want task to do ? (add/list/delete)")

while(true){
    if (work == "quit"){
        break;
    }
    else if(work=="add"){
    let task = prompt("enter task to add");
    todos.push(task);
    console.log("task added");
    }
}

console.log("quitting todo app");
