var url = new URLSearchParams(window.location.search);

const sortViews = document.getElementById('sortViews');
const sortTitle = document.getElementById('sortTitle');
const sortStar = document.getElementById('sortStar');
const sortComments = document.getElementById('sortComments');

const listgame = document.querySelectorAll('.gametable')
$('input[type="checkbox"]').on('change', function () {
    $('input[name="' + this.name + '"]').not(this).prop('checked', false);
    if (this.id === 'cards') {
        url.set('view', 'cards');
        window.location.search = url;
    }
    if (this.id === 'minicards') {
        url.set('view', 'minicards');
        window.location.search = url;
    }
});

$('#sortViews').on('click', function(){
    url.set('filter', 'views');
    window.location.search = url;
})
$('#sortTitle').on('click', function(){
    url.set('filter', 'name');
    window.location.search = url;
})
$('#sortStar').on('click', function(){
    url.set('filter', 'calification');
    window.location.search = url;
})
$('#sortComments').on('click', function(){
    url.set('filter', 'comments');
    window.location.search = url;
})
$('#sortOurGames').on('click', function(){
    url.set('filter', 'ourgames');
    window.location.search = url;
})
$('#sortAnotherPerson').on('click', function(){
    url.set('filter', 'anotherperson');
    window.location.search = url;
})