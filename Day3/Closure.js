function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc(); 
  console.log(myFunc) // It will be a function//
  myFunc(); // Calling of tha function//
  