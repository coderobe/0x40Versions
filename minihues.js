if (!String.prototype.format) {
    String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
        return typeof args[number] != 'undefined' ? args[number] : match;
    });
    };
}


var miniHues = {
    colorArray : [{name:"Mahogany",         value:"#CD4A4A"}, {name:"Banana Mania",         value:"#FAE7B5"},
                  {name:"Beaver",           value:"#9F8170"}, {name:"Black",                value:"#232323"},
                  {name:"Chestnut",         value:"#BC5D58"}, {name:"Copper",               value:"#DD9475"},
                  {name:"Cornflower",       value:"#9ACEEB"}, {name:"Denim",                value:"#2B6CC4"},
                  {name:"Desert Sand",      value:"#EFCDB8"}, {name:"Eggplant",             value:"#6E5160"},
                  {name:"Electric Lime",    value:"#1DF914"}, {name:"Fern",                 value:"#71BC78"},
                  {name:"Goldenrod",        value:"#FCD975"}, {name:"Granny Smith Apple",   value:"#A8E4A0"},
                  {name:"Gray",             value:"#95918C"}, {name:"Green",                value:"#1CAC78"},
                  {name:"Hot Magenta",      value:"#FF1DCE"}, {name:"Inch Worm",            value:"#B2EC5D"},
                  {name:"Indigo",           value:"#5D76CB"}, {name:"Laser Lemon",          value:"#FDFC74"},
                  {name:"Lavender",         value:"#FCB4D5"}, {name:"Macaroni and Cheese",  value:"#FFBD88"},
                  {name:"Manatee",          value:"#979AAA"}, {name:"Mango Tango",          value:"#FF8243"},
                  {name:"Melon",            value:"#FDBCB4"}, {name:"Midnight Blue",        value:"#1A4876"},
                  {name:"Neon Carrot",      value:"#FFA343"}, {name:"Olive Green",          value:"#BAB86C"},
                  {name:"Orange",           value:"#FF7538"}, {name:"Orchid",               value:"#E6A8D7"},
                  {name:"Outer Space",      value:"#414A4C"}, {name:"Outrageous Orange",    value:"#FF6E4A"},
                  {name:"Pacific Blue",     value:"#1CA9C9"}, {name:"Periwinkle",           value:"#C5D0E6"},
                  {name:"Plum",             value:"#8E4585"}, {name:"Purple Heart",         value:"#7442C8"},
                  {name:"Raw Sienna",       value:"#D68A59"}, {name:"Razzmatazz",           value:"#E3256B"},
                  {name:"Red",              value:"#EE204D"}, {name:"Robin Egg Blue",       value:"#1FCECB"},
                  {name:"Royal Purple",     value:"#7851A9"}, {name:"Salmon",               value:"#FF9BAA"},
                  {name:"Scarlet",          value:"#FC2847"}, {name:"Sea Green",            value:"#9FE2BF"},
                  {name:"Sepia",            value:"#A5694F"}, {name:"Shadow",               value:"#8A795D"},
                  {name:"Shamrock",         value:"#45CEA2"}, {name:"Shocking Pink",        value:"#FB7EFD"},
                  {name:"Spring Green",     value:"#ECEABE"}, {name:"Sunset Orange",        value:"#FD5E53"},
                  {name:"Tan",              value:"#FAA76C"}, {name:"Tickle Me Pink",       value:"#FC89AC"},
                  {name:"Timberwolf",       value:"#DBD7D2"}, {name:"Tropical Rain Forest", value:"#17806D"},
                  {name:"Turquoise Blue",   value:"#77DDE7"}, {name:"Vivid Tangerine",      value:"#FFA089"},
                  {name:"Vivid Violet",     value:"#8F509D"}, {name:"White",                value:"#EDEDED"},
                  {name:"Wild Strawberry",  value:"#FF43A4"}, {name:"Wild Watermelon",      value:"#FC6C85"},
                  {name:"Wisteria",         value:"#CDA4DE"}, {name:"Yellow",               value:"#FCE883"},
                  {name:"Yellow Green",     value:"#C5E384"}, {name:"Yellow Orange",        value:"#FFB653"}],
    songs : [{name:"Madeon - Finale",                               fname:"finale",             buffer:null,
             rhythm:"x..xo...x...o...x..xo...x...o...x..xo...x...o...x..xo...x...oxoox..xo...x...o...x..xo...x...o...x..xo...x...o...x...o...x...oooo",}],/*
            {name:"Imagine Dragons - Radioactive",                  fname:"Radioactive",        buffer:null,
             rhythm:"o...x.o.o...x.o.o...x...o...x.o.o...x.o.o...x.......x.......x..."},
            {name:"Row Row Fight the Power",                        fname:"RowRow",             buffer:null,
             rhythm:"o...x...o...x...o...x...o...x...o...x...o...x...o...x...o...xxx.x...x...o...x...o...x...o...x...o...x...o...x...o...o...o...o..."},
            {name:"Outlaw Star OST - Desire",                       fname:"Desire",             buffer:null,
             rhythm:"o...x...o.o.x.x...o.x...o.o.x...o...x...o.o.x.x...o.x...oo..x.x.o...x...o.o.x.x...o.x...oo..x.x.o...x...o.o.x.x...o.x...x...x.xx"},
            {name:"The Bloody Beetroots - Out of Sight",            fname:"OutofSight",         buffer:null,
             rhythm:"o.....oox.......o.o....ox.......o.....oox...o...o.o....ox.......o......ox.......o.o....ox.......o.....oox...o...o.o.....+......."},
            {name:"Buckethead - Smile Without a Face",              fname:"SmileWithoutAFace",  buffer:null,
             rhythm:"o......ox.....o.o.......x.......o......ox.....o.o.....o.x.ooooooo......ox.....o.o.......x.......o......ox.....o.o.....o.x.oooooo"},
            {name:"Crystal Castles - Courtship Date",               fname:"CourtshipDate",      buffer:null,
             rhythm:"o...x.....o.x...o...x.....o.x...o...x.....o.x...o...x.....o.+..."},
            {name:"Aphex Twin - Vordhosbn",                         fname:"Vordhosbn",          buffer:null,
             rhythm:"o...x..---o.x...-.o.x------.x..-o.-.x.o..-.ox-.-----x-o-------o-o...x..---o.x...-.o.x------.x..-o.-.x.o..-.ox-.-----x-o-------o-o...x..---o.x...-.o.x------.x..-o.-.x.o..-.ox-.-----x-o-------o-o...x..---o.x...-.o.x------.x..-o.-.x.o..-.ox-.-----x-o-------o-o...x..---o.x...-.o.x------.x..-o.-.x.o..-.ox-.-----x-o-------o-o...x..---o.x...-.o.x------.x..-o.-.x.o..-.ox-.-----x-o-------o-"},
            {name:"Culprate - Orange Sunrise, Sunset",              fname:"Orange",             buffer:null,
             rhythm:"o.o.x..o.x.x....o..ox......x....o...x....o.x....o...x....o.xx...o.o.x..o.x.x....o..ox......x....o...x....o.x...xo...x....o.xx..."},
            {name:"Hyper - Spoiler",                                fname:"spoiler1",           buffer:null,
             rhythm:"x+......o+......x+......o+......x+......o+......x+......o+......x+......o+......x+......o+......x+......o+......x+..............x+......o+......x+......o+......x+......o+......x+......o+......x+......o+......x+......o+......x---------------x+......o......."},
            {name:"DJ Fresh - Kryptonite",                          fname:"Kryptonite",         buffer:null,
             rhythm:"o.x..ox.o.x..ox.o.x..ox.o.x..ox.o.x..xx.o.x..xx.o.x..xx.o.x..xx.o.x..ox.o.x..ox.o.x..ox.o.x..ox.o.x..xx.o.x..xx.o.xx.xx.o.x..xx."},
            {name:"STS9 - Beyond Right Now (Glitch Mob Remix)",     fname:"BeyondRightNow",     buffer:null,
             rhythm:"o.......x...o.......o...xxxxx...o.o.....x...o.......o...xxxxx...o.......x...o.......o...xxxxx...o.......x...o...o.......+.......o.......x...o.......o...xxxxx...o.o.....x...o...-.-.o.-.xxx+x+x+o.......x...o.......o...xxxxx...o.......x...o...o...x.x.+......."},
            {name:"Kanye West - Hold My Liquor",                    fname:"HoldMyLiquor",       buffer:null,
             rhythm:"o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...o...............+..."},
            {name:"Triple-Q - All Star Circulation",                fname:"AllStarCirc",        buffer:null,
             rhythm:"o...x..oo.o.x...o...x..oo.o.x...o...x..oo.o.x...o...x..oo.x.x...o...x..oo.o.x...o...x..oo.o.x...o...x..oo.o.x...o...x..oo.o.x..."}],*/
    songIndex : 0,

    madeonBeats : "x..xo...x...o...x..xo...x...o...x..xo...x...o...x..xo...x...oxoox..xo...x...o...x..xo...x...o...x..xo...x...o...x...o...x...oooo"
}
var _mh = miniHues
miniHues.audioUrl = "http://googledrive.com/host/0B6wTJ67GewqrWDBuV185MEFDMjA/finale.ogg"
miniHues.colorElement = null;
miniHues.textElement = null;
miniHues.nameElement = null;

