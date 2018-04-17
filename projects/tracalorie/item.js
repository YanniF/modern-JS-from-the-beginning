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

    getItemById: function(id) {
      let found = null;

      data.items.forEach((item) => {
        if(item.id === id) {
          found = item;
        } 
      });

      return found;
    },

    updateItem: function(name, calories) {
      calories = parseInt(calories);

      let found = null;

      data.items.forEach((item) => {
        if(item.id === data.currentItem.id) {
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });

      return found;
    },

    deleteItem: function(id) {
      const ids = data.items.map(item => {
        return item.id;
      });

      const index = ids.indexOf(id);

      data.items.splice(index, 1);
    },

    clearAllItems: function() {
      data.items = [];
    },

    setCurrentItem: function(item) {
      data.currentItem = item;
    },

    getCurrentItem: function() {
      return data.currentItem;
    },

    getTotalCalories: function() {
      let total = 0;

      data.items.forEach(item => {
        total += item.calories;
      });

      data.totalCalories = total;

      return data.totalCalories;
    },

    logData: function() {
      return data;
    }
  }
})();