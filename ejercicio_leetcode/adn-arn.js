const string = "═";             
const costados_string = "║";    
let nuevo_string = "╔";         
let final_string = "╗";         
let nuevo_string_inferior = "╚";  
let final_string_inferior = "╝";  


for (let i = 0; i < 5; i++) {
  nuevo_string += string;  
}
nuevo_string += final_string;
console.log(nuevo_string);   


for (let i = 0; i < 3; i++) {  
  let costados = costados_string;  
  for (let j = 0; j < 5; j++) {  
    costados += " ";  
  }
  costados += costados_string;  
  console.log(costados);   
}


for (let i = 0; i < 5; i++) {
  nuevo_string_inferior += string; 
  
}
nuevo_string_inferior += final_string_inferior;
console.log(nuevo_string_inferior);   
