import { generateRandomRGBColor } from "./color.js";
import { countStage } from "./stage.js";
import { resetTimer, timerNum } from "./time.js";

let stage = 1; // 현재 스테이지
let clearedStages = 0; // 클리어한 스테이지 수
const initialOpacity = 0.7; // 초기 opacity
const opacityIncrease = 0.05; // 스테이지가 진행될수록 증가하는 opacity 값
let targetOpacity = initialOpacity + opacityIncrease;
function resetBoard() {
  const gameBoard = document.querySelector(".gameBoard");
  gameBoard.innerHTML = ""; // 현재 보드 초기화
}
function createBoard() {
  resetBoard();
  const gameBoard = document.querySelector(".gameBoard");
  const size = 2 + Math.floor(clearedStages / 2);
  gameBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // 그리드의 열 설정

  const baseColor = generateRandomRGBColor(); // 기본 색상 생성
  const correctIndex = Math.floor(Math.random() * (size * size)); // 정답 타일의 인덱스

  for (let i = 0; i < size * size; i++) {
    const tile = document.createElement("div");
    tile.className = "tile";
    const opacity = i === correctIndex ? targetOpacity : 1;
    tile.innerHTML = `<div class="tile-inner" style="background-color: ${baseColor}; opacity: ${opacity};"></div>`;
    tile.addEventListener("click", (e) => {
      if (i === correctIndex) {
        clearedStages++;
        stage++;
        countStage(stage);
        resetTimer();
        if (clearedStages % 2 === 0) {
          targetOpacity += opacityIncrease;
        }
        createBoard();
      } else {
      }
    });
    gameBoard.appendChild(tile);
  }
}

createBoard();
