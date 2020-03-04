import React from 'react';

import './App.css';

class App extends React.Component {
  componentDidMount() {
    
    console.log("hrllo  ")
    document.addEventListener('AppleIDSignInOnSuccess', (data) => {
      debugger;
         //handle successful response
         console.log(data,"success")
    });
    //Listen for authorization failures
    document.addEventListener('AppleIDSignInOnFailure', (error) => {
         //handle error.
         console.log("error ",error)
    })}
 render(){
  return (
    <div className="App">
              <div id="appleid-signin" data-color="black" data-border="true" data-type="sign in">signin</div>

     
    </div>
  );}
}

export default App;
