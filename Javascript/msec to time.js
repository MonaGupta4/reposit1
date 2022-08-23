var fmil=0
var fsec=0
var fhr=0
var fmin=0

var mil=+prompt("enter in millisecond");

fmil=(((mil%1000)==mil)?mil:mil%1000);
var tsec=parseInt(mil/1000);


fsec=(((tsec%60)==tsec)?tsec:tsec%60);
var tmin=parseInt(tsec/60);


fmin=(((tmin%60)==tmin)?tmin:tmin%60);
var thr=parseInt(tmin/60);

fhr=(((thr%60)==thr)?thr:thr%60);

console.log(fhr+":"+fmin+":"+fsec+":"+fmil)