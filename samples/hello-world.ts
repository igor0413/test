const message = {
  hello: 'Hello World'
};

let message2 = message;

console.log('Message', message);

message2.hello = 'Igor';

console.log('Message', message);
console.log('Message 2', message2);