function toUpperCase(x) {return x.toUpperCase();}


function attachTee () {

    
    function tee (fn) {
        return fn(this);
    }

    const TEE = Symbol();

    Reflect.defineProperty(Object.prototype, 
        TEE,
        {
            enumerable:false, 
            writable:false,
            configurable: false,
            value: tee 
        }
    );

    return TEE;
}

const TEE = attachTee();

    [TEE] (toUpperCase)
    [TEE] (x => console.log(x));