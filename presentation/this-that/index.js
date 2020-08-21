import {logMessageToSceen} from './messageCaller'

function ThatExample () {
    var that = this; 
    this.message = "I am using that to enforce scope."

    this.getThatMessage = function () {
        return that.message;
    }

    this.callAppliedFunction = function () {
        logMessageToSceen(this.getThatMessage);
    }
}


function run () {
    const le = new ThatExample();
    le.callAppliedFunction();
}

run();