function generateID() {
  var pass = '';
  var strong = 10;
  var dic = 'abcdefghijklmnopqrstuvwxyz1234567890';

  for (var i = 0; i < strong; i++) {
    pass += dic.charAt(Math.floor(Math.random() * dic.length));
  }
  return pass;
}

let users = [
  {
    userID: generateID(),
    firstName: 'Pavel',
    secondName: 'Efimov',
    email: 'test@gmail.com'
  }
];
module.exports = { users };
