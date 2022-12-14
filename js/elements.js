/*
    Freeddev - Custom elements
    Version 1.6
    Copyright (c) 2022 FreedTapstry21
*/

/* Custom element class */
class FreeddevElements extends HTMLElement {
    connectedCallback() {
        this.innerHTML = "<div><br><br></div>";
        this.style.position = "static";
    }
}

/* Defines custom element */
customElements.define('ln-br', FreeddevElements);