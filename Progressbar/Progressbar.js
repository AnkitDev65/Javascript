const back_btnClick = function (event) {
  var currentStep = document.getElementById('step_no').value;
  currentStep = parseInt(currentStep);
  stepToReach = currentStep -1;
  setButtonState(stepToReach);
  if (stepToReach < 1) 
    return;

  document.getElementById('step_no').value = stepToReach;
  var allEl = document.querySelectorAll("[step='" + currentStep + "']");
  allEl.forEach(el => el.classList.remove('stepDone'));
};

const next_btnClick = function (event) {
  var currentStep = document.getElementById('step_no').value;
  var stepToReach = parseInt(currentStep) + 1;
  setButtonState(stepToReach);
  if (stepToReach > pbSteps)
    return;

  document.getElementById('step_no').value = stepToReach;
  var allEl = document.querySelectorAll("[step='" + stepToReach + "']");
  allEl.forEach(el => el.classList.add('stepDone'));
};

const setButtonState = function (currentStep) {
  var btnPrev = document.getElementById("btn_prev");
  var btnNext = document.getElementById("btn_next");
  if (currentStep == 1 && currentStep == pbSteps) {
    btnPrev.disabled = true;
    btnNext.disabled = true;
  }
  else if(currentStep == 1){
    btnPrev.disabled = true;
    btnNext.disabled = false;
  }
  else if(currentStep == pbSteps){
    btnPrev.disabled = false;
    btnNext.disabled = true;
  }
  else{
    btnPrev.disabled = false;
    btnNext.disabled = false;
  }
}


const pbSteps = 5;
let innerHTML = "";
for (let i = 1; i <= pbSteps; i++) {
  if (i > 1) {
    innerHTML += `<div class="progressLine" step="${i}"></div>`;
  }
  innerHTML += `<div class="progressCircle ${i==1?'stepDone':''}" step="${i}">${i}</div>`;
}

document.getElementById('progressbarContainer').innerHTML += innerHTML;
setButtonState(1);