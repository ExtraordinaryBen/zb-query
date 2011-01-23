$(document).ready(SpamCheck());
function SpamCheck() {
var url2 = new RegExp(/\/register\/\u003Fc=1/g);
var url1 = url2.test(window.location.href.toString());
if (url1) {
var HChtml = "<tr><td class=\"c_desc \">What is the name of this forum?<br><small>Must be spelled exactly</small></td><td colspan=\"2\"><input type=\"text\" tabindex=\"5\" name=\"HumanTest\" value=\"\" maxlength=\"50\" size=\"32\"></td></tr>";
$("td:contains('Birthday:')").parent().after(HChtml);


$("form").submit(function() {
var HCInput = $('input[name="HumanTest"]').val();
    if (HCInput != main_url.split('zetaboards.com/')[1].replace('/','')) {
        alert('You are an evil spam bot! (Or you miss-spelled the Forum\'s name.) *Gaspeth!* Please try again.... (And spell it right this time!) :3');
        return false;
    } else 
if(!document.getElementsByName('agree')[0].checked) { 
alert('You must agree to the Terms of Use to register an account.'); 
return false; }

});
}
}