const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Define a custom event named "subscribe"
eventEmitter.on('subscribe', () => {
    console.log('User has subscribed!');
});

// Simulate triggering the "subscribe" event
eventEmitter.emit('subscribe');

console.log(" Program finished !")