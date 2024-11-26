const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');
const resetBtn = document.getElementById('resetBtn');
const countLabel = document.getElementById('countLabel');
let count = 0;

increaseBtn.addEventListener('click', () => {
  count++;
  countLabel.textContent = count;
});

decreaseBtn.addEventListener('click', () => {
    count--;
    countLabel.textContent = count;
});

resetBtn.addEventListener('click', () => {
    count = 0;
    countLabel.textContent = 0;
});