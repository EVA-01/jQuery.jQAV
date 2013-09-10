jQuery.fn.play=function() {
 jQuery(this).each(function() {
  if(jQuery(this).is('audio, video')) {
   jQuery(this)[0].play();
  }
 });
 return jQuery(this);
}
jQuery.fn.pause=function() {
 jQuery(this).each(function() {
  if(jQuery(this).is('audio, video')) {
   jQuery(this)[0].pause();
  }
 });
 return jQuery(this);
}
jQuery.fn.reload=function() {
 jQuery(this).each(function() {
  if(jQuery(this).is('audio, video')) {
   jQuery(this)[0].load();
  }
 });
 return jQuery(this);
}
jQuery.fn.canPlayType=function(codec) {
 // Goes for the first element
 if(jQuery(this).filter('audio, video').first().is('audio, video')) {
  return jQuery(this).filter('audio, video').first()[0].canPlayType(codec);
 } else {
  return null;
 }
}
jQuery.fn.addTextTrack=function(kind, label, language) {
 if(jQuery(this).length==1) {
  if(jQuery(this).is('audio, video')) {
   return jQuery(this)[0].addTextTrack(kind, label, language);
  } else {
   return null;
  }
 } else if(jQuery(this).length>1) {
  ret=[];
  jQuery(this).filter('audio, video').each(function() {
   ret.push(jQuery(this)[0].addTextTrack(kind, label, language));
  });
  return ret;
 } else if(jQuery(this).length==0) {
  return null;
 }
}
jQuery.fn.avProp=function(key, value) {
 // Goes for the first element
 if(key==undefined && value==undefined) {
  av=jQuery(this).filter('audio, video').first()[0];
  if(av!=undefined) {
   return {
    audioTracks:av.audioTracks,
    autoplay:av.autoplay,
    buffered:av.buffered,
    controller:av.controller,
    controls:av.controls,
    crossOrigin:av.crossOrigin,
    currentSrc:av.currentSrc,
    currentTime:av.currentTime,
    defaultMuted:av.defaultMuted,
    defaultPlaybackRate:av.defaultPlaybackRate,
    duration:av.duration,
	ended:av.ended,
	error:av.error,
	loop:av.loop,
	mediaGroup:av.mediaGroup,
	muted:av.muted,
	networkState:av.networkState,
	paused:av.paused,
	playbackRate:av.playbackRate,
	played:av.played,
	preload:av.preload,
	readyState:av.readyState,
	seekable:av.seekable,
	seeking:av.seeking,
	src:av.src,
	startDate:av.startDate,
	textTracks:av.textTracks,
	videoTracks:av.videoTracks,
	volume:av.volume
   };
  } else {
   return null;
  }
 } else if(key!=undefined && value==undefined) {
  switch(jQuery.type(key)) {
   case 'object':
    jQuery(this).filter('audio, video').each(function() {
	 elem=jQuery(this);
	 jQuery.each(key, function(k,v) {
	  elem[0][k]=v;
	 });
	});
	return jQuery(this);
   break;
   case 'string':
    return jQuery(this).filter('audio, video').first()[0][key];
   break;
   case 'array':
    ret=[];
	elem=jQuery(this).filter('audio, video').first()[0];
	jQuery.each(key, function(i) {
	 ret[i]=elem[this];
	});
	return ret;
   break;
  }
 } else if(key!=undefined && value!=undefined) {
  jQuery(this).filter('audio, video').each(function(){
   jQuery(this)[0][key]=value;
  });
  return jQuery(this);
 }
}
