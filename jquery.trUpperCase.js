(function($) {
  $.fn.trUpperCase = function() {
    var inlineText = $(this).text();
    inlineText = inlineText.replace(new RegExp('ğ', 'g'),'Ğ');
    inlineText = inlineText.replace(new RegExp('ü', 'g'),'Ü');
    inlineText = inlineText.replace(new RegExp('ş', 'g'),'Ş');
    inlineText = inlineText.replace(new RegExp('i', 'g'),'İ');
    inlineText = inlineText.replace(new RegExp('ö', 'g'),'Ö');
    inlineText = inlineText.replace(new RegExp('ç', 'g'),'Ç');
    inlineText = inlineText.replace(new RegExp('ı', 'g'),'I');
    inlineText = inlineText.toUpperCase();
    $(this).text(inlineText);
  };
})(jQuery);
