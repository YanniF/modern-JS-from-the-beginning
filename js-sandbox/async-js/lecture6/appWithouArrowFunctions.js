document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);

function getText() {
  // fetch returns a promise
  fetch('test.txt')
  .then(function(res) {
    return res.text();
  })
  .then(function(data) {
    document.getElementById('output').innerHTML = (data);
  })
  .catch(function(err) {
    console.log('Error: ' + err);
  });
}

function getJSON() {
  fetch('posts.json')
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    let output = '';

    data.forEach(post => {
      output += `<li>${post.title}</li>`
    });

    document.getElementById('output').innerHTML = (output);
  })
  .catch(function(err) {
    console.log('Error: ' + err);
  });
}

function getExternal() {
  fetch('https://api.github.com/users')
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    let output = '';

    data.forEach(user => {
      output += `<li>${user.login}</li>`
    });

    document.getElementById('output').innerHTML = (output);
  })
  .catch(function(err) {
    console.log('Error: ' + err);
  });
}