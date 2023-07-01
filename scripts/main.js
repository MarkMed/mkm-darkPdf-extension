const defaultValues = {
	grayscaleValue: 1, invertValue: 0.7, brightnessValue: 0.4
}
const applyFilters = (grayscaleValue, invertValue, brightnessValue)=>{
	document.querySelector("embed").style.filter = `grayscale(${grayscaleValue}) invert(${invertValue}) brightness(${brightnessValue})`
}

const saveLocalStorage = (keyParam, valueParam) => {
	if (typeof valueParam === "string") {
		localStorage.setItem(keyParam, valueParam);
	}
	else {
		const parsedValue = JSON.stringify(valueParam);
		localStorage.setItem(keyParam, parsedValue);

	}
}
const getFromLocalStorage = keyParam => localStorage.getItem(keyParam);