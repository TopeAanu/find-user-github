class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // display profile in ui 
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card">
        <div class="row row2">
          <div class="col-1">
            <img class="img" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn">View Profile</a>
          </div>
          <div class="col-2">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Created: ${user.created_at}</li>
            <ul>
          </div>
        </div>
      </div>
      <h3 class="heading">Latest Repos</h3>
      <div id="repos"</div>
    `;
  }

  // show user repos
  showRepos(repos) {
    let output = '';

    repos.forEach(function(repo) {
      output += `
        <div class="card">
          <div class="row">
            <div class="col-3">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-3">
              <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-success">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    // output repos
    document.getElementById('repos').innerHTML = output;
  }

  // show alert message
  showAlert(message, className) {
    // clear any remaining alerts
    this.clearAlert();

    // create div
    const div = document.createElement('div');

    // add classes
    div.className = className;

    // add text
    div.appendChild(document.createTextNode(message));

    // get parent 
    const container = document.querySelector('.searchCon');

    // get search box
    const search = document.querySelector('.search');

    // insert alert
    container.insertBefore(div, search);

    // timeout after 3 secs
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if(currentAlert) {
      currentAlert.remove();
    }
  }

  // clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }
}