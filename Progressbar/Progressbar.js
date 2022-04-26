const btnClick = function (event) {
  var currentStep = event.currentTarget.getAttribute('counter');
  currentStep = parseInt(currentStep) + 1;
  if (currentStep > pbSteps)
    return;

  event.currentTarget.setAttribute('counter', currentStep);

  var allEl = document.querySelectorAll("[step='" + currentStep + "']");
  allEl.forEach(el => el.classList.add('stepDone'));
};

const pbSteps = 5;
let innerHTML = "";
for (let i = 1; i <= pbSteps; i++) {
  if (i > 1) {
    innerHTML += `<div class="progressLine" step="${i}"></div>`;
  }
  innerHTML += `<div class="progressCircle ${i==1?'stepDone':''}" step="${i}">${i}</div>`;
}

document.getElementById('progressbarContainer').innerHTML += innerHTML;
