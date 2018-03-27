const http = new EasyHTTP();

// get users
// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));

// user data
const data = {
  name: 'John Bon Jovi',
  username: 'bad_name',
  email: 'john_bon@jovi.com'
}

// create user
// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// update user
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// delete user
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(yuyuyu => console.log(yuyuyu))
.catch(err => console.log(err));