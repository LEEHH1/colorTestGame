let timerInterval;

export function timerNum() {
  let timeLeft = 15; // 여기서 시간을 정의합니다.
  const timer = document.querySelector(".timer");

  timerInterval = setInterval(() => {
    timer.innerText = timeLeft;
    --timeLeft;
    if (timeLeft === 0) {
      timer.innerText = 0;
      clearInterval(timerInterval);
      createBoard();
    }
  }, 1000);
}

export function resetTimer() {
  clearInterval(timerInterval);
  timerNum();
}
timerNum();
