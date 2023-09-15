// v 3.3 17.08.2023

if (typeof(af_media_source) != 'undefined') {var sl_name = af_media_source};
var dlhref = decodeURIComponent(document.location.href);
var dataLayer = [], dataLayerSL = [], dataLayerSLR2 = [];


var date = new Date; date.setDate(date.getDate() + 30);
var cookie_path = ';domain=.' + location.hostname.split('.').reverse()[1] + '.' + location.hostname.split('.').reverse()[0] + '; path=/; expires=' + date.toUTCString();
var dnow = Date.now().toString();   

function createCookie(name, value) {document.cookie = name + '=' + value + cookie_path;}
function getCookie(name) {var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)')); if (match) { return match[2] } else { return '' };};



// ROUND ONE

if (document.location.search.search('round__two_') != 1) {

    // options
    if (typeof(web_link_and_option) == 'undefined') {var web_link_and_option = ''};
    if (web_link_and_option != ''){
    if (getCookie('_sl_options') == '') {

    function randomNumber(min, max) {
     min = Math.ceil(min);
     max = Math.floor(max);
       return Math.floor(Math.random() * (max - min + 1)) + min;
        }

var option = randomNumber(1, 3);
createCookie('_sl_options', option)} else { var option = getCookie('_sl_options')}
} 
else { var option = 'none'}


    // global vars and funcs

    var custom_uid = dnow + Math.floor(Math.random() * (600000000 - 100000000 + 1) + 100000000).toString();
    // utm in web_link_desk priority
        if (typeof(web_link_desk) != 'undefined' && web_link_desk.search('utm_source=')>0){
            var url_params = (web_link_desk.split('?').length > 1 ? web_link_desk.split('?')[1].split('&') : '') || []
        } else {var url_params = (dlhref.split('?').length > 1 ? dlhref.split('?')[1].split('&') : '') || []};
        var utm_params_arr = url_params.filter(v => v.toLowerCase().search('utm_') !== -1) || [];
    
    function check_platform() { if (/android/gi.test(navigator.userAgent)) { return 'android'; } else if (/iphone|ipod/gi.test(navigator.userAgent)) { return 'iPhone'; } else {return 'unknown'; }};
    var platform = check_platform();
    

    // vars from old template
    if (typeof(web_link) != 'undefined') {web_link_and = web_link, web_link_ios = web_link, web_link_desk = web_link};
    //, store_link_and = web_link, store_link_ios = web_link; // need upd
    
    if (typeof(android_app) != 'undefined') {var android_app = ['ru.sberbankmobile']};
    if (typeof(ios_apps_dp) == 'undefined') {var ios_apps_dp = ['','']};
    if (typeof(custom_params) == 'undefined') {var custom_params = false};
    if (typeof(ext) == 'undefined') {var ext = true};

    // standard values
    if (typeof(web_link_desk) != 'undefined' && web_link_desk == '') {web_link_desk = 'http://www.sberbank.ru/ru/person/dist_services/inner_sbol'};
    if (typeof(web_link_and) != 'undefined' && web_link_and == '') {web_link_and = web_link_desk};
    if (typeof(web_link_ios) != 'undefined' && web_link_ios == '') {web_link_ios = web_link_desk};
    // if (typeof(store_link_and) != 'undefined' && store_link_and == '') {store_link_and = 'https://sberbank.com/sms/obnovy'};
    // if (typeof(store_link_ios) != 'undefined' && store_link_ios == '') {store_link_ios = 'https://online.sberbank.ru/CSAFront/index.do'};
    if(ios_dp.search('whatsapp://') == -1){
    if (typeof(ios_dp) != 'undefined' && ios_dp.search('^whatsappbusiness:|^whatsapp:') == 0 && ios_apps_dp[0] == '') {var ios_apps_dp = ['whatsapp://'+ios_dp.split('://')[1], 'whatsappbusiness://'+ios_dp.split('://')[1]]}; } 
    else {
    if (typeof(ios_dp) != 'undefined' && ios_dp.search('^whatsappbusiness:|^whatsapp:') == 0 && ios_apps_dp[0] == '') {var ios_apps_dp = ['whatsapp://'+ios_dp.split('://')[1], '']};
    }
    // check for navigation
    if (dlhref.search('need_web=true')>0) {var need_web = true};
    if (dlhref.search('need_web=false')>0) {var need_web = false};
    if (dlhref.search('external_source=true')>0) {var ext = true};
    if (dlhref.search('external_source=false')>0) {var ext = false};

    // hostname URL
    var host_href = new URL(location).hostname.match('[[a-z0-9-_]+.[a-z]+$')[0];
    var utm_name = ['utm_source=', 'utm_medium=', 'utm_campaign=', 'utm_content=', 'utm_term='];

    // analytics
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://s3-gtm.s3pd12.sbercloud.ru/sms/tag.js", "ym");

    //counters init    
    ym(31643078, "init", {triggerEvent: true});
    ym(89867636, "init", {triggerEvent: true});


    // ROUTING


    function routing (type) {
    // cookies
    var cid = [getCookie('_ym_uid'), getCookie('_sv'), getCookie('___dmpkit___'), getCookie('top100_id')]; // getCookie('adriver_uid')
    //if (cid[0] === '') {createCookie('_ym_uid',custom_uid); cid[0]=custom_uid};
    if (cid[1] === '') {createCookie('_sv',custom_uid); cid[1]=custom_uid};
    if (cid[2] === '') {createCookie('___dmpkit___',custom_uid); cid[2]=custom_uid};
    if (cid[3] === '') {createCookie('top100_id',custom_uid); cid[3]=custom_uid};
    //if (cid[0] === '') {createCookie('adriver_uid',custom_uid); cid[0]=custom_uid}; // need add

    // cookeis for organic
    if ((typeof(document.referrer) != 'undefined') && (document.referrer.search('google')>=0 && document.referrer.search('google')<=15)) {var OrgEngn = 'google'};
    if ((typeof(document.referrer) != 'undefined') && (document.referrer.search('yandex')>=0 && document.referrer.search('yandex')<=15)) {var OrgEngn = 'yandex'};
    if (dlhref.search('utm_source') < 0 && (OrgEngn)) {
        createCookie('utm_source', OrgEngn); createCookie('utm_medium','organic'); createCookie('utm_campaign',''); createCookie('utm_content','');
    } else {
        utm_params_arr.forEach(v =>
        (v.search('utm_source') != -1 ? createCookie('utm_source',v.split('=')[1]) : '') || (v.search('utm_medium') != -1 ? createCookie('utm_medium',v.split('=')[1]) : '') || (v.search('utm_campaign') != -1 ? createCookie('utm_campaign',v.split('=')[1]) : '') || (v.search('utm_content') != -1 ? createCookie('utm_content',v.split('=')[1]) : '') || (v.search('utm_term') != -1 ? createCookie('utm_term', v.split('=')[1]) : ''))
    };
    var utm_cookie_arr = [getCookie('utm_source'), getCookie('utm_medium'), getCookie('utm_campaign'), getCookie('utm_content'), getCookie('utm_term')];


 // GET_WEB 

    function get_final_web(dp) {
        var anchor = (dp.search('#') > 0) ? '#' + dp.split('#')[1] : '';
        // var anchor = '';
        var dp = dp.replace(new RegExp("\\?#/", "gm"), "?/").replace(new RegExp("/index.do#", "gm"), "index.do").split('#')[0].replace(new RegExp("&$|\\?$", "gm"), "");
    
        var location_params = [], location_utm = [], location_other = [], weblink_params = [], weblink_utm = [];
        
        if (location.href.search(/\?/) > 0) {
        var location_params = location.href.split('?')[1].split('&');
        var location_utm = location_params.map(v => v.search('^utm_') !== -1 ? v : '').filter(v => v);
        var location_other = location_params.map(v => v.search('^utm_|need_web|external_source') == -1 ? v : '').filter(v => v);
        if (custom_params) {var location_other = location_other.map(v => (v.split('=')[0] == params_URL[0]) ? v = params_WEB[0] + '=' + v.split('=')[1] : v)}
        }
        if (dp.search(/\?/) > 0) {
        var weblink_params = dp.split('?')[1].split(new RegExp('\\?|&'));
        var weblink_utm = weblink_params.map(v => v.search('^utm_') !== -1 ? v : '').filter(v => v);
        }
        if((dp.search('online.sberbank.ru') > 0) && (dp.search('srvUrl=') > 0)) {
        // var srv_params = decodeURIComponent(dp.replace('srvUrl=', '')).split(new RegExp('\\?|&')).splice(1);
        var srv_params2 = decodeURIComponent(dp).split('srvUrl=')[1].split(new RegExp('\\?|&'))
        var sbol_other_params = decodeURIComponent(dp).split('srvUrl=')[0].split(new RegExp('\\?|&')).splice(1)
        // var srv_promo = dp.search('promo') > 0 ? 'promo=' + decodeURIComponent(dp).split('promo=')[1].split(new RegExp('\\?|&'))[0] : ''
        var srv_other = srv_params2.map(v => v.search('^utm_|need_web|external_source') == -1 ? v : '').filter(v => v);
        var srv_p = srv_other.concat(location_other);
        if (sbol_other_params == 0){
        var srv = (srv_p.length > 1) ? 'https://online.sberbank.ru/CSAFront/service.do?srvUrl=' + encodeURIComponent(srv_p[0] + '?' + srv_p.splice(1).join('&')) : 'https://online.sberbank.ru/CSAFront/service.do?srvUrl=' + encodeURIComponent(srv_p.join(''));
        } else {
        var srv = (srv_p.length > 1) ? 'https://online.sberbank.ru/CSAFront/service.do?' + sbol_other_params.join('&') + 'srvUrl=' + encodeURIComponent(srv_p[0] + '?' + srv_p.splice(1).join('&')) : 'https://online.sberbank.ru/CSAFront/service.do?' + sbol_other_params.join('&') + 'srvUrl=' + encodeURIComponent(srv_p.join(''));
        }
        if (weblink_utm.length > 0) {
        
        var web_final = (srv.search(/\?/) > 0) ? srv + '&' + weblink_utm.join('&') + '&cid='+cid[0] : srv + '&cid='+cid[0];
            
        // check IF below -- to use utm_cookie_arr
        } else if (location_utm.length > 0) {

        var web_final = (srv.search(/\?/) > 0) ? srv + '&' + (location_utm.map((v) => v).filter(v => v)).join('&') + '&cid='+cid[0] : srv + '&cid='+cid[0];

        } else if(utm_cookie_arr.length > 0){
        var web_final = (srv.search(/\?/) > 0) ? srv + '&' + (utm_cookie_arr.map((v,i) => (v !== '') ? v = utm_name[i] + v : v).filter(v => v)).join('&') + '&cid='+cid[0] : srv + '&cid='+cid[0];
        }
        
        else {
                var web_final = srv + '&cid='+cid[0];
            }
        } else {
            if (weblink_utm.length > 0) {
                if (location_other.length > 0){

                    var web_final = (dp.search(/\?/) > 0) ? dp + '&' + location_other.join('&') + '&cid='+cid[0] : dp + '?' + location_other.join('&') + '&cid='+cid[0] + anchor;
                    
                } else {
                    var web_final = dp + '&cid='+cid[0] + anchor;
                }
            } else if (location_utm.length > 0) {
                var web_temp = location_other.concat(location_utm.map((v) => v).filter(v => v)).join('&');
               
                var web_final = (dp.search(/\?/) > 0) ? dp + '&' + web_temp + '&cid='+cid[0] + anchor : web_temp != '' ? dp + '?' + web_temp + '&cid='+cid[0] + anchor : dp + '?cid='+cid[0] + anchor;
            }
            else{
                var web_temp = location_other.concat(utm_cookie_arr.map((v,i) => (v !== '') ? v = utm_name[i] + v : v ).filter(v => v)).join('&');
               
                var web_final = (dp.search(/\?/) > 0) ? dp + '&' + web_temp + '&cid='+cid[0] + anchor : web_temp != '' ? dp + '?' + web_temp + '&cid='+cid[0] + anchor : dp + '?cid='+cid[0] + anchor;
            }
        }
    return web_final
    }


    // GET_APP

    function get_final_app(dp) {
        var app_data = [];
    // need to off external_source
        if (ext == true) {
        // need to work with CAPS !!!
            var 
            uca0 = utm_cookie_arr[0].replace(/[^a-zA-Z0-9_=-]/g, ''), 
            uca1 = utm_cookie_arr[1].replace(/[^a-zA-Z0-9_=-]/g, ''), 
            uca2 = utm_cookie_arr[2].replace(/[^a-zA-Z0-9_=-]/g, ''), 
            uca3 = utm_cookie_arr[3].replace(/[^a-zA-Z0-9_=-]/g, ''), 
            uca4 = utm_cookie_arr[4].replace(/[^a-zA-Z0-9_=-]/g, '')
    

            if ((sl_name+uca0+uca1+uca2+uca3+uca4).length >= 153) {if (uca4.length > 19) {uca4 = uca4.slice(0, 19);}}
            if ((sl_name+uca0+uca1+uca2+uca3+uca4).length >= 153) {if (uca3.length > 19) {uca3 = uca3.slice(0, 19);}}
            if ((sl_name+uca0+uca1+uca2+uca3+uca4).length >= 153) {if (uca0.length > 24) {uca0 = uca0.slice(0, 24);}}
            if ((sl_name+uca0+uca1+uca2+uca3+uca4).length >= 153) {if (uca1.length > 14) {uca1 = uca1.slice(0, 14);}}
            if ((sl_name+uca0+uca1+uca2+uca3+uca4).length >= 153) {uca2 = uca2.slice(0, 153 - ((sl_name+uca0+uca1+uca2+uca3+uca4).length-uca2.length))}
            
            app_data = ['external_source='+sl_name,uca0, uca1, uca2, uca3, uca4].join('-_-') + '_y_'+cid[0]+'_d_'+cid[2]+'_s_'+cid[1];
       
        }
        if (dlhref.search(/\?/) > 0) {
            // all params from url
            var href_params = dlhref.split('?')[1].split('&');
            // array with additional parameters 
            var params_other = href_params.filter(v => v.toLowerCase().search('^utm_|need_web|external_source') == -1);
            // changing key parameters (shpa / pos / carloan)
            if (custom_params == true) {var params_other = params_other.map(v => (v.split('=')[0] == params_URL[0]) ? v = params_APP[0] + '=' + v.split('=')[1] : v)}
            // join params
            app_data = params_other.concat(app_data).join('&')
        } 

        if (dp.search(/\?/) > 0) {
            app_data.length > 1 ? app_final = dp + '&' + app_data : app_final = dp; 
        } else {
            app_data.length > 1 ? app_final = dp + '?' + app_data : app_final = dp; 
        }
        return app_final
    }
    

  //dataLayerSL declare

  var ym_sessions = { 
    //  var ym_sessions = { 
      'sessions_params': { 
      '_sv': cid[1],  
      'top100_id': cid[3],  
      '___dmpkit___': cid[2],  
      '_ym_uid': cid[0], 
      //'adriver_uid': adriver_uid__1,  
      'category':'SMARTLINK_'+sl_name,  
      'action': '',  
      'label': '',  
      'window_navigator_userAgent': navigator.userAgent,
      'device_memory_size': navigator.deviceMemory, } 
  };      

  var jsond = {
    'uids': 
    [[10008, 10031, cid[2]], 
    [10008, 10037, cid[3]], 
    [10008, 10041, cid[1]], 
    [10008, 10060, cid[0]]], 
    //[10008, 10055, cid[5]],
    'eventAttrs': 
    [[301, 'SMARTLINK_'+sl_name], 
    [302, ''], [303, ''],
    [10006, navigator.userAgent],
    [10059, utm_cookie_arr[0]], [10060, utm_cookie_arr[1]], [10061, utm_cookie_arr[2]], [10062, utm_cookie_arr[3]], [10063, utm_cookie_arr[4]],
    [10067, 'Smartlink'], [10070, document.referrer], [10071, document.location.href]]
    };
   
   dataLayerSL.push = function (a, l) {
   
    jsond.eventAttrs[1] = [302, a];
    jsond.eventAttrs[2] = [303, l];
    ym_sessions.sessions_params.action = a;
    ym_sessions.sessions_params.label = l;

    
        var rdm = new XMLHttpRequest();
        rdm.open('POST', document.location.protocol+'//dmp.sbermarketing.ru/?dmpkit_cid=9064fc6c-76fe-4a6d-aea6-92ef3f343257&dmpkit_tgt=2js&dmpkit_ctid=f940199e-3e2e-4fac-a636-01f1f5bf88e9&dmpkit_evn=sber_event&dmpkit_p=tm', true);
        rdm.send(JSON.stringify(jsond));
               

        ym(89867636, 'params', ym_sessions);
        ym(31643078, 'params', ym_sessions);
    };


    // Android

    if (platform == 'android') {

    function getBrowser() {var browser = 'unknown'; browser = /ucbrowser/i.test(navigator.userAgent) ? 'UCBrowser' : browser; browser = /edg/i.test(navigator.userAgent) ? 'Edge' : browser; browser = /googlebot/i.test(navigator.userAgent) ? 'GoogleBot' : browser; browser = /chromium/i.test(navigator.userAgent) ? 'Chromium' : browser; browser = /firefox|fxios/i.test(navigator.userAgent) && !/seamonkey/i.test(navigator.userAgent) ? 'Firefox' : browser; browser = /; msie|trident/i.test(navigator.userAgent) && !/ucbrowser/i.test(navigator.userAgent) ? 'IE' : browser; browser = /chrome|crios/i.test(navigator.userAgent) && !/opr|opera|chromium|edg|ucbrowser|googlebot/i.test(navigator.userAgent) ? 'Chrome' : browser; browser = /samsungbrowser/i.test(navigator.userAgent) ? 'SamsungBrowser' : browser; browser = /safari/i.test(navigator.userAgent) && !/chromium|edg|ucbrowser|chrome|crios|opr|opera|fxios|firefox/i.test(navigator.userAgent) ? 'Safari' : browser; browser = /opr|opera/i.test(navigator.userAgent) ? 'Opera' : browser; browser = /yabrowser/i.test(navigator.userAgent) ? 'YaBrowser' : browser; browser = /miuibrowser\/(13|14|15|16|17|18|19|20)/i.test(navigator.userAgent) ? 'Miui 13+' : browser; browser = /miuibrowser\/(9|10|11|12)/i.test(navigator.userAgent) ? 'Miui 12-' : browser; browser = /yasearchbrowser/i.test(navigator.userAgent) ? 'YaStart' : browser; return browser};
    var browser = getBrowser();

// EVENT FOR ANDROID
if (browser != "Firefox"){
    if (typeof(navigator.connection.downlink) != 'undefined') {var ncdl = navigator.connection.downlink} else { var ncdl = ''};
    if (typeof(navigator.connection.effectiveType) != 'undefined') {var ncet = navigator.connection.effectiveType} else { var ncet = ''};
    
}

// // test of UA hints start
if (browser.search(/Chrom|Edge|YaBrowser|Opera/)>=0){
    function collectUserData() {
        return navigator.userAgentData.getHighEntropyValues([
          "mobile",
          "platform",
          "platformVersion",
          "model",
          "uaFullVersion",
        ]);
      }
  collectUserData()
    .then(result => {
      const userData = [
        'mobile_'+result.mobile,
        'platform_'+result.platform,
        'platformVersion_'+result.platformVersion,
        'model_'+result.model,
        'uaFullVersion_'+result.uaFullVersion,
      ];
     // console.log('promise ready')
      dataLayerSL.push('user_data_android', (userData.map((v) => v).filter(v => v)).join('-_-'));
    }).catch(error => {

        console.error("Error:", error);
        
    });
}
        // test of UA hints end
        var app_data = get_final_app(android_dp);
        if (app_data.search("android-app")>=0) {
        var dp = app_data.split('://');
        var dp_and = 'intent://' + dp[1];
        }
        else {
            var dp_and = app_data;
        }


        function redirect_app_android(and_scenario, and_href)
        {
            dataLayerSL.push('info_and_'+and_scenario+'__needweb__'+need_web+'__option__'+option+'__type__'+type+'__loadTime__'+performance.now()+'__Downlink__'+ncdl+'__Efftype__'+ncet, dp_and);
            return window.location.href=and_href
        }
        

        // function check_brand(ua) { if (/SAMSUNG|SM-\w*|SCH-I545/g.test(ua)) { return 'samsung'; } if (/NTH-NX9|NTN-LX1|ELZ-AN00|ELZ-AN20|TFY-LX\d|CMA-LX2|ANY-NX1/g.test(ua)) { return 'other'; } if (/[A-Z]{3}-\w*/g.test(ua)) { return 'huawei'; } if (/\sM2|Redmi|POCO\w*|\sMi|\sMI|RMX/g.test(ua)) { return 'xiaomi'; } return 'other' }
        // function getBrowser() {var browser = 'unknown'; browser = /ucbrowser/i.test(navigator.userAgent) ? 'UCBrowser' : browser; browser = /edg/i.test(navigator.userAgent) ? 'Edge' : browser; browser = /googlebot/i.test(navigator.userAgent) ? 'GoogleBot' : browser; browser = /chromium/i.test(navigator.userAgent) ? 'Chromium' : browser; browser = /firefox|fxios/i.test(navigator.userAgent) && !/seamonkey/i.test(navigator.userAgent) ? 'Firefox' : browser; browser = /; msie|trident/i.test(navigator.userAgent) && !/ucbrowser/i.test(navigator.userAgent) ? 'IE' : browser; browser = /chrome|crios/i.test(navigator.userAgent) && !/opr|opera|chromium|edg|ucbrowser|googlebot/i.test(navigator.userAgent) ? 'Chrome' : browser; browser = /safari/i.test(navigator.userAgent) && !/chromium|edg|ucbrowser|chrome|crios|opr|opera|fxios|firefox/i.test(navigator.userAgent) ? 'Safari' : browser; browser = /opr|opera/i.test(navigator.userAgent) ? 'Opera' : browser; browser = /yabrowser/i.test(navigator.userAgent) ? 'YaBrowser' : browser; browser = /miuibrowser\/(13|14|15|16|17|18|19|20)/i.test(navigator.userAgent) ? 'Miui 13+' : browser; browser = /miuibrowser\/(9|10|11|12)/i.test(navigator.userAgent) ? 'Miui 12-' : browser; browser = /yasearchbrowser/i.test(navigator.userAgent) ? 'YaStart' : browser; return browser};
        // var browser = getBrowser();
        // var brand = check_brand(navigator.userAgent);

        
        if(app_data.search(/android-app|whatsappbusiness/)>=0) {
            if (typeof(web_link_and_option) == 'undefined' || web_link_and_option == ''){
                if ((need_web == false) || (web_link_desk.search("person/dist_services/inner_apps") >= 0 && web_link_desk.search("person/dist_services/inner_apps/packs") <= 0 )) {
                    if (browser == 'Opera' || browser == 'YaStart'|| browser == 'Miui 13+') {
                        var dp_and_opr = dp_and.replace(new RegExp("^android-app:\/\/ru.sberbankmobile\/|^android-app:\/\/ru.sberbankmobile\/android-app\/ru.sberbankmobile\/|^whatsappbusiness:\/\/", "gm"), "intent://ru.sberbankmobile/") + "#Intent;scheme=android-app;package=ru.sberbankmobile;S.browser_fallback_url=" + encodeURIComponent(document.location.origin + document.location.pathname + '?round__two_and=' + get_final_web(web_link_and).replace(/#/, "_anchor_sl_")+ '&need_web=' + need_web + "&sl=" + sl_name + '&external_source=' + app_data.split('external_source=')[1]) + ";end";
                        setTimeout(function () { redirect_app_android('app', dp_and) }, 100);
                        
                    } else {
                        var store_chr_ym_inner = "https://redirect.appmetrica.yandex.com/serve/604716013304427636" + '?external_source='  + app_data.split('external_source=')[1]  + '&sl=' + sl_name;
                        setTimeout(function () { redirect_app_android('app', dp_and) }, 100);
                        setTimeout(function () { redirect_app_android('web1', store_chr_ym_inner)}, 900)
                    }
                } else {    
                    
                    if(browser == 'Miui 12-' || browser == "Firefox") {
                        setTimeout(function () { redirect_app_android('app', dp_and) }, 100);
                        setTimeout(function () { redirect_app_android('web1', web_link_desk)}, 900)

                    } else {

                    var dp_and_opr = dp_and.replace(new RegExp("^android-app:\/\/ru.sberbankmobile\/|^android-app:\/\/ru.sberbankmobile\/android-app\/ru.sberbankmobile\/|^whatsappbusiness:\/\/", "gm"), "intent://ru.sberbankmobile/") + "#Intent;scheme=android-app;package=ru.sberbankmobile;S.browser_fallback_url=" + encodeURIComponent(document.location.origin + document.location.pathname + '?round__two_and=' + get_final_web(web_link_and).replace(/#/, "_anchor_sl_")+ '&need_web=' + need_web + "&sl=" + sl_name + '&external_source=' + app_data.split('external_source=')[1]) + ";end";
                    setTimeout(function () { redirect_app_android('app', dp_and_opr) }, 100);
                    }
                }
        } else {
            if (option == 1) {
                need_web = false;
                 if (browser == 'Opera' || browser == 'YaStart'|| browser == 'Miui 13+') {
                    var dp_and_opr = dp_and.replace(new RegExp("^android-app:\/\/ru.sberbankmobile\/|^android-app:\/\/ru.sberbankmobile\/android-app\/ru.sberbankmobile\/|^whatsappbusiness:\/\/", "gm"), "intent://ru.sberbankmobile/") + "#Intent;scheme=android-app;package=ru.sberbankmobile;S.browser_fallback_url=" + encodeURIComponent(document.location.origin + document.location.pathname + '?round__two_and=' + get_final_web(web_link_and).replace(/#/, "_anchor_sl_")+ '&need_web=' + need_web + "&sl=" + sl_name + '&external_source=' + app_data.split('external_source=')[1]) + ";end";
                    setTimeout(function () { redirect_app_android('app', dp_and_opr) }, 100);
                 
              } else {
                     var store_chr_ym_inner = "https://redirect.appmetrica.yandex.com/serve/604716013304427636" + '?external_source='  + app_data.split('external_source=')[1]  + '&sl=' + sl_name;
                     setTimeout(function () { redirect_app_android('app', dp_and) }, 100);
                     setTimeout(function () { redirect_app_android('web1', store_chr_ym_inner)}, 900)
               }
            }
            else if (option == 2) {
                setTimeout(function () { redirect_app_android('web1', get_final_web(web_link_and))}, 100)
            }
            else if (option == 3) {
                setTimeout(function () { redirect_app_android('web1', get_final_web(web_link_and_option))}, 100)
            }
        }
        } else {
            setTimeout(function () { redirect_app_android('app', dp_and)}, 100)
            setTimeout(function () { redirect_app_android('web1', get_final_web(web_link_and))}, 900)
        }
                

            // iOS


        } else if (platform == 'iPhone') {

            

            var web_data = get_final_web(web_link_ios);
            var app_data = get_final_app(ios_apps_dp[0]);
            var param_for_pad = get_final_app(ios_apps_dp[0]).split(ios_apps_dp[0])[1];
            var fios = document.location.pathname + '?round__two_ios=' + encodeURIComponent('SL_DLTR' + ios_apps_dp[1] + param_for_pad + 'SL_WLTR' + web_data);

            // function getBrowser() {var browser = 'unknown'; browser = /ucbrowser/i.test(navigator.userAgent) ? 'UCBrowser' : browser; browser = /edg/i.test(navigator.userAgent) ? 'Edge' : browser; browser = /googlebot/i.test(navigator.userAgent) ? 'GoogleBot' : browser; browser = /chromium/i.test(navigator.userAgent) ? 'Chromium' : browser; browser = /firefox|fxios/i.test(navigator.userAgent) && !/seamonkey/i.test(navigator.userAgent) ? 'Firefox' : browser; browser = /; msie|trident/i.test(navigator.userAgent) && !/ucbrowser/i.test(navigator.userAgent) ? 'IE' : browser; browser = /chrome|crios/i.test(navigator.userAgent) && !/opr|opera|chromium|edg|ucbrowser|googlebot/i.test(navigator.userAgent) ? 'Chrome' : browser; browser = /safari/i.test(navigator.userAgent) && !/chromium|edg|ucbrowser|chrome|crios|opr|opera|fxios|firefox/i.test(navigator.userAgent) ? 'Safari' : browser; browser = /opr|opera/i.test(navigator.userAgent) ? 'Opera' : browser; browser = /yabrowser/i.test(navigator.userAgent) ? 'YaBrowser' : browser; browser = /miuibrowser\/(13|14|15|16|17|18|19|20)/i.test(navigator.userAgent) ? 'Miui 13+' : browser; browser = /miuibrowser\/(9|10|11|12)/i.test(navigator.userAgent) ? 'Miui 12-' : browser; browser = /yasearchbrowser/i.test(navigator.userAgent) ? 'YaStart' : browser; return browser};
            // var browser = getBrowser();

            function redirect_app_ios(ios_scenario, ios_href)
            {
                dataLayerSL.push('info_ios'+ios_scenario+'__option__'+'no_option'+'__type__'+type+'__loadTime__'+performance.now(), ios_href);

               // return setTimeout(() => {window.location.href=ios_href}, 0); 
               return  window.location.href=ios_href
            }

            if (browser == 'Chrome' || browser == 'YaStart') {
            
            setTimeout(function () {
               dataLayerSL.push('info_ios1_app__option__'+'no_option'+'__type__'+type+'__loadTime__'+performance.now(), app_data);
                window.location.href = app_data;
            }, 200);

                if (ios_apps_dp[1] != '') {
                    
                    setTimeout(function () {
                        window.location.href = fios;
                    }, 500);
            
                } else {

                    setTimeout(function () {
                       dataLayerSL.push('info_ios1_web_no_app__option__'+'no_option'+'__type_'+type+'__loadTime__'+performance.now(), web_data);
                        window.location.href = web_data;
                    }, 500);
                }

            setTimeout(function () {    
                dataLayerSL.push('info_ios1_web_background__option__'+'no_option'+'__type_'+type+'__loadTime__'+performance.now(), web_data);
                    window.location.href = web_data;
            }, 800);

                
            } else {

            var change = true;
            window.onblur = function () {
                if (change) {

                if (ios_apps_dp[1] != '') {            
                        window.location.href = fios;
                } else {      
                    
                    redirect_app_ios('1_web_no_app', web_data);
                        dataLayerSL.push('info_ios1_web_no_app__option__'+'no_option'+'__type_'+type+'__loadTime__'+performance.now(), web_data);
                        window.location.href = web_data;
                   }
                } }

        // fires the moment that the element gets focus
                window.onfocus = function () {
                change = false;

                redirect_app_ios('1_web_background', web_data);
                dataLayerSL.push('info_ios1_web_background__option__'+'no_option'+'__type_'+type+'__loadTime__'+performance.now(), web_data);
                    window.location.href = web_data;
                }
           
                

                setTimeout(function () {
                    dataLayerSL.push('info_ios1_app__option__'+'no_option'+'__type__'+type+'__loadTime__'+performance.now(), app_data);
                    window.location.href = app_data;
                    redirect_app_ios('1_app', app_data);
                        }, 200);
           
            }
                        
        } else {

            

            // Desktop

            var gfw = get_final_web(web_link_desk)
            dataLayerSL.push('info_desk__option__'+option+'__type__'+type+'__loadTime__'+performance.now()), gfw;
            setTimeout(function () {
            window.location.href = gfw;
                }, 200);
        }
}


// GO?
let go = true;
document.addEventListener('yacounter89867636inited', function(){
   go = false;
   routing ('event');
 });

setTimeout(() => {
  if (go) {
    routing ('timer');
  }
}, 700);



    //***********************************************************ROUND TWO**********************************************************
   


} else {

        // analytics
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://s3-gtm.s3pd12.sbercloud.ru/sms/tag.js", "ym");
    
        //counters init    
        ym(31643078, "init", {triggerEvent: true});
        ym(89867636, "init", {triggerEvent: true});

   // EVENT R2


   var cid = [getCookie('_ym_uid'), getCookie('_sv'), getCookie('___dmpkit___'), getCookie('top100_id')]; // getCookie('adriver_uid')
   var utm_cookie_arr = [getCookie('utm_source'), getCookie('utm_medium'), getCookie('utm_campaign'), getCookie('utm_content'), getCookie('utm_term')];

   var ym_sessions = { 
    //  var ym_sessions = { 
      'sessions_params': { 
      '_sv': cid[1],  
      'top100_id': cid[3],  
      '___dmpkit___': cid[2],  
      '_ym_uid': cid[0], 
      //'adriver_uid': adriver_uid__1,  
      'category':'SMARTLINK_'+sl_name,  
      'action': '',  
      'label': '',  
      'window_navigator_userAgent': navigator.userAgent,
      'device_memory_size': navigator.deviceMemory, } 
  };      

  var jsond = {
    'uids': 
    [[10008, 10031, cid[2]], 
    [10008, 10037, cid[3]], 
    [10008, 10041, cid[1]], 
    [10008, 10060, cid[0]]], 
    //[10008, 10055, cid[5]],
    'eventAttrs': 
    [[301, 'SMARTLINK_'+sl_name], 
    [302, ''], [303, ''],
    [10006, navigator.userAgent],
    [10059, utm_cookie_arr[0]], [10060, utm_cookie_arr[1]], [10061, utm_cookie_arr[2]], [10062, utm_cookie_arr[3]], [10063, utm_cookie_arr[4]],
    [10067, 'Smartlink'], [10070, document.referrer], [10071, document.location.href]]
    };
   
   dataLayerSLR2.push = function (a, l) {
   
    jsond.eventAttrs[1] = [302, a];
    jsond.eventAttrs[2] = [303, l];
    ym_sessions.sessions_params.action = a;
    ym_sessions.sessions_params.label = l;

    
        var rdm = new XMLHttpRequest();
        rdm.open('POST', document.location.protocol+'//dmp.sbermarketing.ru/?dmpkit_cid=9064fc6c-76fe-4a6d-aea6-92ef3f343257&dmpkit_tgt=2js&dmpkit_ctid=f940199e-3e2e-4fac-a636-01f1f5bf88e9&dmpkit_evn=sber_event&dmpkit_p=tm', true);
        rdm.send(JSON.stringify(jsond));
               

       // ym(89867636, 'params', ym_sessions);
        //ym(31643078, 'params', ym_sessions);
    };


//     R2 FOR ANDROID


if (document.location.search.search('round__two_and=') == 1){

    var url = decodeURIComponent(document.location.href).split('round__two_and=')[1].split('&need_web=')[0].replace(new RegExp("_anchor_sl_", "gm"), "#")
    var need_web = decodeURIComponent(document.location.href).split('&need_web=')[1].split('&')[0].split(';')[0]
    var sl = decodeURIComponent(document.location.href).split('&sl=')[1].split('&')[0].split(';')[0]
    var external_source = decodeURIComponent(document.location.href).split('&external_source=')[1].split('&')[0].split(';')[0]
    if(need_web == 'true'){

    setTimeout(function(){

    dataLayerSLR2.push('r2_android_web_2', url) // need update!!!

    console.log('r2_dl_push', 'web')


    window.location.href = url;
    },200);

    } else{
    //dataLayerSLR2.push('r2_android_go_to_store', 'tracker')
    console.log('r2_dl_push', 'store')
    setTimeout(function(){window.location.href = 'https://redirect.appmetrica.yandex.com/serve/604716013304427636'+ '?sl=' + sl + '&external_source' + external_source}, 200);
    }
   

    } else {

//R2 FOR IOS

    function getBrowser() {var browser = 'unknown'; browser = /ucbrowser/i.test(navigator.userAgent) ? 'UCBrowser' : browser; browser = /edg/i.test(navigator.userAgent) ? 'Edge' : browser; browser = /googlebot/i.test(navigator.userAgent) ? 'GoogleBot' : browser; browser = /chromium/i.test(navigator.userAgent) ? 'Chromium' : browser; browser = /firefox|fxios/i.test(navigator.userAgent) && !/seamonkey/i.test(navigator.userAgent) ? 'Firefox' : browser; browser = /; msie|trident/i.test(navigator.userAgent) && !/ucbrowser/i.test(navigator.userAgent) ? 'IE' : browser; browser = /chrome|crios/i.test(navigator.userAgent) && !/opr|opera|chromium|edg|ucbrowser|googlebot/i.test(navigator.userAgent) ? 'Chrome' : browser; browser = /safari/i.test(navigator.userAgent) && !/chromium|edg|ucbrowser|chrome|crios|opr|opera|fxios|firefox/i.test(navigator.userAgent) ? 'Safari' : browser; browser = /opr|opera/i.test(navigator.userAgent) ? 'Opera' : browser; browser = /yabrowser/i.test(navigator.userAgent) ? 'YaBrowser' : browser; browser = /miuibrowser\/(13|14|15|16|17|18|19|20)/i.test(navigator.userAgent) ? 'Miui 13+' : browser; browser = /miuibrowser\/(9|10|11|12)/i.test(navigator.userAgent) ? 'Miui 12-' : browser; browser = /yasearchbrowser/i.test(navigator.userAgent) ? 'YaStart' : browser; return browser};
    var browser = getBrowser();
    var dcs = decodeURIComponent(document.location.search).split(/SL_DLTR|SL_WLTR/);
    
    if (browser == 'Chrome' || browser == 'YaStart') {

    //dataLayerSLR2.push('r2_ios_', decodeURIComponent(dcs[1]))

   // dataLayerSLR2.push('info_ios2_app__loadTime__'+performance.now(), decodeURIComponent(dcs[1]));

    setTimeout(function () {
     //   dataLayerSL.push('ios_2', a[1]);
        //dataLayer.push('ios_2', a[1]);
        window.location.href = decodeURIComponent(dcs[1]);
    }, 200);

    setTimeout(function () {
      //  dataLayerSL.push('ios_2_go_web_no_apps', a[2]);
        //dataLayer.push('ios_2_go_web_no_apps', a[2]);
        window.location.href = decodeURIComponent(dcs[2]);
    }, 700);

    setTimeout(function () {
       // dataLayerSL.push('ios_2_go_web_background', a[2]);
        //dataLayer.push('ios_2_go_web_background', a[2]);
        window.location.href = decodeURIComponent(dcs[2]);
    }, 1500);

} else {

    var change = true;
    window.onblur = function () {
        if (change) {
       // dataLayerSLR2.push('info_ios2_web_no_app', decodeURIComponent(dcs[1]));
        window.location.href = decodeURIComponent(dcs[2]);
            }};

// fires the moment that the element gets focus
    window.onfocus = function () {
        change = false;
       // dataLayerSLR2.push('info_ios2_web_background', decodeURIComponent(dcs[2]));
        window.location.href = decodeURIComponent(dcs[2]);
        };

        setTimeout(function () {
       // dataLayerSLR2.push('info_ios2_app', decodeURIComponent(dcs[1]));
        window.location.href = decodeURIComponent(dcs[1]);
        },  200);

    }
}

}