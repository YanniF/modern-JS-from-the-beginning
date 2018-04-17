//--- APP CONTROLLER ---//
const App = (function(StorageCtrl, ItemCtrl, UICtrl) {
  // load event listeners
  const loadEventListeners = function() {
    const UISelectors = UICtrl.getSelectors();

    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

    // disable submit on enter
    document.addEventListener('keypress', function(e) {
      if(e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
      }
    });

    document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);
    document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);
    document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);
    document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);
    document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);
  }

  // add item submit
  const itemAddSubmit = function(e) {
    // get form input from UI Controller
    const input = UICtrl.getItemInput();
    
    if(input.name !== '' && input.calories !== '') {
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      // add item to UI list
      UICtrl.addListItem(newItem);

      // get total calories
      const totalCalories = ItemCtrl.getTotalCalories();

      UICtrl.showTotalCalories(totalCalories);

      // store in localStorage
      StorageCtrl.storeItem(newItem);

      UICtrl.clearInput();
    }

    e.preventDefault();
  }

  const itemEditClick = function(e) {
    if(e.target.classList.contains('edit-item')) {
      const listId = e.target.parentNode.parentNode.id;

      // break into an array
      const listIdArr = listId.split('-');
      const id = parseInt(listIdArr[1]);
      const itemToEdit = ItemCtrl.getItemById(id);
      
      ItemCtrl.setCurrentItem(itemToEdit);

      // add item to form
      UICtrl.addItemToForm();
    }
    
    e.preventDefault();
  }

  const itemUpdateSubmit = function(e) {

    const input = UICtrl.getItemInput();
    const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

    UICtrl.updateListItem(updatedItem);

    const totalCalories = ItemCtrl.getTotalCalories();
    UICtrl.showTotalCalories(totalCalories);

    StorageCtrl.updateItemStorage(updatedItem);

    UICtrl.clearEditState();

    e.preventDefault();
  }

  const itemDeleteSubmit = function(e) {
    const currentItem = ItemCtrl.getCurrentItem();

    ItemCtrl.deleteItem(currentItem.id);
    UICtrl.deleteListItem(currentItem.id);

    UICtrl.showTotalCalories(ItemCtrl.getTotalCalories());

    StorageCtrl.deleteItemFromStorage(currentItem.id);

    UICtrl.clearEditState();   

    e.preventDefault();
  }

  const clearAllItemsClick = function() {
    // delete all items from data structure
    ItemCtrl.clearAllItems();
    
    UICtrl.showTotalCalories(ItemCtrl.getTotalCalories());
    UICtrl.removeItems();
    
    StorageCtrl.clearItemsFromStorage();

    // hide the ul
    UICtrl.hideList();
  }

  // public methods
  return {
    init: function() {
      UICtrl.clearEditState();

      // fetch items from data structure
      const items = ItemCtrl.getItems();
      
      // check if any items
      if(items.length === 0) {
        UICtrl.hideList();
      }
      else {
        UICtrl.populateItemList(items);
      }

      const totalCalories = ItemCtrl.getTotalCalories();
      UICtrl.showTotalCalories(totalCalories);

      // load event listeners
      loadEventListeners();
    }
  }  
})(StorageCtrl, ItemCtrl, UICtrl);


// initialize app
App.init();