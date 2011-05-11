/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie=function(a,b,c){if(arguments.length>1&&(b===null||typeof b!=="object")){c=jQuery.extend({},c);if(b===null){c.expires=-1}if(typeof c.expires==='number'){var d=c.expires,t=c.expires=new Date();t.setDate(t.getDate()+d)}return(document.cookie=[encodeURIComponent(a),'=',c.raw?String(b):encodeURIComponent(String(b)),c.expires?'; expires='+c.expires.toUTCString():'',c.path?'; path='+c.path:'',c.domain?'; domain='+c.domain:'',c.secure?'; secure':''].join(''))}c=b||{};var e,decode=c.raw?function(s){return s}:decodeURIComponent;return(e=new RegExp('(?:^|; )'+encodeURIComponent(a)+'=([^;]*)').exec(document.cookie))?decode(e[1]):null};

/**
 * jQuery.jNotify
 * jQuery Notification Engine
 *
 * Copyright (c) 2010 Fabio Franzini (fabiofranzini.com)
 * Licensed under the GPL licenses:
 * http://www.gnu.org/licenses/gpl.html
 *
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(4(i){i.x.U=4(a){1 b=5;1 c={o:p,y:\'V\'};1 a=i.z({},c,a);5.j(\'7-6\');3(a.o)5.j(\'7-6-A\');3(a.y==\'q\'&&a.o==p)5.j(\'7-6-q\');W 5};i.x.X=4(b){1 c=5;3(c.r(\'7-6\')){1 d={B:\'\',C:\'D\',E:Y,F:p,G:Z};1 b=i.z({},d,b);1 e;1 f;10(b.C){H\'D\':{e=\'2-s-I\';f=\'2-8-J\'}t;H\'K\':{e=\'2-s-K\';f=\'2-8-11\'}t;12:{e=\'2-s-I\';f=\'2-8-J\'}t}3(c.r(\'7-6-A\')){5.13().k()}1 g=i(\'<9 l="u-v-6"></9>\');1 h=i(\'<9 l="2-14-15 u-v"></9>\').j(e);3(c.r(\'7-6-q\'))h.L(c);16 h.w(c);h.17(g);3(b.E)i(\'<m l="2-8" 18="19:1a; 1b-1c: .1d;" />\').j(f).w(h);i(\'<m></m>\').1e(b.B).w(h);i(\'<9 l="u-v-M"><m l="2-8 2-8-1f-M"/></9>\').L(h).1g(4(){k(h)});3(N.O.P(/Q (\\d+\\.\\d+);/)){c.1h({1i:1j.1k.1l});c.R(\'S\')}3(!b.F){1m(4(){k(h)},b.G)}}4 k(a){a.T({1n:\'0\'},1o,4(){a.n().T({1p:\'1q\'},1r,4(){a.n().k();3(N.O.P(/Q (\\d+\\.\\d+);/)){a.n().n().R(\'S\')}})})}}})(1s);',62,91,'|var|ui|if|function|this|wrapper|notify|icon|div||||||||||addClass|remove|class|span|parent|oneAtTime|false|prepend|hasClass|state|break|jnotify|item|appendTo|fn|appendType|extend|oneattime|text|type|message|showIcon|permanent|disappearTime|case|highlight|info|error|prependTo|close|navigator|userAgent|match|MSIE|removeClass|IEsucks|animate|jnotifyInizialize|append|return|jnotifyAddMessage|true|3000|switch|alert|default|children|corner|all|else|wrap|style|float|left|margin|right|3em|html|circle|click|css|top|document|documentElement|scrollTop|setTimeout|opacity|600|height|0px|300|jQuery'.split('|'),0,{}))

$(document).ready(function() {
$('head').append('<link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/ui-lightness/jquery-ui.css" rel="stylesheet" type="text/css" />');
$('body').append('<div id="Notification"></div>');
$('#Notification')
	.jnotifyInizialize({
	oneAtTime: false,
	appendType: 'append'
})
.css({ 'position': 'fixed',
	'bottom': '0px',
	'width': '100%',
	'text-align': 'center',
	'z-index': '9999'
});
});

/*Made by Karkuta of ZNR, do not remove. */
var CookieName = $('#top_info strong a').html();
var efr = "This will save what you have typed for future posting.";
$('dl#fast-reply dd button[name="sd"]').after('<button id="FastSave" style="margin-left:4px;" title="'+efr+'">Save Text</button>');
$("button#btn_preview").after('<button id="FastSave" style="float:left;margin:10px 0 0 10px;" title="'+efr+'">Save Text</button>');

$('button#FastSave').live('click', function(e) {
e.preventDefault();
$.cookie(CookieName, $('dl#fast-reply dd textarea').val(), { expires: 365, path: '/', domain: 'zetaboards.com', secure: false});
$('#Notification').jnotifyAddMessage({text: 'Text has been saved!.',permanent: false});
});
CheckCookie=$.cookie(CookieName);
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