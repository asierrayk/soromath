let exceptyearpreset = {
  id: "exceptyearequation",
  template: "template1equation",
  addproblem: addexceptyear,
  ontype: exceptyeartype,
  getanswer: exceptyearanswer,
  validate: exceptyearvalidate,
  answerText: exceptyearanswertext,
  speechText: exceptyearspeech,
  name: "day of week [except year]",
  settings: {
    name: "exceptyear"
  }
}

let exceptyearmonths = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

function addexceptyear(main=false, self=exceptyearpreset, name=null){
  let days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  let day = days[Math.floor(Math.random() * days.length)];
  let month = exceptyearmonths[Math.floor(Math.random() * exceptyearmonths.length)];
  if(main){
    day = 6;
    month = "enero";
  }
  problemlist.push([name, [day, month]]);
  if(recentduplicate()) return;
  let problem = document.createElement("p");
  problem.innerHTML = day + " " + month;
  problem.classList.add("problem");
  problem.classList.add("monthnumproblem");
  if(main) problem.id = "mainproblem";
  let problems = document.getElementsByClassName("mainproblems")[0];
  problems.appendChild(problem);
  return problem;
}

function exceptyearspeech(problem){
  return problem[0] + " " + problem[1] + " except year";
}

function exceptyearanswer(problem){
  let days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  let day = days.indexOf(problem[0]) + 1;
  let month = exceptyearmonths.indexOf(problem[1]) + 1;
  return (day + month) % 7;
}

function exceptyearanswertext(answer, problem){
  return problem[0] + " + " + (exceptyearmonths.indexOf(problem[1]) + 1) + " = " + answer;
}

function exceptyeartype(e){
  let input = document.getElementsByClassName("maininput")[0];
  let filtered = "";
  let nums = "0123456789";
  for(var i = 0; i < input.value.length; i++){
    if(nums.indexOf(input.value[i]) == -1) continue;
    filtered += input.value[i];
  }
  input.value = filtered;
}

function exceptyearvalidate(answer, inputnumber){
  if(inputnumber.length == 0) return false;
  if(inputnumber.length > 1) return "fail";
  let parsed = parseInt(inputnumber);
  if(parsed + "" == "NaN") return "fail";
  if(answer == parsed) return true;
  return "fail";
}
