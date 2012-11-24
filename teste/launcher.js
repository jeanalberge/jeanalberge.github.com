paramArray = new Array();
function putParam(name, value) {
 paramArray[paramArray.length] = name;
 paramArray[paramArray.length] = value;
}

debug_js = false;
function prnt(text) {
 document.write(text);
 if (debug_js) {
  text = text.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  var debugOut = document.getElementById("debugOut");
  debugOut.innerHTML += text + "<br>";
 }
}


// ********* SPECIFY YOUR PARAMETERS HERE *********
// Presentation parameters
putParam("info","Created with WireFusion - http://www.demicron.com/wirefusion");
putParam("archive","wf-player/startup8.jar,wf-player/core8.jar,wf-player/3D_Scene-5.05.jar,teste/classes.jar,wf-player/wflet.jar");
putParam("license","Tryout version - For evaluation and demonstration purposes only");
putParam("version","5.0.42.1058");
putParam("java_arguments","-Xmx512m -Dsun.java2d.noddraw=true");
putParam("resourcefolder","teste/");
putParam("preloadfile","preload.jar");
putParam("regid","0");
putParam("runalonemessage","Other Java presentations are already running. To maximize performance and stability, it is recommended that you close them before proceeding. Would you like to pause this presentation until you have closed them?");

// Java bug currently prevents opengl in Linux
if(navigator.userAgent.indexOf('Linux') != -1) {
 opengl = false;
}
if (opengl) {
 putParam("subapplet.classname","com.wirefusion.player.GLAppletPlayer");
 putParam("subapplet.displayname","teste");
 putParam("progressbar","true");
 putParam("codebase_lookup","false");
 putParam("cache_archive_ex","wf-player/opengl1.jar;preload,http://download.java.net/media/applet-launcher/applet-launcher.jar;preload,http://download.java.net/media/jogl/builds/archive/jsr-231-webstart-current/jogl.jar;preload,http://download.java.net/media/gluegen/webstart/gluegen-rt.jar;preload");
 putParam("noddraw.check","false");
 putParam("jnlpNumExtensions","1");
 putParam("jnlpExtension1","http://download.java.net/media/jogl/builds/archive/jsr-231-webstart-current/jogl.jnlp");
 putParam("jnlp_href","teste/jogl.jnlp");
}


// Tag parameters
width=800;
height=600;
name="teste";
code="com.wirefusion.player.AppletPlayer";
if (opengl) {
 code="com.wirefusion.player.GLAppletPlayerLauncher";
}
codebase=".";

// ********* NO NEED TO EDIT AFTER HERE *********
function printParameters() {
 for (var i=0; i < paramArray.length; i=i+2) {
  prnt('<param name="' + paramArray[i] + '" value="' + paramArray[i+1] + '">');
 }
}

useAppletTag = true;
ie5windows=((document.all) && (document.getElementById) && (navigator.platform=='Win32' || navigator.platform=='Win64') && (navigator.userAgent.toLowerCase().indexOf("opera")==-1)); 
if (ie5windows) {
 if (opengl) {
  useAppletTag = true;
 } else {
  prnt("<div style=position:absolute>&nbsp;</div>");
  document.body.addBehavior("#default#clientCaps");
  useAppletTag = (document.body.isComponentInstalled("{08B0E5C0-4FCB-11CF-AAA5-00401C608500}", "componentid")) ;
 }
}

if (navigator.javaEnabled()) {
 useAppletTag = true;
}

if (useAppletTag) {
 if (!navigator.javaEnabled())
 alert("This page requires Java to be enabled");

 prnt('<applet width="'+width+'" height="'+height+'" name="'+name+'" code="'+code+'" codebase="'+codebase+'" mayscript>');
} else {
 prnt('<object ');
 prnt('classid = "clsid:8AD9C840-044E-11D1-B3E9-00805F499D93" ');
 prnt('codebase = "http://java.sun.com/update/1.6.0/jinstall-6u20-windows-i586.cab#Version=6,0,0,6" ');
 prnt('width = "'+width+'" height = "'+height+'" name = "'+name+'" >');

 putParam("code", code);
 putParam("codebase", codebase);
 putParam("name", name);
 putParam("mayscript", "true");
 putParam("type", "application/x-java-applet;version=1.4");
 putParam("scriptable", "false");
}

printParameters();

if (useAppletTag) {
 prnt('You need Java(tm) to view this presentation. <a href="http://www.java.com">Download Java</a></applet> ');
} else {
 prnt('</object>');
}