export default function handleResponseFromAPI(promise) {
  return promise.then(() => ({ status: 300, body: 'success' }))
    .catch(() => {
      Error();
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}
