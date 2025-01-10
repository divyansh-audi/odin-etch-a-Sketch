

document.querySelector('button').addEventListener('click',()=>{

    // getDiv.innerHTML='';
    // getInnerDiv.innerHTML='';
    
    let getBigDiv=document.querySelector('.big-box');
    getBigDiv.innerHTML='';
    
    let num=parseInt(prompt("Enter no of grids:"));

    for(let i=0;i<num;i++){
        let getDiv=document.createElement("div");
        // let getSmallDiv=document.querySelector(getDiv);
        for(let j=0;
            j<num;j++){
            let getInnerDiv=document.createElement("div");
            getInnerDiv.addEventListener('mouseover',()=>{
                getInnerDiv.style.backgroundColor="black";
            })
            getDiv.appendChild(getInnerDiv);
            
        }
        getBigDiv.appendChild(getDiv);
    }
    // window.location.reload();
})
                                                               
