//first slice to get array of values
//sort array to lowest to highest values
//compare function loops through array and compares each element index value to each element
//by subtracting a - b, the return value is compared to if it is >0 <0 or ===0.
//If the return value is '-'(negative) than that means a is less than (<) b
//If the return value is '+'(positive) than that means a is greater than (>) b
//This occurs over all elements, and the elements in this case sort ascending

const beepCountDown = () => {
  const sortArray = process.argv.slice(2); //slices process.argv at the 'terminal input' array
  sortArray.sort(function(a,b) { //sort method with compare function
    return a - b;
  });
  for (const timer of sortArray) { //For loop, initialize value to timer element of sortArray
    if (timer < 0 && timer !== NaN) { //Conditional to ensure that negative time isn't unleashed, and so only numbers are passed through as values
      //empty as we want no return
    } else {
      setTimeout(() => { //An instnace of setTimeOut will enter the event loop, timed for each 'alarm' called in node
        process.stdout.write('\x07');
      },timer * 1000); //Convert to seconds
    }
  }
};

beepCountDown();
