var url = new URLSearchParams(window.location.search);

$('#categoryAction').on('click', function(){
    url.set('category', 'action');
    window.location.search = url;
})
$('#categoryAdventure').on('click', function(){
    url.set('category', 'adventure');
    window.location.search = url;
})
$('#categoryConduction').on('click', function(){
    url.set('category', 'conduction');
    window.location.search = url;
})
$('#categoryPlatform').on('click', function(){
    url.set('category', 'platform');
    window.location.search = url;
})
$('#categoryShooter').on('click', function(){
    url.set('category', 'shooter');
    window.location.search = url;
})
$('#categorySimulation').on('click', function(){
    url.set('category', 'simulation');
    window.location.search = url;
})