miniHues.setColorElement = function(newTarget) {
    miniHues.colorElement = newTarget;
}
miniHues.setTextElement = function(newTarget) {
    miniHues.textElement = newTarget;
}
miniHues.setNameElement = function(newTarget) {
    miniHues.nameElement = newTarget;
}

miniHues.playing = false;
miniHues.sound;

miniHues.audioBuffer;
miniHues.audioContext;

miniHues.startedAt;
miniHues.pausedAt;

miniHues.colorIndex = -1;
miniHues.beat = -1;

miniHues.intId = -1;
miniHues.play = function() {
    if (!_mh.playing && _mh.audioBuffer) {
        /*if (!loop) {
            loop = audioContext.createBufferSource();
            loop.buffer = audioBuffer;
            loop.connect(audioContext.destination)

            loop.loop = true;
            loop.start();
        } else {
            loop.connect(audioContext.destination)
        }*/
        _mh.currentLoop = _mh.audioContext.createBufferSource();
        _mh.currentLoop.buffer = _mh.audioBuffer;
        _mh.currentLoop.connect(_mh.audioContext.destination)
        _mh.currentLoop.loop = true;
        
        if (_mh.pausedAt) {
            _mh.startedAt = Date.now() - _mh.pausedAt;
            console.log("[MiniHues]", "Resuming at", _mh.pausedAt)
            _mh.currentLoop.start(0, _mh.pausedAt/1000)
        } else {
            _mh.startedAt = Date.now();
            _mh.currentLoop.start(0)
        }
        console.log("[MiniHues]", "Started at ", _mh.startedAt)
        _mh.intId = setInterval(_mh.doBeat, 20);
        _mh.playing = true;
        console.log("Start")
    }
}
miniHues.next = function() {
    var newIndex = _mh.songIndex + 1;
    newIndex = (newIndex >= _mh.songs.length) ? 0 : ( (newIndex < 0) ? _mh.songs.length-1 : newIndex);
    _mh.playSong(newIndex);
}
miniHues.previous = function() {
    var newIndex = _mh.songIndex - 1;
    newIndex = (newIndex >= _mh.songs.length) ? 0 : ((newIndex < 0) ? _mh.songs.length-1 : newIndex);
    _mh.playSong(newIndex);
}

