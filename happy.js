document.addEventListener("DOMContentLoaded", function () {
  const confettiContainer = document.getElementById("confetti-container");
  const numberOfConfetti = 20;

  // Создаем переменную audio для музыки
  const audio = new Audio("АФТЕРПАТИ (feat. xxxmanera).mp4");
  audio.muted = true; // Задаем звук как заглушенный

  function Sound() {
    audio
      .play()
      .then(() => {
        console.log("Music is playing.");
      })
      .catch((error) => {
        console.error("Error playing audio:", error);
      });
  }

  const createConfetti = () => {
    for (let i = 0; i < numberOfConfetti; i++) {
      let confetti = document.createElement("img");
      confetti.src = "Confetti free icons designed by Freepik.jpg"; // Укажи путь к изображению конфетти
      confetti.style.width = "30px";
      confetti.style.height = "30px";
      confetti.classList.add("confetti");

      confetti.style.left = Math.random() * window.innerWidth + "px";
      confetti.style.top = "-30px"; // Начинаем немного выше верхней границы

      let animationDuration = Math.random() * 10 + 15; // Скорость падения от 5 до 15 секунд
      confetti.style.animationDuration = `${animationDuration}s`;
      confetti.style.animationName = "fall";

      confetti.addEventListener("animationend", () => {
        // confetti.remove();
      });

      confettiContainer.appendChild(confetti);
    }
  };

  setInterval(createConfetti, 2000);

  // Запускаем звук при взаимодействии с кнопкой
  const playMusicButton = document.getElementById("play-music");
  playMusicButton.style.display = "block"; // Показываем кнопку

  playMusicButton.addEventListener("click", () => {
    audio.muted = false; // Снимаем заглушение
    Sound(); // Запускаем звук
    playMusicButton.style.display = "none"; // Скрываем кнопку после нажатия
  });

  // Также можем вызвать Sound() в функции createConfetti, но это будет воспроизводить звук слишком часто
});
