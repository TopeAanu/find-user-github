// instantiate github & ui class
const github = new Github;

const ui = new UI;

// search input
const searchInput = document.getElementById('searchInput');

// input event listener
searchInput.addEventListener('keyup', (e) => {

  // get input value
  const userValue = e.target.value;

  if(userValue !== '') {
    github.getUser(userValue).then(data => {
      if(data.profile.message === 'Not Found') {
        // show alert
        ui.showAlert('User not found', 'alert');
      } else {
        // show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    ui.clearProfile();
    // clear profile
  }
});