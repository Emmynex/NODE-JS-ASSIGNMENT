/*7. dns module
To do DNS lookups and name resolution functions*/
var dns = require('dns');
var w3 = dns.lookup('w3schools.com', function (err, addresses, family) {
  console.log(addresses);
});