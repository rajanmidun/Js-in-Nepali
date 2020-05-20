//break and continue

//break terminates the loop  and continues executing the code after the loop (if any):
for(let i=1;i<=20;i++){
  if(i==10)
    break;
  console.log("Number"+i);
}

console.log("End of program");


/*continue doesnot terminate the loop but breaks one iteration (in the loop), 
if a specified condition occurs, and continues with the next iteration in the loop.
*/
for(let i=1;i<=20;i++){
  if(i==10)
    continue;
  console.log("Number"+i);
}

console.log("End of program");
