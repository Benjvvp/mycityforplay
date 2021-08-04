const ua = detect.parse(navigator.userAgent);
if(ua.os.family === 'iPhone' || ua.os.family === 'Android'){
    window.location.replace("https://cityforplay.herokuapp.com/phone");
}