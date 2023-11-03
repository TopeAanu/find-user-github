# find-user-github

Recently, I delved into some key concepts in JavaScript, and I was able to build/complete a project (challenge) [find-user-github](https://user-findr-github.netlify.app/). It's an app that allows you to fetch a GitHub user profile and their latest 5 repos. Let's talk about the project.

It takes in the following:
- HTML: For markup
- CSS: Styling & responsiveness
- Github class
- Ui class
- Js

Here's a breakdown of the code:
# Github class
- The getUser function is an asynchronous function that fetches user profile and repository data from the Github API. The function is declared asynchronously using the async keyword.

- The getUser function takes a parameter named user, which represents the Github username of the user whose data we want to fetch.

- Inside the function, two `HTTP` requests are made using the fetch function.

- The first request, stored in the getProfile variable, fetches the user's profile data from the Github API. The URL used in the request includes the user parameter, `client_secret`, and `client_id` as query parameters.

 - The second request, stored in the repoResponse variable, fetches the user's repository data from the Github API. The URL includes the user parameter, `repos_count`, `repos_sort`, `client_id`, and client_secret as query parameters.

- The await keyword is used to pause the execution of the code until the `promises` returned by the fetch requests are resolved. This ensures that the subsequent code doesn't execute until the responses are available.

- The `json()` method is called on the getProfile and repoResponse objects to extract the JSON data from the response bodies. The await keyword is used again to pause the execution until the `JSON` data is available.

- The resolved `JSON` data from the getProfile request is assigned to the profile variable, and the resolved JSON data from the repoResponse request is assigned to the repos variable.

- The function returns an object that contains the profile and repos variables. This allows the calling code to access the fetched data by accessing the profile and repos properties of the returned object.

# UI Class
showProfile(user): This method takes a user object as a parameter and populates the HTML elements with the user's profile information. It uses template literals to dynamically generate the HTML content based on the user object's properties.

showRepos(repos): This method takes an array of repos as a parameter and dynamically generates HTML content to display the repositories. It iterates over each repository in the array using the forEach method and appends the repository details to the output variable. It updates the HTML element with the id repos with the generated HTML content.

showAlert(message, className): This method displays an alert message on the web page. It takes a message and a className as parameters. It creates a <div> element with the specified class name and appends the message as a text node. The alert is inserted into the DOM before the search box element. The alert is automatically cleared after 3 seconds using a timeout.

clearAlert(): This method removes any existing alert messages from the `DOM`.

clearProfile(): This method clears the HTML content of the profile element by setting its innerHTML to an empty string.

# JS 
This section integrates the github and ui classes into the application.
const github = new Github instantiates a new Github object using the Github class. It creates an instance of the Github class. Same goes with ui class.

const searchInput = document.getElementById('searchInput') retrieves an HTML element with the id searchInput and assigns it to the searchInput variable. 

The `keyup` event adds an event listener to the searchInput element. Whenever a key is released in the input field, the provided callback function will be executed.

const userValue = e.target.value retrieves the current value of the searchInput element when a key is released and assigns it to the userValue variable.

The `if` conditional checks if the userValue is not an empty string.

The github.getUser(userValue).then calls the getUser method of the github object, passing `userValue as an argument`. It likely fetches user profile and repository data from the GitHub API asynchronously. The returned promise is handled using a then method, and the resolved data is passed to the callback function as the data parameter. 

The `if` (data.profile.message === 'Not Found') checks if the message property of the profile object in the data parameter is equal to 'Not Found'. If true, it means that the user was not found. 

The ui.showAlert('User not found', 'alert alert-danger') shows that if the user is not found, the method call will display an alert message with the text 'User not found' and applies the CSS classes 'alert' and 'alert-danger', indicating an error message. Same goes with ui.showRepos

The ui.showRepos(data.repos) shows that if the user is found, the method call will display the user's repositories by passing the repos array from the data parameter to the showRepos method of the `ui` object.

The ui.clearProfile() method shows that `if` the userValue is an empty string, the method call will clear the user profile information by calling the clearProfile method of the ui object.
