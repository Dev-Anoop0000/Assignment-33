const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Define a custom event named "customEvent"
const customEventName = 'customEvent';

// Add an event handler for the "customEvent" event
const eventHandler = () => {
    console.log('Event handler is triggered!');
};

eventEmitter.on(customEventName, eventHandler);

// Call the "customEvent" event
console.log('Calling event before removing handler...');
eventEmitter.emit(customEventName);

// Remove the event handler
eventEmitter.removeListener(customEventName, eventHandler);

// Call the "customEvent" event again after removing the handler
console.log('Calling event after removing handler...');
eventEmitter.emit(customEventName);