const inputData = document.getElementById('date');
const btn = document.getElementById('checkDayBtn');
const divWeek = document.getElementById('dayWeek');

btn.addEventListener('click', () => {
  dateValue = inputData.value;
  if (dateValue) {
    const date = new Date(dateValue);
    const dayOfWeek = date.toLocaleDateString("pt-PT" , { weekday: 'long' });
    divWeek.innerText = `Dia da semana: ${dayOfWeek}`;
  }
});