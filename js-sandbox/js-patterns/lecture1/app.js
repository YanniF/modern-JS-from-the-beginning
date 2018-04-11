// basic structure
/* 
(function() {
  // declare private variables and functions 

  return {
    // declare public variables and functions
  }
})();
 */

 // standard module pattern
const UICtrl = (function() {
  let text = 'Hello World';
  
  const changeText = function() {
    const element = document.querySelector('h1');
    element.textContent = text;
  }

  return {
    callChangeText: function() {
      changeText();
    }
  }
})();

UICtrl.callChangeText();

// revealing modern pattern
const ItemCtrl = (function() {
  let data = [];

  function add(item) {
    data.push(item);
    console.log('Item added...');
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
  }
})();

ItemCtrl.add({id: 1, name: 'Juju'});
ItemCtrl.add({id: 1, name: 'Jaja'});
console.log(ItemCtrl.get(1));