miniHues.playSong = function(newIndex) {
    console.log("[MiniHues] Playing " + newIndex);
    _mh.songIndex = newIndex;

    _mh.audioBuffer = _mh.songs[newIndex].buffer;
    
    if (_mh.currentLoop) {
        _mh.stop();
    }

    _mh.pausedAt = null;
    _mh.playing = false;

    _mh.play();
}

miniHues.triedInit = false
miniHues.toggle = function() {
    if (!_mh.triedInit && !_mh.audioBuffer) {
        _mh.init()
        if (_mh.noapi) {
            //alert("Sorry, Web Audio API not supported in this browser.")
            if (_mh.textElement) {
                _mh.textElement.innerHTML = ">>....NO.BROWSER.SUPPORT....................................................................."
            }
            return false
        }
    }
    if (!_mh.audioBuffer && _mh.songs[_mh.songIndex].buffer) {
        _mh.audioBuffer = _mh.songs[_mh.songIndex].buffer
    }

    if (_mh.playing) {
        _mh.stop();
        return true
    } else {
        _mh.play();
        return true
    }
}

miniHues.rollIndex = function() {
    var r = Math.floor(Math.random() * _mh.colorArray.length);
    if (r == _mh.colorIndex) {
        return _mh.rollIndex();
    } else {
        return r;
    }
}

