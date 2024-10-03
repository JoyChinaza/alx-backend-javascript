function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an API call with setTimeout
    setTimeout(() => {
      const success = Math.random() > 0.5; // Randomly succeed or fail
      if (success) {
        resolve("API response data");
      } else {
        reject(new Error("API request failed"));
      }
    }, 1000); // Simulate a 1 second delay
  });
}

// Usage:
getResponseFromAPI()
  .then(response => console.log("Success:", response))
  .catch(error => console.error("Error:", error));
