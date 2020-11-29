let toggleColor = '<div class="toggleDiv"></div>';

function addDiv() {
    $('#container').append(toggleColor);
}
for (i = 0; i < 16; i++){
    addDiv();
}
$('.toggleDiv').on('click', function(){
    $(this).toggleClass('toggleDiv');
});
