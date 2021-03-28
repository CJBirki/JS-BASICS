function hello(firstName, lastName) {
  var fullname = 'Hello ${firstName} ${lastName}'
  return fullname
}

var sayFullName = hello('Caroline','Birkinshaw')
console.log (sayFullName)