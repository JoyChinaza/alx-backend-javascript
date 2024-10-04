import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      if (photoResponse.body && userResponse.firstName && userResponse.lastName) {
        console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
        return { photo: photoResponse, user: userResponse };
      } else {
        throw new Error('Incomplete response data');
      }
    })
    .catch((error) => {
      console.log('Signup system offline');
      console.error('Error details:', error);
      return null;
    });
}

export default handleProfileSignup;
