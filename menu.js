//----------DHTML Menu Created using AllWebMenus PRO ver 5.1-#758---------------
//C:\ALL WEBSITES\church in portland\awmdata\menu-churchinportland.awm
awmRelativeCorner=7;
var awmMenuName='menu';
var awmLibraryBuild=758;
var awmLibraryPath='/awmdata';
var awmImagesPath='/awmdata/menu';
var awmSupported=(navigator.appName + navigator.appVersion.substring(0,1)=="Netscape5" || document.all || document.layers || navigator.userAgent.indexOf('Opera')>-1 || navigator.userAgent.indexOf('Konqueror')>-1)?1:0;
if (awmAltUrl!='' && !awmSupported) window.location.replace(awmAltUrl);
if (awmSupported){
var nua=navigator.userAgent,scriptNo=(nua.indexOf('Chrome')>-1)?2:((nua.indexOf('Safari')>-1)?7:(nua.indexOf('Gecko')>-1)?2:((document.layers)?3:((nua.indexOf('Opera')>-1)?4:((nua.indexOf('Mac')>-1)?5:1))));
var mpi=document.location,xt="";
var mpa=mpi.protocol+"//"+mpi.host;
var mpi=mpi.protocol+"//"+mpi.host+mpi.pathname;
if(scriptNo==1){oBC=document.all.tags("BASE");if(oBC && oBC.length) if(oBC[0].href) mpi=oBC[0].href;}
while (mpi.search(/\\/)>-1) mpi=mpi.replace("\\","/");
mpi=mpi.substring(0,mpi.lastIndexOf("/")+1);
var e=document.getElementsByTagName("SCRIPT");
for (var i=0;i<e.length;i++){if (e[i].src){if (e[i].src.indexOf(awmMenuName+".js")!=-1){xt=e[i].src.split("/");if (xt[xt.length-1]==awmMenuName+".js"){xt=e[i].src.substring(0,e[i].src.length-awmMenuName.length-3);if (e[i].src.indexOf("://")!=-1){mpi=xt;}else{if(xt.substring(0,1)=="/")mpi=mpa+xt; else mpi+=xt;}}}}}
while (mpi.search(/\/\.\//)>-1) {mpi=mpi.replace("/./","/");}
var awmMenuPath=mpi.substring(0,mpi.length-1);
while (awmMenuPath.search("'")>-1) {awmMenuPath=awmMenuPath.replace("'","%27");}
document.write("<SCRIPT SRC='"+awmMenuPath+awmLibraryPath+"/awmlib"+scriptNo+".js'><\/SCRIPT>");
var n=null;
awmzindex=1000;
}

var awmImageName='';
var awmPosID='';
var awmSubmenusFrame='';
var awmSubmenusFrameOffset;
var awmOptimize=0;
var awmHash='VDHHMYVKLBEEBMNUWCWKFL';
var awmUseTrs=0;
var awmSepr=["0","","",""];
function awmBuildMenu(){
if (awmSupported){
awmCreateCSS(0,1,0,n,'#FFFFFF',n,n,n,'none','0','#000000',0,0);
awmCreateCSS(1,2,1,'#C06806','#003366',n,'bold 12px Lucida Calligraphy',n,'none','0','#000000','0px 0px 0px 0',1);
awmCreateCSS(0,2,1,'#FFFFFF','#003366',n,'bold 12px Lucida Calligraphy',n,'none','0','#000000','0px 0px 0px 0',1);
awmCreateCSS(0,2,1,'#FFFFFF','#003366',n,'bold 12px Lucida Calligraphy',n,'outset','3','#0000F0','0px 0px 0px 0',1);
var s0=awmCreateMenu(0,0,0,0,1,0,0,0,7,10,10,0,1,0,0,0,1,n,n,100,1,0,0,0,0,-1,1,200,200,0,0,0,"0,0,0",n,n,n,n,n,n,n,n,0,0);
it=s0.addItem(1,2,3," &nbsp;Home &nbsp;",n,n,"","http://www.churchinportland.org",n,n,n,"http://www.churchinportland.org",n,0,0,2,0,0);
it=s0.addItem(1,2,3," &nbsp;Beliefs &nbsp;",n,n,"","http://www.churchinportland.org/beliefs.html",n,n,n,"http://www.churchinportland.org/beliefs.html",n,0,0,2,0,0);
it=s0.addItem(1,2,3," &nbsp;Brief History &nbsp;",n,n,"","http://www.churchinportland.org/history.html",n,n,n,"http://www.churchinportland.org/history.html",n,0,0,2,0,0);
it=s0.addItem(1,2,3," &nbsp;Testimonies &nbsp;",n,n,"","http://www.churchinportland.org/testimonies.html",n,n,n,"http://www.churchinportland.org/testimonies.html",n,0,0,2,0,0);
it=s0.addItem(1,2,3," &nbsp;Universities &nbsp;",n,n,"","http://www.churchinportland.org/universities.html",n,n,n,"http://www.churchinportland.org/universities.html",n,0,0,2,0,0);
it=s0.addItem(1,2,3," &nbsp;Calendar &nbsp;",n,n,"","http://www.churchinportland.org/calendar.html",n,n,n,"http://www.churchinportland.org/calendar.html",n,0,0,2,0,0);
it=s0.addItem(1,2,3," &nbsp;Life Links &nbsp;",n,n,"","http://www.churchinportland.org/lifelinks.html",n,n,n,"http://www.churchinportland.org/lifelinks.html",n,0,0,2,0,0);
it=s0.addItem(1,2,3," &nbsp;Contact &nbsp;",n,n,"","http://www.churchinportland.org/contact.html",n,n,n,"http://www.churchinportland.org/contact.html",n,0,0,2,0,0);
s0.pm.buildMenu();
}}
