var openModal = function() {
    $('.modal').removeClass('hidden');
};

var closeModal = function() {
    $('.modal').addClass('hidden');
};

$("#schedule").on('click', function () {
    openModal();
});

$(".close").on('click', function () {
  closeModal();
});

$('#scheduleName').on('click', function() {
    var name = $('.name-input').val();
    $('.full-name').val(name);
    openModal();
});
