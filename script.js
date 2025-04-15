document.getElementById('quizForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const q3 = document.querySelector('input[name="q3"]:checked');
  const q4 = document.querySelector('input[name="q4"]:checked');
  const q5 = document.querySelector('input[name="q5"]:checked');
  const q6 = document.querySelector('input[name="q6"]:checked');
  const q7 = document.querySelector('input[name="q7"]:checked');
  const q8 = document.querySelector('input[name="q8"]:checked');
  const q9 = document.querySelector('input[name="q9"]:checked');
  const q10 = document.querySelector('input[name="q10"]:checked');
  const q11 = document.querySelector('input[name="q11"]:checked');
  const q12 = document.querySelector('input[name="q12"]:checked');

  if (!q1 || !q2 || !q3 || !q4 || !q5 || !q6 || !q7 || !q8 || !q9 || !q10 || !q11 || !q12) {
    alert('Smart school boy, на все вопросы ответь.');
    return;
  }

  let score = 0;
  if (q1.value === 'a') score++;
  if (q2.value === 'b') score++;
  if (q3.value === 'a') score++;
  if (q4.value === 'b') score++;
  if (q5.value === 'c') score++;
  if (q6.value === 'a') score++;
  if (q7.value === 'b') score++;
  if (q8.value === 'b') score++;
  if (q9.value === 'a') score++;
  if (q10.value === 'b') score++;
  if (q11.value === 'a') score++;
  if (q12.value === 'b') score++;

  let result = '';
  if (score === 12) {
    result = 'Знаешь столько, сколько не знают нормальные люди';
  } else if (score >= 9) {
    result = 'Smart school boy';
  } else if (score >= 6) {
    result = 'Знаешь столько, сколько знает обычный учитель 94-го лицея';
  } else if (score >= 3) {
    result = 'Знаешь столько, сколько знаем только мы с тобой)';
  } else {
    result = 'Знаешь столько, сколько знает обычный ученик 94-го лицея';
  }

  document.getElementById('result').innerText = result;
});
