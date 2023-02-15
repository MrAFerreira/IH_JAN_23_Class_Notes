const bcrypt = require('bcryptjs');

//Hashing / Encrypting
//Uses an algorithm to create a new jumbled up password

const password = '1234cool';
const password2 = '1234Cool';

//salt

const salt = bcrypt.genSaltSync(10);

const hash = bcrypt.hashSync(password, salt);
const hash2 = bcrypt.hashSync(password2, salt);

const comparison1 = bcrypt.compareSync(password, hash);
const comparison2 = bcrypt.compareSync(password2, hash);

console.log(hash);
console.log(hash2);
console.log(comparison1);
console.log(comparison2);
