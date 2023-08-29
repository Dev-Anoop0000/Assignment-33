const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Get the current defaultMaxListeners value
const currentMaxListeners = eventEmitter.getMaxListeners();
console.log('Current defaultMaxListeners:', currentMaxListeners);

// Set the maximum number of listeners to 5
eventEmitter.setMaxListeners(5);
console.log('Maximum number of listeners set to 5');

// Add event listeners
for (let i = 1; i <= 10; i++) {
    eventEmitter.on('customEvent', () => {
        console.log(`Event handler ${i} is triggered.`);
    });
}

// Emit the event
eventEmitter.emit('customEvent');