function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      return {
        status: 200,
        body: 'success'
      };
    })
    .catch(() => {
      return new Error();
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}

// Example usage with a resolved and rejected promise:
const resolvedPromise = Promise.resolve();
const rejectedPromise = Promise.reject();

// Testing with resolved promise
handleResponseFromAPI(resolvedPromise).then((result) => {
  console.log(result); // { status: 200, body: 'success' }
});

// Testing with rejected promise
handleResponseFromAPI(rejectedPromise).then((result) => {
  console.log(result); // Error {}
});

