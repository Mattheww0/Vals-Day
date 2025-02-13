const romanticQuotes = [
  "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
  "I love you not only for what you are, but for what I am when I am with you.",
  "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
  "I choose you. And I'll choose you over and over and over. Without pause, without a doubt, in a heartbeat. I'll keep choosing you.",
  "Every love story is beautiful, but ours is my favorite.",
  "You are my today and all of my tomorrows.",
  "I love you more than I have ever found a way to say to you.",
  "If I know what love is, it is because of you.",
  "You are the last thought in my mind before I drift off to sleep and the first thought when I wake up each morning.",
  "I love you not because of who you are, but because of who I am when I am with you.",
];

function newQuote() {
  const quote =
    romanticQuotes[Math.floor(Math.random() * romanticQuotes.length)];
  document.getElementById("romantic-quote").textContent = quote;
}

document.getElementById("new-quote").addEventListener("click", newQuote);

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  heart.style.opacity = Math.random() * 0.5 + 0.5;
  document.querySelector(".floating-hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 300);

function createLoveShape() {
  const loveShape = document.createElement("div");
  loveShape.classList.add("love-shape");
  loveShape.style.left = Math.random() * 100 + "vw";
  loveShape.style.top = Math.random() * 100 + "vh";
  loveShape.style.transform = `rotate(${Math.random() * 360}deg)`;
  document.body.appendChild(loveShape);

  setTimeout(() => {
    loveShape.remove();
  }, 10000);
}

setInterval(createLoveShape, 5000);

newQuote();
