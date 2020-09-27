function go(dest) {
    for(let part of document.querySelectorAll("section")) {
        if (part.id === dest) {
            part.classList.remove('hidden');
        } else {
            part.classList.add('hidden');
        }
    }
    for(let menu of document.querySelectorAll("nav > a")) {
        if (menu.classList.contains(dest)) {
            menu.classList.add('selected');
        } else {
            menu.classList.remove('selected');
        }
    }
}