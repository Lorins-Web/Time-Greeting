const welcomeTypes = [
  {
    backgroundUrl:
      "https://media.istockphoto.com/id/1332712244/photo/sunrise-over-misty-fields-of-corn.jpg?s=612x612&w=0&k=20&c=Ahdwy0nHLDDxMPA5Q9D6bUBykhjixiqVWFvsiX9E6aE=",
    message: "Good Morning",
  },
  {
    backgroundUrl:
      "https://media.istockphoto.com/id/141467949/photo/beach-at-bamburgh-northumberland-uk.jpg?s=612x612&w=0&k=20&c=5kfMaNJIVWffH629lmkxjt6uXx58fQyxPtf2w4rhhs8=",
    message: "Good Afternoon",
  },
  {
    backgroundUrl:
      "https://media.istockphoto.com/id/1014476772/photo/blue-nightsky-with-stars-and-clouds-over-silhouette-landscape.jpg?s=612x612&w=0&k=20&c=enk22hXe9jyZvffhdmc3j3h5HeiZ9IElKIMBeP_mDK8=",
    message: "Good evening",
  },
];

const padWithZero = (i) => (i < 10 ? "0" + i : i);

const updateClock = (h, m, s) => {
  m = padWithZero(m);
  s = padWithZero(s);
  document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
};

const getPartOfTheDayIndex = (h) => {
  if (h < 12) return 0;
  else if (h <= 18) return 1;
  return 2;
};

const updateWelcomeText = (part) => {
  const greeting = document.getElementById("greeting");
  if (greeting !== greeting.innerHTML) {
    greeting.innerHTML = welcomeTypes[part].message;
  }
};

const updateBackground = (d, part) => {
  const imgElem = document.getElementById("image_1");
  if (d >= 0 && d <= 6) {
    const backgroundUrl = "url('" + welcomeTypes[part].backgroundUrl + "')";
    if (document.body.style.backgroundImage !== backgroundUrl) {
      document.body.style.backgroundImage = backgroundUrl;
      document.body.style.backgroundSize = "50rem 33rem";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundPosition = "center center";
    }
  }
};
// 50rem 33rem

const startTime = () => {
  const today = new Date();
  const d = today.getDay();
  const h = today.getHours();
  const m = today.getMinutes();
  const s = today.getSeconds();
  const part = getPartOfTheDayIndex(h);
  updateClock(h, m, s);
  updateWelcomeText(part);
  updateBackground(d, part);
  setTimeout(startTime, 1000);
};
