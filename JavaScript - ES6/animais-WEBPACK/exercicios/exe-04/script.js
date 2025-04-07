const date = document.getElementById('date');
const btn = document.getElementById('ageCalculate');
const divAge = document.getElementById('ageDisplay');

btn.addEventListener('click', () => {
    const now = new Date();
    const ageValue = new Date(date.value);

    let ageYears = now.getFullYear() - ageValue.getFullYear();
    let ageMonths = now.getMonth() - ageValue.getMonth();
    let ageDays = now.getDate() - ageValue.getDate();

    if(ageDays < 0) {
      ageMonths--;
      ageDays += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }

    if(ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    divAge.innerText = `Idade: ${ageYears} anos, ${ageMonths} meses, e ${ageDays} dias`
});