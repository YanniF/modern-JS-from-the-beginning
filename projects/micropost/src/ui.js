class UI {
  constructor() {
    this.post = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.postSumbit = document.querySelector('.post-submit');
    this.forState = 'add';
  }

  showPosts(posts) {
    let output = '';

    posts.forEach((post) => {
      output += `
        <div class="card mb-3">
          <div class="card-body">
            <h4 class="card-title">${post.title}</h4>
            <p class="card-text">${post.body}</p>
            <a href="#" class="edit card-link" data-id="${post.id}">
              <i class="fas fa-pencil-alt"></i>
            </a>
            <a href="#" class="delete card-link" data-id="${post.id}">
              <i class="fas fa-times"></i>
            </a>
          </div>
        </div>
      `;
    });

    this.post.innerHTML = output;
  }

  showAlert(message, className) {
    this.clearAlert();

    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.postsContainer');
    const posts = document.querySelector('#posts');

    container.insertBefore(div, posts);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if(currentAlert) {
      currentAlert.remove();
    }
  }

  clearFields() {
    this.titleInput.value = '';
    this.bodyInput.value = '';
    this.titleInput.focus();
  }

  fillForm(data) {
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;

    this.changeFormState('edit');
  }

  clearIdInput() {
    this.idInput.value = '';
  }

  changeFormState(type) {
    if(type === 'edit') {
      this.postSumbit.textContent = 'Update Post';
      this.postSumbit.className = 'post-submit btn btn-warning btn-block';

      if(!document.querySelector('.post-cancel')) {
        const button = document.createElement('button');
        button.className = 'post-cancel btn btn-light bnt-block mt-2';
        button.appendChild(document.createTextNode('Cancel Edit'));

        const cardForm = document.querySelector('.card-form'); // get parent
        const formEnd = document.querySelector('.form-end');// get elemento to inser before
        cardForm.insertBefore(button, formEnd);
      }
    }
    else {
      this.postSumbit.textContent = 'Post it';
      this.postSumbit.className = 'post-submit btn btn-primary btn-block';
      
      if(document.querySelector('.post-cancel')) {
        document.querySelector('.post-cancel').remove();
      }

      // clear ID from hidden field
      this.clearIdInput();
      this.clearFields();
    }
  }
}

export const ui = new UI();