miniHues.beatSeek = 1;

miniHues.doBeat = function() {
    var bmap = _mh.songs[_mh.songIndex].rhythm;
    var newBeat = Math.floor(_mh.position() / (_mh.audioBuffer.duration / bmap.length))
    
    if (newBeat != _mh.beat) {
        var bchar = bmap[newBeat];
        var txt = ">>" + bmap.substr(newBeat + miniHues.beatSeek);
        var ti = 0;

        //console.log("[MiniHues]", newBeat, bchar)
        while (txt.length < 100)  {
            txt += bmap[ti];
            ti = (ti + 1) % bmap.length
        }
        if (_mh.textElement) {
            _mh.textElement.innerHTML = txt;
        }

        if (bchar != ".") {
            _mh.colorIndex = _mh.rollIndex();
            var color = _mh.colorArray[_mh.colorIndex];

            if (_mh.colorElement) {
                _mh.colorElement.style.backgroundColor = color.value;
            }
            if (_mh.nameElement) {
                _mh.nameElement.innerHTML = color.name;
            }
        }
        _mh.beat = newBeat;


    }
    
}

miniHues.stop = function() {
    if (_mh.playing) {
        _mh.currentLoop.disconnect()
        _mh.currentLoop.stop();
        _mh.pausedAt = (Date.now() - _mh.startedAt) % (_mh.audioBuffer.duration*1000);
        console.log("[MiniHues]", "Paused at", _mh.pausedAt)
        clearInterval(_mh.intId)
        _mh.playing = false;
    }
}

miniHues.position = function() {
    //return _mh.currentLoop.context.currentTime % _mh.currentLoop.buffer.duration;
    return (Date.now() - _mh.startedAt) % (_mh.audioBuffer.duration*1000)/1000;
}
miniHues.noapi = false;
miniHues.init = function() {
    _mh.triedInit = true;
    try {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        _mh.audioContext = new window.AudioContext();
    } catch(e) { 
        _mh.noapi = true;
        if (_mh.textElement) {
            _mh.textElement.innerHTML = ">>....NO.BROWSER.SUPPORT....................................................................."
        }
        return;
        //alert('Web Audio API not supported in this browser.');
    }

    /*var req = new XMLHttpRequest();
    req.open('GET', _mh.audioUrl, true); 
    req.responseType = 'arraybuffer';
    req.onload = function() {
        _mh.audioContext.decodeAudioData(req.response, function(buffer) {
            _mh.audioBuffer = buffer;
            console.log("[Minihues]", "Decoded " + buffer.length + " bytes")
        });
    };
    req.send();*/

    var song, r, url;
    for (i in miniHues.songs) {
        console.log("Starting:", miniHues.songs[i].name);
        song = _mh.songs[i];

        url = "http://the0x40hues.appspot.com/miniHues/songs/" + song.fname + ".ogg";
        r = new XMLHttpRequest();
        r.song = song;
        r.si = i;
        r.open('GET', url, true); 
        r.responseType = 'arraybuffer';
        r.onload = function(e) {
            var rr = e.target;
            _mh.audioContext.decodeAudioData(rr.response, function(buffer) {
                rr.song.buffer = buffer;
                console.log("[Minihues]", "{0}: {1} decoded. Length: {2}, {3}".format(rr.si, rr.song.fname, buffer.duration, _mh.songs[rr.si].buffer.length))
            });
        };
        r.onreadystatechange = function(e) {
            var rr = e.target
           if (rr.readyState != 4)  { return; }
           if (rr.status != 200)  {
             if (rr.status == 404) {
                 _mh.textElement.innerHTML = ">>......SONG.MISSING........";
            } else if (rr.status = 403) {
                 _mh.textElement.innerHTML = ">>" + "......LIMIT.REACHED.......";
            }
             return;
           }
        }
        r.send();
    }
}