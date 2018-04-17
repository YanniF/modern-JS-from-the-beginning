//---- STORAGE CONTROLLER ----//
const StorageCtrl = (function() {
  
  // public methods
  return {
    storeItem: function(item) {
      let items;

      // check if there is any items in local storage
      if(localStorage.getItem('items') === null) {
        items = [];
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
      }
      else {
        items = JSON.parse(localStorage.getItem('items')); // gets what is already in LS
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items)); // reset LS   
      }
    },

    getItemsFromStorage: function() {
      let items;

      if(localStorage.getItem('items') === null) {
        items = [];
      }
      else {
        items = JSON.parse(localStorage.getItem('items'));
      }

      return items;
    },

    updateItemStorage: function(updateItems) {
      let items = JSON.parse(localStorage.getItem('items'));

      items.forEach((item, index) => {
        if(updateItems.id === item.id) {
          items.splice(index, 1, updateItems);
        }
      });

      localStorage.setItem('items', JSON.stringify(items));   
    },

    deleteItemFromStorage: function(id) {
      let items = JSON.parse(localStorage.getItem('items'));

      items.forEach((item, index) => {
        if(id === item.id) {
          items.splice(index, 1);
        }
      });

      localStorage.setItem('items', JSON.stringify(items)); 
    },

    clearItemsFromStorage: function() {
      localStorage.removeItem('items');
    }
  }
})();