import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then(items => {
    const photo = items[0];
    const user = items[1];

    console.log(photo.body, user.firstName, user.lastName);
  });
}
