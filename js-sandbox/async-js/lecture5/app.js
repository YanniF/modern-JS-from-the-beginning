const posts = [
  {title: 'Post one', body: 'This is post one'},
  {title: 'Post two', body: 'This is post two'},
];

function createPost(post) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      posts.push(post);

      const error = false; // example

      if(!error)
        resolve();
      else
        reject('Something went wrong');
      
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function() {
    let output = '';

    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post three', body: 'This is post three'}).then(getPosts).catch(function(err) {
  console.log(err);
});