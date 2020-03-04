import React from 'react';

import './App.css';

class App extends React.Component {
  async componentDidMount() {
    const buttonElement = document.getElementById('sign-in-with-apple-button');
    
      const script = document.createElement("script");

      script.src = "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js";
      script.async = true;

      document.body.appendChild(script);
      buttonElement.addEventListener('click', async(data,data1) => {
        debugger;
     
  //     console.log(res,"sdfjbsfjbdsfkjskf")
      
    });
    console.log("hrllo  ")
    buttonElement.addEventListener('AppleIDSignInOnSuccess', (data) => {
      debugger;
         //handle successful response
         console.log(data,"success")
    });
    //Listen for authorization failures
    buttonElement.addEventListener('AppleIDSignInOnFailure', (error) => {
         //handle error.
         console.log("error ",error)
    })}
 render(){
  return (
    <div className="App">
              <div id="sign-in-with-apple-button" data-color="black" data-border="true" data-type="sign in">signin</div>

           
    </div>
  );}
}

export default App;
