import { FRUITS } from "./data.js";

export const getSuggestions = (keyword) => {
  return new Promise((resolve, reject) => {
    const result = FRUITS.filter(
      (i) =>
        i.substring(0, keyword.length).toLowerCase() === keyword.toLowerCase()
    );

    setTimeout(resolve(result), 1000);
  });
};

export const debounce = (fnc, delay = 300) => {
  
  let timerContext;
  return function () {
    console.log('debouncing ...')
    const self = this;
    const arg = arguments;
    // clear the timer context before calling the function
    clearTimeout(timerContext);
    timerContext=setTimeout(() => { fnc.apply(self, arg) }, delay);
  };
};
