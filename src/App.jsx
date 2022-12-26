import React, { useState, useEffect } from 'react';
import './App.css';
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';

import config from "./chatbotUtils/config";
import MessageParser from "./chatbotUtils/MessageParser";
import ActionProvider from "./chatbotUtils/ActionProvider";


function App() {

const [apiResponse, setApiResponse] = useState('');
  const [dogImage, setDogImage] = useState();

  const callAPI = () => {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => setApiResponse(res));
  }

  useEffect(() => { fetch('https://random.dog/woof.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setDogImage(data.url);
        callAPI();
      });
    }, []);




  return (
    <div className='App' style={{display: 'inlineBlock'}}>
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      </div>
      <div>
        <p>{apiResponse}</p>
      </div>
      <div>
        <img styles={{maxHeight: '50vh', maxWidth: '50vw',}} src={dogImage} alt={'random dog'}/>
      </div>
  </div>
  );
}

export default App;
