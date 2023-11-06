let input_link = document.getElementById("input-link");
let but_Iphone_X = document.getElementById("but-Iphone-X");
let but_Galaxy_Note_10 = document.getElementById("but-Galaxy-Note-10");
let but_Ipad_Pro = document.getElementById("but-Ipad-Pro");
let but_Mac_OSX = document.getElementById("but-Mac-OSX");


let open_window_Iphone_X;
function butOnClickIphoneX() {
    but_Iphone_X.addEventListener("click",function myFun() {
        let url = input_link .value;
    open_window_Iphone_X = window.open(url,"","width=375,height= 812")
    })
}butOnClickIphoneX();

let open_window_Galaxy_Note_10;
function butOnClickGalaxyNote10() {
    but_Galaxy_Note_10.addEventListener("click",function myFun() {
        let url = input_link .value;
    open_window_Galaxy_Note_10 = window.open(url,"","width=412,height= 869")
    })
}butOnClickGalaxyNote10();

let open_window_Ipad_Pro;
function butOnClickIpadPro() {
    but_Ipad_Pro.addEventListener("click",function myFun() {
        let url = input_link .value;
    open_window_Ipad_Pro = window.open(url,"","width=1024,height= 1366")
    })
}butOnClickIpadPro();

let open_window_Mac_OSX;
function butOnClickMacOSX() {
    but_Mac_OSX.addEventListener("click",function myFun() {
        let url = input_link .value;
    open_window_Mac_OSX = window.open(url,"","width=1920,height= 1080")
    })
}butOnClickMacOSX();