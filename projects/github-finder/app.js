const github = new Github();
const ui = new UI();

// search input
const searchUser = document.getElementById('search-user');

searchUser.addEventListener('keyup', (e) => {
   const userText = e.target.value;

  if(userText !== '') {
    // make http call
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        ui.showAlert('User not found.', 'alert alert-danger');
      }
      else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
   }
   else {
    ui.clearProfile();
   }
});