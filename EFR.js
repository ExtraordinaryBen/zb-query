/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie = function (key, value, options) {

    // key and value given, set cookie...
    if (arguments.length > 1 && (value === null || typeof value !== "object")) {
        options = jQuery.extend({}, options);

        if (value === null) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? String(value) : encodeURIComponent(String(value)),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};

/*Made by Karkuta of ZNR, do not remove. */
var Name = $('div#top_info strong a').val();
var efr = "This will save what you have typed for future posting.";
$("dl#fast-reply dd textarea").after('<button id="FastSave" style="float:left;" title="'+efr+'">Save Text</button>');
$("button#btn_preview").after('<button id="FastSave" style="float:left;margin:10px 0 0 10px;" title="'+efr+'">Save Text</button>');

$('button#FastSave').live('click', function(e) {
e.preventDefault();
$.cookie(Name, $('dl#fast-reply dd textarea').val(), { expires: 365, path: '/', domain: 'zetaboards.com', secure: false});

});
CheckCookie=$.cookie(Name);
if (CheckCookie!=null && CheckCookie!="")
{
var FastEdit = $('dl#fast-reply dd textarea').val();
if (!FastEdit) {
$('dl#fast-reply dd textarea').val(CheckCookie);
}
var FullEdit = $('textarea#c_post-text').val();
if (!FullEdit) {
$('textarea#c_post-text').val(CheckCookie);
}

}