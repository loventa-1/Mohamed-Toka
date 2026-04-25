// ====================== DYNAMIC VARIABLES (change later easily) ======================
const CONFIG = {
  groomName: "Mohamed",
  brideName: "Toka",
  // Henna Date
  hennaDate: "Monday, July 27th, 2026",
  hennaTime: "6:00 PM",
  hennaLocation: "At House",
  // Wedding Date
  weddingDate: "Wednesday, July 29th, 2026",
  weddingTime: "6:00 PM",
  weddingLocation: "Villa Noor Hall",
  venueMapLink:
    "https://www.google.com/maps/place/Villa+NOOR/@30.9391481,31.1407716,19.25z/data=!4m23!1m16!4m15!1m6!1m2!1s0x14f7bb4d2aa1877b:0x6b9caf7bbe867370!2z2KfZhNmF2K3ZhNipINin2YTZg9io2LHZidiMINin2YTZhdit2YTYqSDYp9mE2YPYqNix2YkgKNmC2LPZhSAyKdiMINmF2LHZg9iyINin2YTZhdit2YTZhyDYp9mE2YPYqNix2YnYjCDZhdit2KfZgdi42Kkg2KfZhNi62LHYqNmK2Kk!2m2!1d31.168083!2d30.9696706!1m6!1m2!1s0x14f7bb006e390295:0x3119ac5963e897e6!2zVmlsbGEgTk9PUtiMIFc0UVIrUjYz2Iwg2KjZhNmC2YrZhtin2Iwg2YXYsdmD2LIg2KfZhNmF2K3ZhNmHINin2YTZg9io2LHZidiMINmF2K3Yp9mB2LjYqSDYp9mE2LrYsdio2YrYqSA2NzMzNTQy!2m2!1d31.140364!2d30.939258!3e9!3m5!1s0x14f7bb006e390295:0x3119ac5963e897e6!8m2!3d30.939258!4d31.140364!16s%2Fg%2F11vz29h609?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D",
  imageUrl: "assets/images/WhatsApp Image 2026-04-21 at 4.00.34 AM.jpeg",
  musicUrl:
    "assets/music/SpotiDown.App - Edkhely Omri - Hussain Aljassmi-[AudioTrimmer.com].mp3",
  romanticMessage: "Our story begins… and you’re part of it ❤️",
};

// DOM elements
const hookScreen = document.getElementById("hookScreen");
const mainCard = document.getElementById("mainCard");
const tapBtn = document.getElementById("tapToOpenBtn");
const locationBtn = document.getElementById("locationBtn");
const bgMusic = document.getElementById("bgMusic");
const musicToggleDiv = document.getElementById("musicToggle");
const musicIcon = document.getElementById("musicIcon");
const musicStatusSpan = document.getElementById("musicStatus");
const weddingImg = document.getElementById("weddingImage");

// ✅ IMPORTANT: تأكد إن الكارد يكون مخفي في البداية
document.addEventListener("DOMContentLoaded", function () {
  if (mainCard) {
    mainCard.style.opacity = "0";
    mainCard.style.transform = "translateY(30px)";
    mainCard.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    mainCard.classList.remove("visible");
  }
});

// Apply config variables to the page content dynamically
function applyDynamicContent() {
  // Update names
  const namesContainer = document.querySelector(".big-names");
  if (namesContainer) {
    namesContainer.innerHTML = `${CONFIG.groomName} <span class="heart-icon">❤️</span> ${CONFIG.brideName}`;
  }

  // Update Henna Date Block
  const hennaDateValue = document.querySelector(".henna-date .date-value");
  if (hennaDateValue) {
    hennaDateValue.innerHTML = `<i class="fas fa-calendar-alt"></i> ${CONFIG.hennaDate}`;
  }
  const hennaTimeSpan = document.querySelector(".henna-date .date-time");
  if (hennaTimeSpan) {
    hennaTimeSpan.innerHTML = `<i class="fas fa-clock"></i> ${CONFIG.hennaTime}`;
  }
  const hennaLocationSpan = document.querySelector(
    ".henna-date .location-detail",
  );
  if (hennaLocationSpan) {
    hennaLocationSpan.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${CONFIG.hennaLocation}`;
  }

  // Update Wedding Date Block
  const weddingDateValue = document.querySelector(".wedding-date .date-value");
  if (weddingDateValue) {
    weddingDateValue.innerHTML = `<i class="fas fa-calendar-alt"></i> ${CONFIG.weddingDate}`;
  }
  const weddingTimeSpan = document.querySelector(".wedding-date .date-time");
  if (weddingTimeSpan) {
    weddingTimeSpan.innerHTML = `<i class="fas fa-clock"></i> ${CONFIG.weddingTime}`;
  }
  const weddingLocationSpan = document.querySelector(
    ".wedding-date .location-detail",
  );
  if (weddingLocationSpan) {
    weddingLocationSpan.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${CONFIG.weddingLocation}`;
  }

  // Update message
  const msgParagraph = document.querySelector(".message-card p");
  if (msgParagraph) {
    msgParagraph.innerHTML = `✨ “${CONFIG.romanticMessage}” ✨`;
  }

  // Update image source
  if (weddingImg) {
    weddingImg.src = CONFIG.imageUrl;
    weddingImg.alt = `${CONFIG.groomName} & ${CONFIG.brideName} wedding`;
  }

  // Update music source
  if (bgMusic) {
    bgMusic.src = CONFIG.musicUrl;
    bgMusic.load();
  }

  // Update location button link (for wedding location)
  if (locationBtn) {
    locationBtn.onclick = (e) => {
      e.preventDefault();
      window.open(CONFIG.venueMapLink, "_blank");
      locationBtn.style.transform = "scale(0.96)";
      setTimeout(() => {
        locationBtn.style.transform = "";
      }, 150);
    };
  }
}

