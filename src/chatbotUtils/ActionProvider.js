// ActionProvider starter code
class ActionProvider {
   constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  everyMessageHandler = () => {
       const message = this.createChatBotMessage("go fuck yourself");
       this.setChatbotMessage(message);
  }

  setChatbotMessage = (message) => {
       this.setState( (state) => ({...state, messages: [...state.messages, message] }));
      console.log('HELLO THIS IS ME LOGGING SOME STUFF');
  }

}

export default ActionProvider;
