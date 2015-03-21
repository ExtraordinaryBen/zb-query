//Q-Edit v1.1 Staff Only Edition - By Karkuta. Do not remove this.
var getbuttons ='<div id="editbuttons"><button type="button" onclick="Post()">Save Changes</button><button type="button" onclick="restore()">Cancel</button><input name="sig" type="checkbox"/> Include signature with this post.</div>';
var getposturl, d, postid, ipost, msg, qimg;
if (!qimg){
qimg ="https://raw.githubusercontent.com/ExtraordinaryBen/zb-query/master/qedit/q_edit.png";
}
if (($("#menu_rcp").length)||($("#menu_acp").length)) {
$("body").append('<div id="storage" style="display:none;"></div>');
$("img[alt~=Edit]").each(function() {
$(this).parents(".left").next().prepend("<img class='qedit' src='"+qimg+"' alt='QuickEdit' style='cursor:pointer;'/> ")
});
}
$(".qedit").click(function () {
if(document.getElementById('c_post-text')){
alert('You are already editing a post!');
return false;
}
ipost =  $(this).parents("tr").prev().prev().children(".c_post");
$("div#storage").html($(ipost).html());
getposturl = $(this).parent().prev().children("a:first-child").attr("href");
$(ipost).html('<textarea id="c_post-text" style="background:#D9D9D9;color:#636363;" disabled="disabled" tabindex="3" name="post" rows="20" cols="50">Please wait as the post loads...</textarea>');
$("textarea#c_post-text").after(getbuttons);
$.get(getposturl, function(data){
d = data;
var ckshed = $("input[name=show_edit]",d).val();
if (ckshed){
$("div#editbuttons").append('<input name="show_edit" checked="checked" type="checkbox"/> Show that you edited this post.');
}
$("input[name=sig]").attr("checked", $("input[name=sig]",d).attr("checked"));
$("textarea#c_post-text").val($("textarea#c_post-text",data).val()).attr("disabled",false).css('background', '').css('color', '');
window.onbeforeunload = function () {
return "You currently have a QuickEdit box open. If you continue off the page, your browser will not save your edit."
};
});

});

function Clean(){
	$("div#storage").html('');
	d = null;
	msg = null;
	window.onbeforeunload = null;
}

function check(e){
	if (e){return "1"} else {return "0"}
}

function restore() {
	$('textarea#c_post-text').parent().html($("div#storage").html());
Clean();
}

function Post() {
	postid = $("input[name=p]",d).val();
	var dosig = $("input[name=sig]").attr("checked");
	var showedit = $("input[name=show_edit]").attr("checked");
	var msg = $('textarea#c_post-text').val();
	if ( msg == "") {
		alert('You must enter a message to post!');
		return false;
	} else {
	$("textarea#c_post-text").attr("disabled","disabled").css('background', '#D9D9D9').css('color', '#636363').val("Saving, please wait...");
	$.post(main_url + "post/",{"mode":$("input[name=mode]",d).val(),"type":$("input[name=type]",d).val(),"f":$("input[name=f]",d).val(),"t":$("input[name=t]",d).val(),"xc":$("input[name=xc]",d).val(),"qhash":$("input[name=qhash]",d).val(),"sd":$("input[name=sd]",d).val(),"p":$("input[name=p]",d).val(),"ast":$("input[name=ast]",d).val(),"pg":$("input[name=pg]",d).val(),"x":$("input[name=x]",d).val(),"sig":check(dosig),"emo":"1","show_edit":check(showedit),"post":msg,"title":$("input[name=title]",d).val(),"description":$("input[name=description]",d).val(),"tags":$("input[name=tags]",d).val()},function(e) {
	var error = $("table#error_box thead tr th",e).html();
	if(error){
		alert($("table#error_box tr:first-child td",e).html());
	$("textarea#c_post-text").val(msg).attr("disabled",false).css('background', '').after(getbuttons);
	return false;
	}
	var checksig = $('textarea#c_post-text').parents("tr").next().children("td").hasClass("c_nosig");
	if((!dosig)||(dosig && checksig)){
		$('textarea#c_post-text').parents("tr").next().html($('tr#post-'+ postid,e).next().next().html());
	}
	$('textarea#c_post-text').parent().html($('tr#post-'+ postid,e).next().children('.c_post').html());
	Clean();
	});

	}
}
