let string="";
let cal=document.querySelector("input").addEventListener("change",(event)=>{
    let ans=event.target.value;
     string=ans;
})




let buttons= document.querySelectorAll(".btn");
console.log(buttons);
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
       
    
        if(e.target.innerHTML=="="){
            try{
                string= eval(string);
           
                document.querySelector("input").value = string;
            }
            catch(error){
                alert("please wright right expression");
            }
             
        }
        else if(e.target.innerHTML==="C"){
            string="";
            document.querySelector("input").value=string;
        }

        else if(e.target.innerHTML=="X"){
           
             let val=string.split("");
                val.length=val.length-1;
                val=val.join("");
              string=val;
                document.querySelector("input").value=string;


        }
        else{
            
         
          
            
            
           
          
        
            string=string+e.target.innerHTML;
            document.querySelector("input").value=string;
        }}




       
        
        
    )
})