import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';

import config from "./chatbotUtils/config";
import MessageParser from "./chatbotUtils/MessageParser";
import ActionProvider from "./chatbotUtils/ActionProvider";


function App() {

const [apiResponse, setApiResponse] = useState('');

  const callAPI = () => {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => setApiResponse(res));
  }

  useEffect(() => callAPI(), []);

  // style={{maxHeight: '200px', maxWidth: '200px'}}
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
  </div>
  );
}

export default App;
