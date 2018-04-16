//---- STORAGE CONTROLLER ----//


//---- ITEM CONTROLLER ----//
const ItemCtrl = (function() {
  // item constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // data structure / state
  const data = {
    items: [],
    currentItem: null,
    totalCalories: 0
  }
  
  // public methods
  return {
    getItems: function() {
      return data.items;
    },
    addItem: function(name, calories) {
      let id;

      // create ID
      if(data.items.length > 0) {
        id = data.items[data.items.length - 1].id + 1;
      }
      else {
        id = 0;
      }
      // calories to number
      calories = parseInt(calories);
      // create new item
      let newItem = new Item(id, name, calories);
      // add to items array
      data.items.push(newItem);

      return newItem;
    },
    logData: function() {
      return data;
    }
  }
})();


//---- UI CONTROLLER ----//
const UICtrl = (function() {
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories'
  }
  // public methods
  return {
    populateItemList: function(items) {
      let html = '';

      items.forEach(item => {
        html += `
          <li id="item-${item.id}" class="collection-item">
            <strong>${item.name}: </strong><em>${item.calories} calories</em>
            <a href="#" class="secondary-content"><i class="fas fa-pencil-alt edit-item"></i></a>
          </li>
        `;
      });
      // insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function() {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    addListItem: function(item) {
      document.querySelector(UISelectors.itemList).style.display = 'block'; // show list
      const li = document.createElement('li');
      li.className = 'collection-item';
      li.id = `item-${item.id}`;
      li.innerHTML = `<strong>${item.name}: </strong><em>${item.calories} calories</em>
                      <a href="#" class="secondary-content"><i class="fas fa-pencil-alt edit-item"></i></a>`;
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
    },
    clearInput: function() {
      document.querySelector(UISelectors.itemNameInput).value = "";
      document.querySelector(UISelectors.itemNameInput).focus();
      document.querySelector(UISelectors.itemCaloriesInput).value = "";
    },
    hideList: function() {
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },
    getSelectors: function() {
      return UISelectors;
    }
  }
})();


//--- APP CONTROLLER ---//
const App = (function(ItemCtrl, UICtrl) {
  // load event listeners
  const loadEventListeners = function() {
    const UISelectors = UICtrl.getSelectors();

    // add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
  }

  // add item submit
  const itemAddSubmit = function(e) {
    // get form input from UI Controller
    const input = UICtrl.getItemInput();
    
    if(input.name !== '' && input.calories !== '') {
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      // add item to UI list
      UICtrl.addListItem(newItem);

      UICtrl.clearInput();
    }

    e.preventDefault();
  }

  // public methods
  return {
    init: function() {
      // fetch items from data structure
      const items = ItemCtrl.getItems();
      
      // check if any items
      if(items.length === 0) {
        UICtrl.hideList();
      }
      else {
        UICtrl.populateItemList(items);
      }

      // load event listeners
      loadEventListeners();
    }
  }  
})(ItemCtrl, UICtrl);


// initialize app
App.init();