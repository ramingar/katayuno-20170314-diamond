import helloComponent from './diamond.component';

(() => {
    document.addEventListener("DOMContentLoaded", function () {
        const hello = helloComponent('J');
        $('#content').html(hello.render().replace(/\n/g, '<br>').replace(/\s/g, '&nbsp;'));
    });
})();