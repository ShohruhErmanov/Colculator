let inp = document.querySelector(".inp");
let inp2 = document.querySelector(".inp2");
let ul = document.querySelector(".ul");
let elBtn = document.querySelector(".btn");
let elBtn2 = document.querySelector(".btn2");
let elBtn3 = document.querySelector(".btn3");
let elBtn4 = document.querySelector(".btn4");
let elBtn5 = document.querySelector(".btn5")
let li = document.querySelector(".li")

elBtn.addEventListener('click', () => {
       if(inp.value, inp.value){
         let c = inp.value + inp2.value
         ul.append(li)
         li.append(c)
       }else{
        alert("Son kiriting")
       }
       inp.value = null
       inp2.value = null
     li.style.padding = "45px"
})

elBtn5.addEventListener('click', () => {
    li.remove(value)
    
})

elBtn2.addEventListener('click', () => {
  if(inp.value, inp.value){
    let c = inp.value - inp2.value
    ul.append(li)
    li.append(c)
  }else{
    alert("Son kiriting")
  }
  inp.value = null
  inp2.value = null
  li.style.padding = "45px"
})

elBtn3.addEventListener('click', () => {
  if(inp.value, inp.value){
    let c = inp.value * inp2.value
    ul.append(li)
    li.append(c)
  }else{
    alert("Son kiriting")
  }
  inp.value = null
  inp2.value = null
  li.style.padding = "45px"
})

elBtn4.addEventListener('click', () => {
  if(inp.value, inp.value){
    let c = inp.value / inp2.value
    ul.append(li)
    li.append(c)
  }else{
    alert("Son kiriting")
  }
  inp.value = null
  inp2.value = null
  li.style.padding = "45px"
})





