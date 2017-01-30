/*jslint es6 */
window.addEventListener('keydown', function (e) {
    'use strict';
    const audio = document.querySelector(`audio[data-key="${e.keycode}"]`)
    console.log(audio);
});
