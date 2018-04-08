const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingFor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/26.jpg'
  },
  {
    name: 'Jen Smith',
    age: 29,
    gender: 'female',
    lookingFor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/26.jpg'
  },
  {
    name: 'William Chateau',
    age: 27,
    gender: 'male',
    lookingFor: 'male',
    location: 'New York NY',
    image: 'https://randomuser.me/api/portraits/men/52.jpg'
  }
];

const profiles = profileIterator(data);

// call first profile
nextProfile();

// next event
document.getElementById('next').addEventListener('click', nextProfile);

// next profile display
function nextProfile() {
  // const currentProfile = profiles.next().value;
  const currentProfile = profiles.next();

  // if(currentProfile !== undefined) {
  if(!currentProfile.done) {
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.value.name}</li>
        <li class="list-group-item">Age: ${currentProfile.value.age}</li>
        <li class="list-group-item">Location: ${currentProfile.value.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.value.gender} looking for ${currentProfile.value.lookingFor}</li>
      </ul>
    `;
    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.value.image}">`
  }
  else {
    // no more profiles
    window.location.reload();
  }
  
}

// profile iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? 
      { value: profiles[nextIndex++], done: false } : 
      { done: true }
    }
  }
}