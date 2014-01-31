$( document ).ready(function() {

//action menu
$('#btn-action-menu').on('click', function () {
  $('#action-menu').attr('class','fade-in');
});
$('#action-menu').on('click', function () {
  this.className = 'fade-out';
});

//buttons


  $('#btn-buttons').on('click', function () {
    $('#buttons').attr('class','current');
    $('[data-position="current"]').attr('class','left');
  });

  $('#btn-buttons-back').on('click', function () {
    $('#buttons').attr('class','right');
    $('[data-position="current"]').attr('class','current');
  });



//confirm
$('#btn-confirm').on('click', function () {
  $('#confirm').attr('class','fade-in');
});
$('#confirm').on('click', function () {
  this.className = 'fade-out';
});

//edit mode
$('#btn-edit-mode').on('click', function () {
  $('#edit-mode').attr('class','edit');
});
$('#edit-mode').on('click', function () {
  this.className = '';
});

//headers
$('#btn-headers').on('click', function () {
  $('#headers').attr('class','current');
  $('[data-position="current"]').attr('class','left');
});
$('#btn-headers-back').on('click', function () {
  $('#headers').attr('class','right');
  $('[data-position="current"]').attr('class','current');
});

//input areas
$('#btn-input-areas').on('click', function () {
  $('#input-areas').attr('class','current');
  $('[data-position="current"]').attr('class','left');
});
$('#btn-input-areas-back').on('click', function () {
  $('#input-areas').attr('class','right');
  $('[data-position="current"]').attr('class','current');
});

//status
$('#btn-status').on('click', function () {
  utils.status.show('The Alarm is set for 7 hours and 14 minutes from now');    
});

//switches
$('#btn-switches').on('click', function () {
  $('#switches').attr('class','current');
  $('[data-position="current"]').attr('class','left');
});
$('#btn-switches-back').on('click', function () {
  $('#switches').attr('class','right');
  $('[data-position="current"]').attr('class','current');
});

//lists
$('#btn-lists').on('click', function () {
  $('#lists').attr('class','current');
  $('[data-position="current"]').attr('class','left');
});
$('#btn-lists-back').on('click', function () {
  $('#lists').attr('class','right');
  $('[data-position="current"]').attr('class','current');
});

//progress
$('#btn-progress').on('click', function () {
  $('#progress').attr('class','current');
  $('[data-position="current"]').attr('class','left');
});
$('#btn-progress-back').on('click', function () {
  $('#progress').attr('class','right');
  $('[data-position="current"]').attr('class','current');
});

//scrolling
$('#btn-scrolling').on('click', function () {
  $('#scrolling').attr('class','current');
  $('[data-position="current"]').attr('class','left');
});
$('#btn-scrolling-back').on('click', function () {
  $('#scrolling').attr('class','right');
  $('[data-position="current"]').attr('class','current');
});

//seek bars
$('#btn-seek-bars').on('click', function () {
  $('#seek-bars').attr('class','current');
  $('[data-position="current"]').attr('class','left');
  var animend = (/webkit/i).test(navigator.appVersion) ? 'webkitAnimationEnd' : 'animationend';

  document.addEventListener(animend, function animationend() {
    document.removeEventListener(animend, animationend);
    utils.seekbars.init();
  });
});
$('#btn-seek-bars-back').on('click', function () {
  $('#seek-bars').attr('class','right');
  $('[data-position="current"]').attr('class','current');
});

//tabs
$('#btn-tabs').on('click', function () {
  $('#tabs').attr('class','current');
  $('[data-position="current"]').attr('class','left');
});
$('#btn-tabs-back').on('click', function () {
  $('#tabs').attr('class','right');
  $('[data-position="current"]').attr('class','current');
});

//filters
$('#btn-filters').on('click', function () {
  $('#filters').attr('class','current');
  $('[data-position="current"]').attr('class','left');
});
$('#btn-filters-back').on('click', function () {
  $('#filters').attr('class','right');
  $('[data-position="current"]').attr('class','current');
});

//toolbars
$('#btn-toolbars').on('click', function () {
  $('#toolbars').attr('class','current');
  $('[data-position="current"]').attr('class','left');
});
$('#btn-toolbars-back').on('click', function () {
  $('#toolbars').attr('class','right');
  $('[data-position="current"]').attr('class','current');
});

});