class MessageContainer{
    message;
    constructor(message){
        this.message = message;
    }

    getMessage () { 
        return this.message;
    }
}



function MessageThatINeedSent () {
    this.message = "I AM THE NEW MESSAGE THAT ALL PEOPLE MUST HERE;"
}


function setupToSendMessage (constainer) {
    const messageToSend = new MessageThatINeedSent();
    
    return () => constainer.getMessage.apply(messageToSend);
}

const newGetMessage = setupToSendMessage (new MessageContainer());

newGetMessage() //?
