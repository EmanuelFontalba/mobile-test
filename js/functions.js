function getFirstNodeClass(className) {
    return document.getElementsByClassName(className)[0];
}

function instertInDocument(node, content){
    node.innerHTML += content;
}

function instertReplaceInDocument(node, content){
    node.innerHTML = content;
}

function addClass(node, className) {
    if (!node.classList.contains(className)) {   
       node.classList.add(className);
    }
}

function removeClass(node, className) {
    if (node.classList.contains(className)) {   
       node.classList.remove(className);
    }
}

function hasClass(node, className) {
    if (node.classList.contains(className)) {   
        return true;
    }
    return false;
}

function toogleMenu(){
    const menu = getFirstNodeClass('menu-screen');

    if(hasClass(menu, 'open')){
        removeClass(menu, 'open');
        addClass(menu, 'closed');

    }else{
        removeClass(menu, 'closed');
        addClass(menu, 'open');

    }
}