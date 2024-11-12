// Selecting necessary DOM elements for the modal
(() => {
    const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),// select the button that opens the modal
    closeModalBtn: document.querySelector("[data-modal-close]"),// select the button that closes the modal
    modal: document.querySelector("[data-modal]"),// select the modal
    };
    const registrationBtn = document.querySelector('.registration-btn');
    const enemyContainer = document.querySelector(".enemy-container");
    
    // Adding event listeners to the buttons for opening and closing the modal
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    
    // Function to toggle the visibility of the modal
    function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    }
    
    // Function to handle form submission
    function handleFormSubmit(event) {
    event.preventDefault();  
    registrationBtn.classList.add('is-hidden'); 
    enemyContainer.classList.remove("is-hidden");
    refs.modal.classList.add("is-hidden");
  
  }
    
    const form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
    })();
  
  // Selecting necessary DOM elements for the game
  const scoreContainer = document.querySelector(".score");
  const levelContainer = document.querySelector(".level");
  const enemyImages = ["img/pic1.png", "img/pic2.png", "img/pic3.png", "img/pic4.png", "img/pic5.png"];
  const enemyWidth = [200, 200, 300, 350, 400];
  const levelUpModal = document.querySelector("#level-up-modal");
  const levelNumber = document.querySelector(".level-number");
  const gameOverModal = document.querySelector("#game-over-modal");
  const gameOverModalBtn = document.querySelector(".modal-close");
  const finalScore = document.querySelector(".final-score");
  const targetClicks = [5, 8, 12, 17, 22];
  let currentLevel = 1;
  let currentScore = 0;
  
  // Function to start the game
  function start() {
    const registrationBtn = document.querySelector('.registration-btn');
    const enemyContainer = document.querySelector(".enemy-container");
    
    // Adding a click event listener to the enemy container
    enemyContainer.onclick = () => {
      currentScore++;
      updateScore();
    
      if (currentScore === targetClicks[currentLevel - 1]) {
        currentLevel++;
        if (currentLevel > 5) {
          endGame();
        } else {
          congratulatePlayer();
          updateLevel();
          updateEnemy();
          updateWidth();
          setTimeout(() => {
            levelUpModal.classList.remove("active");
          }, 800);
        }
      }
    }
  }
  
  function updateScore() {
    scoreContainer.textContent = `Clicks score: ${currentScore}`;
  }
  
  function updateLevel() {
    levelContainer.textContent = `Level: ${currentLevel}`;
  }
  
  function updateEnemy() {
    const enemyContainer = document.querySelector(".enemy-container"); 
    enemyContainer.src = `${enemyImages[currentLevel - 1]}`;
  }
  
  function congratulatePlayer() {
    levelNumber.textContent = currentLevel;
    levelUpModal.classList.add("active");
  }
  
  function updateWidth() {
    const enemyContainer = document.querySelector(".enemy-container"); 
    enemyContainer.width = `${enemyWidth[currentLevel - 1]}`;
  }
  
  function endGame() {
    finalScore.textContent = currentScore;
    gameOverModal.classList.add("active")
    gameOverModalBtn.addEventListener("click", () => {
      gameOverModal.classList.remove("active");
    });
  }
  
  start();
  
  const resetBtn = document.querySelector(".reset-btn");
  resetBtn.addEventListener("click", resetGame);
  
  function resetGame() {
    // Обнуляем уровень и количество очков
    currentLevel = 1;
    currentScore = 0;
    updateScore();
    updateLevel();
    updateEnemy();
    updateWidth();
  }