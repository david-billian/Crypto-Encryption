const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
var CryptoJS = require('crypto-js');

//Generate public and private key
const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    cipher: 'aes-256-cbc',
    passphrase: ''
  }
});

fs.writeFileSync('public_key.pem', publicKey);
fs.writeFileSync('private_key.pem', privateKey);
