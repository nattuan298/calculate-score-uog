const form = document.getElementById('form');
const proposal = document.getElementById('proposal');
const project = document.getElementById('project');
const subject1 = document.getElementById('subject1');
const subject2 = document.getElementById('subject2');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
  calculate();
});

function calculate() {
  // trim to remove the whitespaces
  const proposalValue = proposal.value.trim();
  const projectValue = project.value.trim();
  const subject1Value = subject1.value.trim();
  const subject2Value = subject2.value.trim();
  const resultProject = ((+proposalValue * 0.1) + (+projectValue * 0.9)) * 6;
  const resultTop2 = (+subject1Value + +subject2Value) * 1.5
  const resultValue = (resultProject + resultTop2) / 90;
  const result = resultValue.toFixed(2);
  if (result >= 7) {
    alert(`Your score is ${result}:
    Congratulations on graduating with First Class!`)
  } else if (result >= 6) {
    alert(`Your score is ${result}:
    Congratulations on graduating with Upper Second Class!`)
  } else if (result >= 5) {
    alert(`Your score is ${result}:
    Congratulations on graduating with Lower Second Class!`)
  } else if (result >= 4) {
    alert(`Your score is ${result}:
    Congratulations on graduating with Third Class!`)
  } else {
    alert(`Your score is ${result}:
    Very sad, you can't graduate! `)
  }
}
function checkInputs() {
  // trim to remove the whitespaces
  const proposalValue = proposal.value.trim();
  const projectValue = project.value.trim();
  const subject1Value = subject1.value.trim();
  const subject2Value = subject2.value.trim();

  if (proposalValue === '') {
    setErrorFor(proposal, 'Proposal score cannot be blank');
  } else if (+proposalValue < 10 || +proposalValue > 100) {
    setErrorFor(proposal, 'Invalid score');
  }
  else {
    setSuccessFor(proposal);
  }

  if (projectValue === '') {
    setErrorFor(project, 'Final project score cannot be blank');
  } else if (+projectValue < 10 || +projectValue > 100) {
    setErrorFor(proposal, 'Invalid score');
  } else {
    setSuccessFor(project);
  }

  if (subject1Value === '') {
    setErrorFor(subject1, 'Subject 1 score cannot be blank');
  } else if (+subject1Value < 10 || +subject1Value > 100) {
    setErrorFor(proposal, 'Invalid score');
  } else {
    setSuccessFor(subject1);
  }

  if (subject2Value === '') {
    setErrorFor(subject2, 'Subject 2 score cannot be blank');
  } else if (+subject2Value < 10 || +subject2Value > 100) {
    setErrorFor(proposal, 'Invalid score');
  } else {
    setSuccessFor(subject2);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
