/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function cardComponent(imgurl, name, username, location, userurl, followers, following, bio){

  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  const cardImg = document.createElement('img');
  cardImg.src = imgurl;
  cardDiv.appendChild(cardImg);

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  cardDiv.appendChild(cardInfo);

  const cardName = document.createElement('h3');
  cardName.classList.add('name');
  cardName.textContent = name;
  cardInfo.appendChild(cardName);

  const cardUsername = document.createElement('p');
  cardUsername.classList.add('username');
  cardUsername.textContent = username;
  cardInfo.appendChild(cardUsername);

  const cardLocation = document.createElement('p');
  cardLocation.textContent = `Location: ${location}`;
  cardInfo.appendChild(cardLocation);

  const cardProfile = document.createElement('p');
  cardProfile.textContent = `Profile: `;
  cardInfo.appendChild(cardProfile);
  const cardProfileURL = document.createElement('a');
  cardProfileURL.href = userurl;
  cardProfileURL.textContent = userurl;
  cardProfile.appendChild(cardProfileURL);

  const cardFollowers = document.createElement('p');
  cardFollowers.textContent = `Followers: ${followers}`;
  cardInfo.appendChild(cardFollowers);

  const cardFollowing = document.createElement('p');
  cardFollowing.textContent = `Following: ${following}`;
  cardInfo.appendChild(cardFollowing);

  const cardBio = document.createElement('p');
  cardBio.textContent = `Bio: ${bio}`;
  cardInfo.appendChild(cardBio);

  return cardDiv;
}

const users = ['aricrepp', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell']
const addCard = document.querySelector('.cards');

for(let i = 0; i < users.length; i++){

  axios.get(`https://api.github.com/users/${users[i]}`)
  .then((response) => {
      const newCard = cardComponent(response.data.avatar_url, response.data.name, response.data.login, response.data.location, response.data.html_url, response.data.followers, response.data.following, response.data.bio);
      addCard.appendChild(newCard);
  })
  .catch((err) => {
    console.log(err);
  });

}




/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell


  avatar_url: "https://avatars0.githubusercontent.com/u/13386255?v=4"
bio: "Aspiring Front-End Developer focused on designing and developing UI/UX elements"
blog: "aricrepp.github.io"
company: null
created_at: "2015-07-17T20:20:16Z"
email: null
events_url: "https://api.github.com/users/aricrepp/events{/privacy}"
followers: 0
followers_url: "https://api.github.com/users/aricrepp/followers"
following: 0
following_url: "https://api.github.com/users/aricrepp/following{/other_user}"
gists_url: "https://api.github.com/users/aricrepp/gists{/gist_id}"
gravatar_id: ""
hireable: true
html_url: "https://github.com/aricrepp"
id: 13386255
location: "Lafayette, Indiana"
login: "aricrepp"
name: "Aric Repp"
node_id: "MDQ6VXNlcjEzMzg2MjU1"
organizations_url: "https://api.github.com/users/aricrepp/orgs"
public_gists: 0
public_repos: 21
received_events_url: "https://api.github.com/users/aricrepp/received_events"
repos_url: "https://api.github.com/users/aricrepp/repos"
site_admin: false
starred_url: "https://api.github.com/users/aricrepp/starred{/owner}{/repo}"
subscriptions_url: "https://api.github.com/users/aricrepp/subscriptions"
type: "User"
updated_at: "2020-04-16T23:07:17Z"
url: "https://api.github.com/users/aricrepp"
*/
