console.log('hello Inna!')

const obj = {
  'foo': '1',
  'bar': '2',
  'baz': '3'
}

for (const key in obj) {
  console.log(key)
  console.log(obj[key])
  console.log(obj.baz);
}
