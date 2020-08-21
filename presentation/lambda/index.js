import {logMessageToSceen} from './messageCaller'

function LambaExample () {

    this.message = "Hello world being called from lambda."
    this.callAppliedFunction = function () {
       logMessageToSceen(() => this.message);
    }

}


function run () {
    const le = new LambaExample();
    le.callAppliedFunction();
}

run();