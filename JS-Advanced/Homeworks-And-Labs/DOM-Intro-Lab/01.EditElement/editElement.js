function editElement(el, match, replacer) {
    let reg = new RegExp(match, "g");
    el.innerHTML = el.innerHTML.replace(reg, replacer);
}