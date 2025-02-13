function openGift() {
  document.querySelector(".gift-box").style.display = "none";
  document.querySelector(".coupons").style.display = "grid";

  const coupons = document.querySelectorAll(".coupon");
  coupons.forEach((coupon, index) => {
    setTimeout(() => {
      coupon.style.opacity = "1";
      coupon.style.transform = "translateY(0)";
    }, index * 100);
  });

  // Simple confetti effect
  for (let i = 0; i < 100; i++) {
    createConfetti();
  }
}

function createConfetti() {
  const confetti = document.createElement("div");
  confetti.style.width = "10px";
  confetti.style.height = "10px";
  confetti.style.background = getRandomColor();
  confetti.style.position = "absolute";
  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.top = "-10px";
  confetti.style.borderRadius = "50%";
  confetti.style.zIndex = "1000";
  document.body.appendChild(confetti);

  const animation = confetti.animate(
    [
      { transform: "translateY(0) rotate(0deg)", opacity: 1 },
      {
        transform: `translateY(100vh) rotate(${Math.random() * 360}deg)`,
        opacity: 0,
      },
    ],
    {
      duration: Math.random() * 3000 + 2000,
      easing: "cubic-bezier(0,0,0.2,1)",
    }
  );

  animation.onfinish = () => confetti.remove();
}

function getRandomColor() {
  return `hsl(${Math.random() * 360}, 100%, 50%)`;
}

document.querySelector(".back-button").addEventListener("click", function () {
  window.location.href = "index.html";
});
