window.addEventListener('load', function(){
    //constants
    const toogleButton = getFirstNodeClass('toogle-phone');
    const blockScreen = getFirstNodeClass('block-screen');
    const menu = getFirstNodeClass('menu-screen');
    //buttons menu
    const buttonPhone = getFirstNodeClass('button-phone');
    const buttonMsg = getFirstNodeClass('button-messages');
    const buttonCar = getFirstNodeClass('button-car');
    const buttonActions = getFirstNodeClass('button-actions');
    const goBack = getFirstNodeClass('go-back');

    //Toogle phone button
    toogleButton.addEventListener('click', function(){
        const phone = getFirstNodeClass('phone');

        if(hasClass(phone, 'open')){
            removeClass(phone, 'open');
            addClass(phone, 'closed');

            if(hasClass(blockScreen, 'unlock')){
                removeClass(blockScreen, 'unlock');
                addClass(blockScreen, 'lock');
            } 

            if(hasClass(menu, 'open')){
                removeClass(menu, 'open');
                addClass(menu, 'closed');
            } 

            instertReplaceInDocument(toogleButton, 'Open phone');
        }else{
            removeClass(phone, 'closed');
            addClass(phone, 'open');

            instertReplaceInDocument(toogleButton, 'Close phone');
        }
    });

    //Unlock phone
    blockScreen.addEventListener('click', function(){
        if(hasClass(blockScreen, 'lock')){
            removeClass(blockScreen, 'lock');
            addClass(blockScreen, 'unlock');
        } 
    });

    //Menu-open
    buttonPhone.addEventListener('click', toogleMenu);
    buttonMsg.addEventListener('click', toogleMenu);
    buttonCar.addEventListener('click', toogleMenu);
    buttonActions.addEventListener('click', toogleMenu);
    goBack.addEventListener('click', toogleMenu);

});