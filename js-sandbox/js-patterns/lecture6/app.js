const PageState = function() {
  let currentState = new homeState(this);

  this.init = function() {
    this.change(new homeState);
  }

  this.change = function(state) {
    currentState = state;
  }
};

// home state
const homeState = function(page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#heading').innerHTML = `
  <div class="jumbotron">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </div>
  `;
};

// about state
const aboutState = function(page) {
  document.querySelector('#heading').textContent = 'About us';
  document.querySelector('#heading').innerHTML = `
    <p>This is the about page</p>
  `;
};

// contact state
const contactState = function(page) {
  document.querySelector('#heading').textContent = 'Contact us';
  document.querySelector('#heading').innerHTML = `
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" class="form-control">
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="text" id="email" class="form-control">
      </div>
      <button type="button" class="btn btn-primary">Submit</button>
    </form>
  `;
};

// instantiate pageState
const page = new PageState();

// init the first state
page.init();

// UI vars
const home = document.getElementById('home'),
      about = document.getElementById('about'),
      contact = document.getElementById('contact');

home.addEventListener('click', (e) => {
  page.change(new homeState);

  e.preventDefault();
});

about.addEventListener('click', (e) => {
  page.change(new aboutState);

  e.preventDefault();
});

contact.addEventListener('click', (e) => {
  page.change(new contactState);

  e.preventDefault();
});