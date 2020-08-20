function MessageDispatcher () {

    this.message = `
            
         *,MMM8&&&.            *
         MMMM88&&&&&    .
        MMMM88&&&&&&&
     *  MMM88&&&&&&&&
        MMM88&&&&&&&&
        'MMM88&&&&&&'
         'MMM8&&&'      *    
        |\___/|     /\___/\
        )     (    )     ~( .              '
       =\     /=   =\~    /=
        )===(       ) ~ (
        /     \     /     \
        |     |     ) ~   (
        /       \   /     ~ \
        \       /   \~     ~/
        jgs_/\_/\__  _/_/\_/\__~__/_/\_/\_/\_/\_/\_
        |  |  |  |( (  |  |  | ))  |  |  |  |  |  |
        |  |  |  | ) ) |  |  |//|  |  |  |  |  |  |
        |  |  |  |(_(  |  |  (( |  |  |  |  |  |  |
        |  |  |  |  |  |  |  |\)|  |  |  |  |  |  |
        |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
            
    `
    
    this.getMessage = function (messageAccessor) {

        const message = messageAccessor.call(this);

        console.log(message);
    }

}


export function logMessageToSceen(messageAccessor){

    const accessor = new MessageDispatcher();

    accessor.getMessage(messageAccessor);

}