


const delayedHello = () => {
  console.log('Hi! This is an asynchronous greeting!');
};
 
setTimeout(delayedHello, 2000);

/*
In your own words, describe the way this code ran:

<We have an anonymous arrow function by the name of "delayedHello" that logs a string. In addition, we have another function invoked by the name of "setTimeout" and it has taken two arguments, the first argument takes the function "delayedHello", and the second argument is the time after it will execute that function. For example, after we run our file setTimeout.js, after two seconds, we will have the string inside our function "delayedHello" logged inside our terminal or console.>

What do you think caused this behavior?

<The function "setTimeout" that we invoked caused this behavior by putting keeping the delayedHello invocation inside the webAPIs and then after 2000 ms, it transfers it to the query and then back to stack and transfers it back to log>

Use chatGpt or your favorite search engine to understand the setTimeOut method.
Focus on understanding the syntax and the process
*/
