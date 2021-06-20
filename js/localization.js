// LOCALIZATION FILES
/* */

function change_lang(lang){
    var d = new Date();
    d.setTime(d.getTime() + (24*60*60*365*10));
    var expires = d.toUTCString();
    document.cookie = "lang="+lang+"; expires = "+expires+"";
    location.href="/";
}

/*
if (Cookies.get('lang') == 'en_gl') {
    $(document).ready(function(){$("#lang_js").attr("src", "js/lang_packs/en_gl.js");});
} else if (Cookies.get('lang') == 'en_al') {
    $(document).ready(function(){$("#lang_js").attr("src", "js/lang_packs/en_al.js");});
} else if (Cookies.get('lang') == 'jp') {
    $(document).ready(function(){$("#lang_js").attr("src", "js/lang_packs/jp.js");});
} else if (Cookies.get('lang') == 'ru') {
    $(document).ready(function(){$("#lang_js").attr("src", "js/lang_packs/ru.js");});
} else if (Cookies.get('lang') == 'kr') {
    $(document).ready(function(){$("#lang_js").attr("src", "js/lang_packs/kr.js");});
} else if (Cookies.get('lang') == 'pt') {
    $(document).ready(function(){$("#lang_js").attr("src", "js/lang_packs/pt.js");});
} else {
    alert('NO COOKIE FOUND');
}
*/
$(document).ready(function(){
    if (Cookies.get('lang') == 'en_gl') {
        $("#lang_js").attr("src", "js/lang_packs/en_gl.js");
    } else if (Cookies.get('lang') == 'en_al') {
        $("#lang_js").attr("src", "js/lang_packs/en_al.js");
    } else if (Cookies.get('lang') == 'jp') {
        $("#lang_js").attr("src", "js/lang_packs/jp.js");
    } else if (Cookies.get('lang') == 'ru') {
        $("#lang_js").attr("src", "js/lang_packs/ru.js");
    } else if (Cookies.get('lang') == 'kr') {
        $("#lang_js").attr("src", "js/lang_packs/kr.js");
    } else if (Cookies.get('lang') == 'pt') {
        $("#lang_js").attr("src", "js/lang_packs/pt.js");
    } else {
        alert('NO COOKIE FOUND');
    }
});