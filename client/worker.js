console.log('Service worker loaded...');

self.addEventListener('push', (event) => {
    const data = event.data.json();
    console.log('Push received...')
    self.registration.showNotification(data.title, {
        body: 'Notified by Ganesh',
        icon: 'https://logo.clearbit.com/bicylovers.com' 
    })
})