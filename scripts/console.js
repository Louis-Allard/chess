/****************************
  _____   _____   __   _   _____   _____   _       _____  
/  ___| /  _  \ |  \ | | /  ___/ /  _  \ | |     | ____| 
| |     | | | | |   \| | | |___  | | | | | |     | |__   
| |     | | | | | |\   | \___  \ | | | | | |     |  __|  
| |___  | |_| | | | \  |  ___| | | |_| | | |___  | |___  
\_____| \_____/ |_|  \_| /_____/ \_____/ |_____| |_____| 
 **************************************/

function _caseName(a, b) {
  let time = new Date();
  let timeStr = time.toLocaleTimeString();
  console.log("------- CONSOLE CASE NAME -------");
  console.log("Case => [" + a + b + "]");
  console.log("--------------------------");
  document.getElementById("elements").innerHTML += "[" + timeStr + "] : " + "Case => [" + a + b + "]" + "<br />";
}

function _case_Enable(c) {
  console.log("------- CONSOLE CASE ENABLE -------");
  console.log("CaseEnable :: "+ c);
}

function _array_case(array_case){
  console.log("------ CONSOLE ARRAY CASE ---------");
  console.log("Array Case :: ",  array_case);
}