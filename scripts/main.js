const defaultValues = {
  grayscaleValue: 1,
  invertValue: 0.8,
  brightnessValue: 0.6,
  sepiaValue: 0.8
};
const applyFilters = (grayscaleValue, invertValue, brightnessValue, sepiaValue) => {
  document.querySelector(
    "embed"
  ).style.filter = `grayscale(${grayscaleValue}) invert(${invertValue}) brightness(${brightnessValue}) sepia(${sepiaValue})`;
};

const saveLocalStorage = (keyParam, valueParam) => {
  if (typeof valueParam === "string") {
    localStorage.setItem(keyParam, valueParam);
  } else {
    const parsedValue = JSON.stringify(valueParam);
    localStorage.setItem(keyParam, parsedValue);
  }
};
const getFromLocalStorage = (keyParam) => localStorage.getItem(keyParam);
