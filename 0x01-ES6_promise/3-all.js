import { uploadPhoto, createUser } from './utils.js'; // Importing the functions from utils.js

function handleProfileSignup() {
  // Using Promise.all to wait for both promises
  return Promise.all([uploadPhoto(), createUser()])
    .then((responses) => {
      const [photo, user] = responses; // Destructure the responses from both promises
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`); // Log the results
    })
    .catch(() => {
      console.log('Signup system offline'); // Log the error message if any promise rejects
    });
}

// Example usage:
handleProfileSignup();

