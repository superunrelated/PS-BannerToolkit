﻿// Written by Knut Skaala / @superunrelated// Adding JSON. Crude, but it works...// https://github.com/douglascrockford/JSON-js  if(typeof JSON!=="object"){JSON={}}(function(){"use strict";function f(e){return e<10?"0"+e:e}function quote(e){escapable.lastIndex=0;return escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t==="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];if(a&&typeof a==="object"&&typeof a.toJSON==="function"){a=a.toJSON(e)}if(typeof rep==="function"){a=rep.call(t,e,a)}switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a){return"null"}gap+=indent;u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1){u[n]=str(n,a)||"null"}i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]";gap=o;return i}if(rep&&typeof rep==="object"){s=rep.length;for(n=0;n<s;n+=1){if(typeof rep[n]==="string"){r=rep[n];i=str(r,a);if(i){u.push(quote(r)+(gap?": ":":")+i)}}}}else{for(r in a){if(Object.prototype.hasOwnProperty.call(a,r)){i=str(r,a);if(i){u.push(quote(r)+(gap?": ":":")+i)}}}}i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}";gap=o;return i}}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}}var cx,escapable,gap,indent,meta,rep;if(typeof JSON.stringify!=="function"){escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;meta={"\b":"\\b","  ":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};JSON.stringify=function(e,t,n){var r;gap="";indent="";if(typeof n==="number"){for(r=0;r<n;r+=1){indent+=" "}}else if(typeof n==="string"){indent=n}rep=t;if(t&&typeof t!=="function"&&(typeof t!=="object"||typeof t.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":e})}}if(typeof JSON.parse!=="function"){cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i==="object"){for(n in i){if(Object.prototype.hasOwnProperty.call(i,n)){r=walk(i,n);if(r!==undefined){i[n]=r}else{delete i[n]}}}}return reviver.call(e,t,i)}var j;text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}})()/*@@@BUILDINFO@@@ Publishify.jsx 0.0.0.1*//*// BEGIN__HARVEST_EXCEPTION_ZSTRING<javascriptresource>  <name>Publishify</name>  <category>banners</category>  <eventid>35849730-6592-11e4-9803-0800200c9a66</eventid></javascriptresource>// END__HARVEST_EXCEPTION_ZSTRING*/#target photoshopapp.bringToFront();var startDisplayDialogs = app.displayDialogs;app.displayDialogs = DialogModes.NO;_log = "";main();app.displayDialogs = startDisplayDialogs;function main(){  var srcDir = Folder.selectDialog("Select a directory with the files to publish.");  var docs = getDocuments(srcDir);  if (!docs || docs.length == 0){    alert("No documents with the name format: 486x400_filename.psd found!");    return false;  }    docs = showDialog(docs);  if (!docs) {    return false;  }  var targetDir = new Folder(srcDir + "/jpg");  targetDir.create();  publishDocuments(docs, targetDir);  alert("Files created:\n" +  _log);}function log(str){  _log += str + "\n";}function getDocuments(srcDir) {  if (srcDir == null) {return false;}  var result = [];  var fileList = srcDir.getFiles();  for (var i = 0; i < fileList.length; i++) {    var file = fileList[i];    if (file instanceof File && !file.hidden) {      var fileNamedata = parseDocument(file);      if (fileNamedata){        result.push(fileNamedata);      }    }  }  return result;}function parseDocument(document) {  var arr = document.name.match(/(\d{2,4})x(\d{2,4})(.+?)(?=\.psd)(\.psd)/i);  if (!arr){      return false;  }  var src = {      width: arr[1],      height: arr[2],      name: arr[3],      extension: arr[4],      document: document  }  if (!src.width || !src.height || !src.name || !src.extension || src.extension !== ".psd"){      return false;  }  return src;}function publishDocuments(sources, targetDir) {  for (var i = 0; i < sources.length; i++) {    var src = sources[i];      publishDocument(src, targetDir);  }}function publishDocument(src, targetDir) {  var document = app.open(src.document);  app.activeDocument = document;  for (var i = 0; i < document.layerSets.length; i++) {    hideAllLayerSets(document);     var layerSet = document.layerSets[i];    layerSet.visible = true;    var file = new File(targetDir + "/" + document.name.replace('.psd', '') + "_" + layerSet.name.replace(' ', '_') + ".jpg");    var quality = exportToFileSize(document, file, src.kb);    log(file.name + " saved at quality " + quality);  }  document.close(SaveOptions.SAVECHANGES);}function exportToFileSize(document, file, kb) {  if (isNaN(kb)){    alert("Target kb is not a number! File not saved.");    return;   }  var quality = 90;  exportFile(document, file, quality);  while (Math.round(file.length/1024) > kb){    quality -= 5;    if (quality <= 0){      return quality;    }    file = new File(file.fullName);    exportFile(document, file, quality);    $.writeln("quality:"+quality + "  FileSize:" + Math.round(file.length/1024));  }  return quality;}function exportFile(document, file, quality) {  var options = new ExportOptionsSaveForWeb();  options.format = SaveDocumentType.JPEG;  options.blur = 0.0 ;  options.includeProfile = false;  options.interlaced = false;  options.optimized = true;  options.quality = quality;  document.exportDocument(file, ExportType.SAVEFORWEB, options);}function hideAllLayerSets(document) {  for (var i = 0; i < document.layerSets.length; i++) {    var layerSet = document.layerSets[i];    layerSet.visible = false;  }}function showDialog(sources) {  var dialog = new Window("dialog", "Publishify");  var brush = dialog.graphics.newBrush (dialog.graphics.BrushType.THEME_COLOR, "appDialogBackground");  dialog.graphics.backgroundColor = brush;  dialog.graphics.disabledBackgroundColor = dialog.graphics.backgroundColor;  dialog.orientation = 'column';  dialog.alignChildren = 'left';  dialog.add("statictext", undefined, "Set target kb size for each format:");  var top = dialog.add("group");  top.orientation = 'row';  top.alignChildren = 'top';  top.alignment = 'fill';  var left = top.add("group");  left.orientation = 'column';  left.alignChildren = 'left';  left.alignment = 'fill';  for (var i = 0; i < sources.length; i++) {    var src = sources[i];    var row = left.add("group");    row.orientation = 'row';    row.alignChildren = 'left';    row.alignment = 'fill';    row.add("statictext", undefined, src.width + "x" + src.height);    src.edittext = row.add("edittext", undefined, "", {multiline:false});    src.edittext.preferredSize.width = 100;  }  var right = top.add("group");  right.orientation = 'column';  right.alignChildren = 'fill';    dialog.btnRun = right.add("button", undefined, "Run" );  dialog.btnRun.onClick = function() {    dialog.close(1);  }  dialog.btnCancel = right.add("button", undefined, "Cancel" );    dialog.btnCancel.onClick = function() {     dialog.close(0);  }  app.bringToFront();  dialog.center();    var result = dialog.show();  if (result == 1){    for (var i = 0; i < sources.length; i++) {      var src = sources[i];      src.kb = parseInt(src.edittext.text.replace(' ', ''));      src.edittext = undefined;    }    return sources;  } else {    return false;  }}