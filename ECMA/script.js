const inputNumber = document.getElementById("inputNumber");
const calculateButton = document.getElementById("calculateButton");
const resultElement = document.getElementById("result");

calculateButton.addEventListener("click", () => {
  const inputValue = parseInt(inputNumber.value);
  
  // Create a new Worker
  const worker = new Worker("worker.js");

  // Send data to the worker
  worker.postMessage(inputValue);

  // Receive data from the worker
  worker.addEventListener("message", event => {
    const result = event.data;
    resultElement.textContent = `Result: ${result}`;
    
    // Terminate the worker after receiving data
    worker.terminate();
  });
});
