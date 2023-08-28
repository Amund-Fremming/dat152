// Set up an event listener to receive messages from the main thread
self.addEventListener("message", event => {
    const inputValue = event.data;
  
    // Perform the calculation
    const result = inputValue * 2;
  
    // Send the result back to the main thread
    self.postMessage(result);
});  