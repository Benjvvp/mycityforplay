const ua = detect.parse(navigator.userAgent);

if(ua.device !== null){
    if(ua.device.family == 'iPhone' || ua.device.family == 'Android'){
        window.location.replace("https://cityforplay.herokuapp.com/phone");
    }
}