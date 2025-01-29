function solve(inp1, inp2, inp3, inp4) {
  const hourForExam = Number(inp1);
  const minuteForExam = Number(inp2);
  const arrivalHour = Number(inp3);
  const arrivalMinute = Number(inp4);

  let examTime    = hourForExam * 60 + minuteForExam;
  let arrivalTime = arrivalHour * 60 + arrivalMinute;
  let difTime = Math.abs(examTime - arrivalTime);  
  let hours   = "";
  let minutes = "";
  let difStr  = "";
  if(difTime >= 60){
   hours   = (Math.floor(difTime / 60)).toString();
   minutes = (difTime % 60).toString().padStart(2, '0');
   difStr  = `${hours}:${minutes} hours`;    
  }else{
    minutes = difTime.toString(); //.padStart(2, '0');
    difStr  = `${minutes} minutes`;
  }

  if(examTime > arrivalTime){
    if(difTime > 30){
      console.log("Early");
      console.log(`${difStr} before the start`);      
    }else if(difTime <= 30){
      console.log("On time");
      console.log(`${difStr} before the start`);      
    }
  }else if(examTime === arrivalTime){
      console.log("On time");
  }else{
    console.log("Late");
    console.log(`${difStr} after the start`);
  } 
}

solve("9", "30", "9", "50");
solve("9", "00", "10", "30");
solve("10", "00", "10", "00");
solve("9", "00", "8", "30");
solve("14", "00", "13", "55");
solve("11", "30", "10", "55");
solve("16", "00", "15", "00");
solve("11", "30", "8", "12");
solve("11", "30", "12", "29");
