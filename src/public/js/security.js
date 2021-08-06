$(window).on('keydown', function (event) {
    if (event.keyCode == 123) {
        alert('Nuestro sitio esta protegido.');
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        alert('Nuestro sitio esta protegido.')
        return false; //Prevent from ctrl+sift+i
    } else if (event.ctrlKey && event.keyCode == 73) {
        alert('Nuestro sitio esta protegido.')
        return false; //Prevent from ctrl+shift+i
    }
});
$(document).on("contextmenu", function (e) {
    alert('Nuestro sitio esta protegido.')
    e.preventDefault();
});