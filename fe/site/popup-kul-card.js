// $.cookie('hide-after-load', 'yes', {expires: 1});
// if ($.cookie('hide-after-load') == 'yes') {
//     jQuery(".popup-kulcard-bg").show();
//     jQuery('.popup-kulcard').show();
// }

if ($.cookie('hide-after-click') == 'yes') {
    jQuery(".popup-kulcard-bg").hide();
    jQuery('.popup-kulcard').hide();
}
jQuery(document).on('click', '.popup-kulcard-close', function (event) {
    event.preventDefault();
    jQuery(".popup-kulcard-bg").hide();
    jQuery('.popup-kulcard').hide();
    $.cookie('hide-after-click', 'yes', {expires: 1});
});
