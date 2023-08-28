
### This lecture covers the concepts of blocking and non-blocking operations, the use of WebWorkers for parallel processing, and the principles of asynchronous JavaScript.

1. Blocking and Non-blocking Operations:
   - All JavaScript code runs in the same thread, which can lead to blocking behavior.
   - I/O operations, such as Ajax data fetching, are non-blocking and can occur in parallel.
   - Older browsers shared one thread among all windows, while newer browsers use separate threads.
   - WebWorkers and WebAssembly enable multiple JavaScript threads.
   - Sleep(3000); is blocking, but can be handled with the async/await function to send the operation away.

<br/>

2. WebWorkers:
   - WebWorkers allow parallel processing by creating separate threads.
   - Modules can be used with WebWorkers for importing.
   - Mainly used for heavy computation, is made to run outside the main thread. 
   - Used to obtain true parallelism
   - To share data between a worker and main thread we need to set up listeners for messages between the two.

   ```js
   // Web Worker class
    class MyWorker {

        constructor() {
            this.worker = new Worker('worker.js', { type: 'module' });
            this.worker.addEventListener('message', this.handleMessage.bind(this));
        }

        handleMessage(event) {
            const result = event.data.result;
            console.log(`Received result from Web Worker: ${result}`);
        }

        startTask(data) {
            // Send data back to main thread
            this.worker.postMessage({ data: data });
        }

        performCustomTask(inputData) {
            const result = inputData * 2;
            // Send data back to main thread
            self.postMessage({ result: result });
        }

        // Listen for messages from the main thread
        self.addEventListener('message', event => {
            const inputData = event.data;
            doWork(inputData);
        });

    }

    // Export the worker class
    export default MyWorker;
   ```
   ```js
    // Main Thread code:
    import MyWorker from './worker.js';

    const myWorker = new MyWorker("worker.js");

    // Listen for messages from the worker
    myWorker.addEventListener('message', event => {
        const dataFromWorker = event.data;
        console.log('Received data from worker:', dataFromWorker);
    });

    // Output: Received result from Web Worker: HELLO FROM THE MAIN THREAD!
   ```
   ```js

   ```


<br/>

3. Asynchronous JavaScript:
   - Asynchronous code runs independently of the main program flow, triggered by events.
   - Asynchronous code does not necessarily involve threads; it runs in the same thread.
   - Examples of asynchronous operations include event handlers, Ajax data fetching, and promises.
   - Promises allow running code and continuing before the result is ready.
   - Promises can be resolved or rejected, often managed by the same JavaScript thread.
   - Promises can be used with async/await for clearer code structure.
   - Shared memory using SharedArrayBuffer and Atomics for synchronization is introduced.
   - Considerations for working with the DOM in WebWorkers are mentioned.

<br/><br/>

**Old way by using a Promise**
```js
// Creating a custom Promise
function simulateAsyncTask(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve('Task completed successfully!');
      } else {
        reject(new Error('Task failed.'));
      }
    }, 2000); // Simulating a 2-second asynchronous task
  });
}

// Using the custom Promise
simulateAsyncTask(true)
  .then(result => console.log(result))
  .catch(error => console.error('Error:', error.message));

simulateAsyncTask(false)
  .then(result => console.log(result))
  .catch(error => console.error('Error:', error.message));
```

**Modern way wit async/await**
```js
// Using Async/Await to fetch data from an API
async function fetchUsingAsyncAwait() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchUsingAsyncAwait();
```