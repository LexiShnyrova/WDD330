import { makeRequest } from './authHelper.js'

export class Auth {
  constructor() {
    this.jwtToken = '';
    this.user = {};
  }

  async login(callback) {
    // replace the ids below with whatever you used in your form.
    const password = document.getElementById('password');
    const username = document.getElementById('username');
    const postData = {
      email: username.value,
      password: password.value
    };
    try {
      // 1. use the makeRequest function to pass our credentials to the server
      this.jwtToken = (await makeRequest('login', 'POST', postData)).accessToken

      // let's get the user details as well and store them locally in the class
      // you can pass a query to the API by appending it on the end of the url like this: 'users?email=' + email
      this.user = await this.getCurrentUser(username.value);
      console.log(this.user)
      // hide the login form.
      document.getElementById('login-form').classList.add('hidden');
      // clear the password
      password.value = '';

      // since we have a token let's go grab some data from the API by executing the callback if one was passed in
      if (callback) {
        callback();
      }
    } catch (error) {
      // if there were any errors display them
      console.log(error);
    }
  }
  // uses the email of the currently logged in user to pull up the full user details for that user from the database
  async getCurrentUser(email) {
    try {
      // 3. add the code here to make a request for the user identified by email...don't forget to send the token!
      return await makeRequest('users?email=' + email, 'GET', null, this.jwtToken)
    } catch (error) {
      // if there were any errors display them
      console.error(error);
    }
  }

  set token(value) {
    // we need this for the getter to work...but we don't want to allow setting the token through this.
  }
  get token() {
    return this.jwtToken;
  }
}

let auth = new Auth()
document.getElementById('submit').addEventListener('click', function () {
  auth.login(async () => {

    const res = await makeRequest('posts', 'GET', null, auth.jwtToken)
    const posts = document.getElementById('posts')
    const postForm = document.getElementById('post-form')
    postForm.classList.remove('hidden')
    for (let post of res)
      posts.innerHTML += `<p><b>${post.title}: </b>${post.content}</p>`

    document.getElementById('add-post').addEventListener('click', addPost)
  })
})


async function addPost(e) {
  e.preventDefault()
  e.stopPropagation()
  const content = document.getElementById('post-body').value
  const title = 'This is an awesome post'
  const res = await makeRequest('posts', 'POST', { title, content }, auth.jwtToken)
}