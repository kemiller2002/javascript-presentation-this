
function MessageDispatcher () {

    this.message = "this is the dispatched message."
    
    this.getMessage = function (messageAccessor) {

        const message = messageAccessor.call(this);

        console.log(message);
    }

}

export function logMessageToSceen(messageAccessor){

    const accessor = new MessageDispatcher();

    accessor.getMessage(messageAccessor);

}