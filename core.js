jQuery('[data-ajax]').click((e) => {
    e.preventDefault();
    $elem = jQuery(this);
    if(typeof window[$elem.data('ajax')] != "undefined"){
        var callback = window[$elem.data('ajax')]();
    }
    jQuery.ajax({
        url: $elem.attr('href')
    }).done(() => {
        if(typeof callback == "function"){
            callback();
        }
    })
});