
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

function callThingsToScreen () { 
 
    logMessageToSceen(helloWorld);

    const container = new MessageContainer();

    logMessageToSceen(container.getMessage);
}



callThingsToScreen();



