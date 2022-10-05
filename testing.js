const QuickEncrypt = require("quick-encrypt");
var keypair = require("keypair");

var pair = keypair();
console.log(pair);

// --- Encrypt using public key ---
let encryptedText = QuickEncrypt.encrypt("Hi! How r u doing?", pair.public);
console.log("Encrypted Messege : ", encryptedText);
// --- Decrypt using private key ---
let decryptedText = QuickEncrypt.decrypt(encryptedText, pair.private);
console.log("Decrypted Messege : ",decryptedText);
