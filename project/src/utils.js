// Utility functions

function sayHello(name) {
   return `Hello, ${name}`;
}

module.exports = { sayHello };

// Input validation utilities

function validateInput(value) {
   return value !== null && value !== undefined && value !== "";
}

module.exports.validateInput = validateInput;
