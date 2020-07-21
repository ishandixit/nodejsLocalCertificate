import React from 'react';
import Mailto from 'reactv16-mailto';
import launchMailApp from "react-native-mail-launcher";

import './App.css';

class App extends React.Component {
  // async componentDidMount() {
  //   const buttonElement = document.getElementById('sign-in-with-apple-button');
    
      
      
  //     buttonElement.addEventListener('click', async(data,data1) => {
  //       // debugger;
  //       const script = document.createElement("script");
  //     script.type = 'text/javascript';

  //     script.src = "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js";
  //     script.async = true;

  //     document.body.appendChild(script);
  //     script.onload=()=>{
  //       console.log(window)
  //       window.AppleID.auth.init({
  //           clientId : 'com.sapientnitro.in.mcd.gma.apple.signin',
  //           scope : "email name",
  //           redirectURI : "https://www.publicissapient.com",
  //           responseMode:"form_post",
  //           responseType:"code id_token",
  //           state : 'DE',
  //           usePopup : true
  //       })
  //       window.AppleID.auth.signIn().then((resData)=>{
  //         debugger;
  //         console.log(resData)
  //       }).catch((error)=>{
  //         debugger;
  //         console.log(error,"inside signin")
  //       })}

  //       // window.AppleID.auth.renderButton().then((resData)=>{
  //       //   debugger;
  //       //   console.log(resData)
  //       // }).catch((error)=>{
  //       //   console.log(error,"inside signin")
  //       // })
  // //     console.log(res,"sdfjbsfjbdsfkjskf")
      
  //   });
  //   console.log("hrllo  ")
  //   buttonElement.addEventListener('AppleIDSignInOnSuccess', (data) => {
  //     debugger;
  //        //handle successful response
  //        console.log(data,"success")
  //   });
  //   //Listen for authorization failures
  //   buttonElement.addEventListener('AppleIDSignInOnFailure', (error) => {
  //        //handle error.
  //        debugger;
  //        console.log("error ",error)
  //   })}
  hl=()=>{
    // window.location.href="mailto:ishan18@yopmail.com"
    launchMailApp();
  }
 render(){
  return (
    <div className="App">
              {/* <button id="sign-in-with-apple-button" >signin</button> */}
              <button  onClick={this.hl}>j</button>
              <Mailto email="ishan17@yopmail.com" obfuscate={true} >
        Email me!
    </Mailto >
           
    </div>
  );}
}

export default App;
