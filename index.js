let arrWork=[];
let arrComplete= [];


document.querySelector("#addItem").onclick = function createTask(){
    let myTaskToDo=new Work()
    myTaskToDo.name=document.querySelector('#newTask').value;
    myTaskToDo.id=Date.now();
    if(myTaskToDo.name!=""){
      arrWork.push(myTaskToDo)
    }
    else 
    alert("Nhập công việc")
    renderTask(arrWork);
    document.querySelector('#newTask').value=''
} 
// DO TO
let renderTask=(array)=>{
  let html = "";
  for (let task of array) {
    html += `
      <li>
          <p>${task.name}</p>                 
          <div class="buttons">
          <button class="remove" onclick="deleteWorkToDo('${task.id}')" >
          <i class="far fa-trash-alt"></i>
          </button>
          <button class="complete" onclick="completeWorkToDo('${task.id}')">
          <i class="fas fa-check-circle"></i>
          </button>
          </div>
      </li>
      
      `;
  }
  document.querySelector("#todo").innerHTML = html;
  saveLocalStorage(array,"ToDo");
  array={...getLocalStorage("ToDo")}
}


let deleteWorkToDo=(idDelete)=>{
  // for(let task of arrWork){
  //   if(task.id==idDelete){
  //     console.log(task.id)
  //    arrWork.splice(task,1)
  //   }
  //   // console.log(idDelete)
  // }
  let indexDel=-1;
    for(let index=0;index<arrWork.length;index++){
        if(arrWork[index].id==idDelete ){
            indexDel=index;
            break;
        }
    }
    if(indexDel!==-1){
        arrWork.splice(indexDel,1)
    }
  renderTask(arrWork);
  saveLocalStorage(arrWork,"ToDo");
}


let completeWorkToDo= (idComplete)=>{
//   for(let task of arrWork){
//     if(task.id==idComplete){
//      renderTask(arrWork);
//      arrComplete.push(task)  
//      arrWork.splice(task,1) 
//     console.log(arrWork);
// console.log(arrComplete)
//     }
  for(let i=0;i<arrWork.length;i++){
    if(arrWork[i].id==idComplete){
      arrComplete.push(arrWork[i]);
      arrWork.splice(i,1);
    }
  }

  saveLocalStorage(arrWork,"ToDo");
  saveLocalStorage(arrComplete,"Complete")



renderTask(arrWork);
renderCompleted(arrComplete)
  }


  // renderCompleted(arrComplete);
  // saveLocalStorage(arrWork,"ToDo");
  // saveLocalStorage(arrComplete,"Complete");



// COMPLETE

let renderCompleted=(array)=>{
  let html = "";
  for (let task of array) {
    html += `
      <li>
          <p>${task.name}</p>                 
          <div class="buttons">
          <button class="remove" onclick="deleteWorkComplete(${ task.id})" >
          <i class="far fa-trash-alt"></i>
          </button>
          <button class="complete">
          <i class="fas fa-check-circle"></i>
          </button>
          </div>
      </li>
      
      `;
  }
  document.querySelector("#completed").innerHTML = html;
  saveLocalStorage(array,"Complete");
  array={...getLocalStorage("Complete")}
}

let deleteWorkComplete=(idDelete)=>{
  let indexDel=-1;
  for(let index=0;index<arrComplete.length;index++){
      if(arrComplete[index].id==idDelete ){
          indexDel=index;
          break;
      }
  }
  if(indexDel!==-1){
      arrComplete.splice(indexDel,1)
  }

  renderCompleted(arrComplete);
  saveLocalStorage(arrComplete,"Complete");
}


let saveLocalStorage=(ob,key)=>{
  // let str =JSON.stringify(ob);
  // localStorage.setItem(key,str);  
  let str=JSON.stringify(ob);
  localStorage.setItem(key, str);
}

let getLocalStorage=(key)=>{
  if(localStorage.getItem(key)){
    let str=localStorage.getItem(key);
    let ob=JSON.parse(str);
    return ob;
  }
  return undefined;
}

// console.log(arrWork);
// console.log(arrComplete)
let arrToDo;
let arrCompleted;
window.onload=()=>{
  arrToDo= getLocalStorage("ToDo");
   arrCompleted=getLocalStorage("Complete")
  renderTask(arrToDo);
  renderCompleted(arrCompleted);
  // if (arrWork.length == []||arrComplete==[]) {
  //   arrWork={...arrToDo}
  //   arrComplete={...arrCompleted}
  //   console.log(arrWork)
  
  // }
}


