const listgame = document.querySelectorAll('.gametable')
$('input[type="checkbox"]').on('change', function() {
    $('input[name="' + this.name + '"]').not(this).prop('checked', false);
    if(this.id === 'cards'){
        console.log('cards')
    }
    if(this.id === 'minicards'){
        console.log('minicards')
    }
});