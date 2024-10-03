function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success'
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

// Testing the function
getFullResponseFromAPI(true)
  .then(response => {
    console.log('Resolved:', response);
  })
  .catch(error => {
    console.error('Rejected:', error.message);
  });

getFullResponseFromAPI(false)
  .then(response => {
    console.log('Resolved:', response);
  })
  .catch(error => {
    console.error('Rejected:', error.message);
  });

