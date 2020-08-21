
import {logMessageToSceen} from './messageCaller'


class MessageContainer{
    message;
    constructor(message){
        this.message = message;
    }

    getMessage () { 
        return this.message;
    }
}

function helloWorld () {
    return "hello world";
} 

function printHelloWorld () { 
    logMessageToSceen(helloWorld);
}

function printMessageInContainer() {
    const container = new MessageContainer("I am being held by the container.");

    const boundMessage = container.getMessage.bind(container);
    
    logMessageToSceen(boundMessage);
}

printMessageInContainer();
