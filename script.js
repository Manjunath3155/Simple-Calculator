// let inp=document.querySelectorAll("#inp");
// let disp=document.querySelector("#display");
// console.log(inp);

// inp.forEach((ele)=>{
//     console.log(ele.value);
//     ele.addEventListener('click', (event)=>{
//         console.log(event);
//         if (ele.value==event)
//         {
//            disp.value+=ele.value;
//         }
//     })
// })

let history=document.querySelector(".history-tab");

function calculation(v){
    para=document.querySelector(p);
    data=v+" = "+eval(v);
    para.innerText=data;
    history.appendChild(para);
    return(v);
}
