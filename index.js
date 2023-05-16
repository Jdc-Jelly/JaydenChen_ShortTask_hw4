
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('./sw.js')
  
  .then(function (registration) {
  console.log('Registration of service worker successful with scope: ',
  registration.scope);

  }).catch(function(err) {
  console.log('Registration of service worker failed with error: ', err);
  
  })} else {
  console.log('Service Worker is not supported by this browser');
}
