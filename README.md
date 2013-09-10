jQuery.jQAV
===========

Extends HTML5 audio and video functions to jQuery elements.

## Usage example

    $('audio, video').play();
    
Plays audio and video elements. Works on all elements that match selector. Returns the elements.

    $('audio, video').pause();
    
Pauses audio and video elements. Works on all elements that match selector. Returns the elements.

    $('audio, video').reload();
    
Reloads audio and video elements. Reload is the same function as Element.load() in standard Javascript. Works on all elements that match selector. Returns the elements.

    $('audio').canPlayType(codec);
  
Tests if the browser can play certain media files and with certain codecs. Matches the first audio or video element that match the selector. Returns "probably", "maybe", or "".

    $('audio').addTextTrack(kind, label, language);
    
Creates text tracks on matching audio and video elements. If there's only one audio or video tag matched, it returns a single TextTrack object. If more than one audio or video tag is matched, it returns an array of TextTrack objects.

    $('audio').avProp([key], [value]);
    $('audio').avProp();
    $('audio').avProp('volume');
    $('audio').avProp(['volume', 'paused']);
    $('audio, video').avProp({currentTime:34, loop:true});
    $('audio, video').avProp('currentTime', 34);
    
* If key and value are not defined, avProp matches the first audio or video tag and returns an object of its audio visual properties.
* If key is a defined string, it returns the audio visual property by that name of the first audio or video tag.
* If key is an array of strings, it returns an array of the respective values of the first audio or video tag.
* If key is an object, it sets the respective values of all matched audio and video tags and returns the matched elements.
* If key is a string and value is defined, it sets the property (key) with the value for all matched elements and returns the matched elements.

## License: Public Domain
Please don't rename it or change credit away from me, James Anthony Bruno, because that would make me sad. It is fine, however, to make changes to jQAV's core to suit your needs for use in your products (whether commercial, personal, or non-profit). If you believe you've found a better way for jQAV to work, go ahead and message me and let me know! I would love to implement your fix.