// Music handling
let musicPlaying = false;
let musicStarted = false;

function enableMusic() {
  if (!musicStarted) {
    bgMusic.volume = 0.45;
    bgMusic
      .play()
      .then(() => {
        musicPlaying = true;
        musicStarted = true;
        updateMusicUI(true);
      })
      .catch((err) => {
        console.log("autoplay blocked, user interaction needed");
        musicPlaying = false;
        updateMusicUI(false);
      });
  } else {
    if (musicPlaying) {
      bgMusic.pause();
      musicPlaying = false;
      updateMusicUI(false);
    } else {
      bgMusic
        .play()
        .then(() => {
          musicPlaying = true;
          updateMusicUI(true);
        })
        .catch(() => {});
    }
  }
}

function updateMusicUI(isPlaying) {
  if (isPlaying) {
    musicIcon.className = "fas fa-volume-up";
    musicStatusSpan.innerText = "♥ Melody";
  } else {
    musicIcon.className = "fas fa-music";
    musicStatusSpan.innerText = "♫ muted";
  }
}

// ✅ Open invitation function (المعدلة)
function openInvitation() {
  // إخفاء شاشة الـ Hook
  hookScreen.classList.add("hidden");

  // إظهار الكارد بشكل صحيح مع opacity
  mainCard.style.opacity = "1";
  mainCard.style.transform = "translateY(0)";
  mainCard.classList.add("visible");

  // تشغيل الموسيقى
  enableMusic();

  const namesDiv = document.querySelector(".names-section");
  if (namesDiv) {
    namesDiv.style.animation = "none";
    namesDiv.offsetHeight;
    namesDiv.style.animation = "fadeSlideUp 0.9s ease forwards";
  }

  const imgEl = document.querySelector(".wedding-img");
  if (imgEl) {
    imgEl.style.transform = "scale(1.02)";
    setTimeout(() => {
      imgEl.style.transform = "";
    }, 400);
  }
}

// Event Listeners
tapBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  tapBtn.style.transform = "scale(0.94)";
  setTimeout(() => {
    tapBtn.style.transform = "";
  }, 150);
  openInvitation();
});

hookScreen.addEventListener("click", (e) => {
  if (
    e.target === hookScreen ||
    e.target.closest(".hook-content") ===
      hookScreen?.querySelector(".hook-content")
  ) {
    if (!e.target.closest("#tapToOpenBtn")) {
      tapBtn.style.transform = "scale(0.94)";
      setTimeout(() => {
        tapBtn.style.transform = "";
      }, 150);
      openInvitation();
    }
  }
});

musicToggleDiv.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!musicStarted && mainCard.classList.contains("visible")) {
    bgMusic.volume = 0.45;
    bgMusic
      .play()
      .then(() => {
        musicPlaying = true;
        musicStarted = true;
        updateMusicUI(true);
      })
      .catch(() => {
        alert("Please tap again to enable background music 🎵");
      });
  } else {
    if (musicPlaying) {
      bgMusic.pause();
      musicPlaying = false;
      updateMusicUI(false);
    } else {
      bgMusic
        .play()
        .then(() => {
          musicPlaying = true;
          updateMusicUI(true);
        })
        .catch(() => {});
    }
  }
});

if (weddingImg) {
  weddingImg.addEventListener("click", () => {
    weddingImg.style.transform = "scale(1.03)";
    setTimeout(() => {
      weddingImg.style.transform = "";
    }, 280);
  });
}

// ========================================
// TWO DATES HOVER ANIMATION
// ========================================
document.addEventListener("DOMContentLoaded", function () {
  // Add hover animation for date blocks
  const dateBlocks = document.querySelectorAll(".date-block");
  dateBlocks.forEach((block) => {
    block.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)";
      this.style.transition = "all 0.3s ease";
    });

    block.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Function to calculate days left
  function calculateDaysLeft(eventDate, eventName) {
    const today = new Date();
    const targetDate = new Date(eventDate);
    const timeDiff = targetDate - today;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    if (daysLeft > 0) {
      console.log(`${eventName}: ${daysLeft} يوم متبقي`);
    } else if (daysLeft === 0) {
      console.log(`${eventName}: اليوم هو الموعد! 🎉`);
    } else {
      console.log(`${eventName}: تم 🎊`);
    }
    return daysLeft;
  }

  calculateDaysLeft("2026-7-27", "حنة العمر");
  calculateDaysLeft("2026-7-29", "حفل الزفاف");
});

// Apply all dynamic data
applyDynamicContent();

// ✅ Initialize (المعدل)
window.addEventListener("load", () => {
  // تأكد إن الكارد يظهر فقط بعد الضغط
  if (mainCard) {
    mainCard.style.opacity = "0";
    mainCard.style.transform = "translateY(30px)";
    mainCard.classList.remove("visible");
  }
  if (bgMusic) {
    bgMusic.volume = 0.4;
  }
});
