document.getElementById('button').addEventListener("click", loadData);

/*
  HTTP status
  200: "OK"
  403: "Forbidden"
  404: "Not found"

  readyState values
  0: request not initialized
  1: server connection established
  2: request received
  3: processing request
  4: request finished and response is ready
*/
function loadData() {
  // create a XHR Object
  const xhr = new XMLHttpRequest();
  console.log('readyState: ', xhr.readyState);
  
  // open
  xhr.open('GET', 'data.txt', true);
  console.log('readyState: ', xhr.readyState);

  // optional - used for spinners/loaders
  xhr.onprogress = function() {
    console.log('readyState: ', xhr.readyState);    
  }

  xhr.onload = function() {
  console.log('readyState: ', xhr.readyState);
    
    if(this.status === 200) {
      //console.log(this.responseText);
      document.getElementById('output').innerHTML = `<p>${this.responseText}</p>`
    }
  }

  xhr.onerror = function() {
    console.log('Request error.');
  }
  xhr.send();
}
