;(function() {

    var words = [{
        "right": "accommodate",
        "wrong": "accomodate"
    }, {
        "right": "accommodation",
        "wrong": "accomodation"
    }, {
        "right": "achieve",
        "wrong": "acheive"
    }, {
        "right": "across",
        "wrong": "accross"
    }, {
        "right": "aggressive",
        "wrong": "agressive"
    }, {
        "right": "aggression",
        "wrong": "agression"
    }, {
        "right": "apparently",
        "wrong": "apparantly"
    }, {
        "right": "appearance",
        "wrong": "appearence"
    }, {
        "right": "argument",
        "wrong": "arguement"
    }, {
        "right": "assassination",
        "wrong": "assasination"
    }, {
        "right": "basically",
        "wrong": "basicly"
    }, {
        "right": "beginning",
        "wrong": "begining"
    }, {
        "right": "believe",
        "wrong": "beleive"
    }, {
        "right": "believe",
        "wrong": "belive"
    }, {
        "right": "bizarre",
        "wrong": "bizzare"
    }, {
        "right": "business",
        "wrong": "buisness"
    }, {
        "right": "calendar",
        "wrong": "calender"
    }, {
        "right": "Caribbean",
        "wrong": "Carribean"
    }, {
        "right": "cemetery",
        "wrong": "cemetary"
    }, {
        "right": "chauffeur",
        "wrong": "chauffer"
    }, {
        "right": "colleague",
        "wrong": "collegue"
    }, {
        "right": "coming",
        "wrong": "comming"
    }, {
        "right": "committee",
        "wrong": "commitee"
    }, {
        "right": "completely",
        "wrong": "completly"
    }, {
        "right": "conscious",
        "wrong": "concious"
    }, {
        "right": "curiosity",
        "wrong": "curiousity"
    }, {
        "right": "definitely",
        "wrong": "definately"
    }, {
        "right": "dilemma",
        "wrong": "dilemna"
    }, {
        "right": "disappear",
        "wrong": "dissapear"
    }, {
        "right": "disappoint",
        "wrong": "dissapoint"
    }, {
        "right": "ecstasy",
        "wrong": "ecstacy"
    }, {
        "right": "embarrass",
        "wrong": "embarass"
    }, {
        "right": "environment",
        "wrong": "enviroment"
    }, {
        "right": "existence",
        "wrong": "existance"
    }, {
        "right": "Fahrenheit",
        "wrong": "Farenheit"
    }, {
        "right": "familiar",
        "wrong": "familar"
    }, {
        "right": "finally",
        "wrong": "finaly"
    }, {
        "right": "fluorescent",
        "wrong": "florescent"
    }, {
        "right": "foreign",
        "wrong": "foriegn"
    }, {
        "right": "foreseeable",
        "wrong": "forseeable"
    }, {
        "right": "forty",
        "wrong": "fourty"
    }, {
        "right": "forward",
        "wrong": "foward"
    }, {
        "right": "friend",
        "wrong": "freind"
    }, {
        "right": "further",
        "wrong": "futher"
    }, {
        "right": "gist",
        "wrong": "jist"
    }, {
        "right": "glamorous",
        "wrong": "glamourous"
    }, {
        "right": "government",
        "wrong": "goverment"
    }, {
        "right": "guard",
        "wrong": "gaurd"
    }, {
        "right": "happened",
        "wrong": "happend"
    }, {
        "right": "harass",
        "wrong": "harrass"
    }, {
        "right": "harassment",
        "wrong": "harrass"
    }, {
        "right": "honorary",
        "wrong": "honourary"
    }, {
        "right": "humorous",
        "wrong": "humourous"
    }, {
        "right": "idiosyncrasy",
        "wrong": "idiosyncracy"
    }, {
        "right": "immediately",
        "wrong": "immediatly"
    }, {
        "right": "incidentally",
        "wrong": "incidently"
    }, {
        "right": "independent",
        "wrong": "independant"
    }, {
        "right": "interrupt",
        "wrong": "interupt"
    }, {
        "right": "irresistible",
        "wrong": "irresistable"
    }, {
        "right": "knowledge",
        "wrong": "knowlege"
    }, {
        "right": "liaison",
        "wrong": "liase, liason"
    }, {
        "right": "lollipop",
        "wrong": "lollypop"
    }, {
        "right": "millennium",
        "wrong": "millenium"
    }, {
        "right": "millennia",
        "wrong": "millenia"
    }, {
        "right": "Neanderthal",
        "wrong": "Neandertal"
    }, {
        "right": "necessary",
        "wrong": "neccessary"
    }, {
        "right": "noticeable",
        "wrong": "noticable"
    }, {
        "right": "occasion",
        "wrong": "ocassion"
    }, {
        "right": "occasion",
        "wrong": "occassion"
    }, {
        "right": "occurred",
        "wrong": "occured"
    }, {
        "right": "occurring",
        "wrong": "occuring"
    }, {
        "right": "occurrence",
        "wrong": "occurence"
    }, {
        "right": "occurrence",
        "wrong": "occurance"
    }, {
        "right": "pavilion",
        "wrong": "pavillion"
    }, {
        "right": "persistent",
        "wrong": "persistant"
    }, {
        "right": "pharaoh",
        "wrong": "pharoah"
    }, {
        "right": "piece",
        "wrong": "peice"
    }, {
        "right": "politician",
        "wrong": "politican"
    }, {
        "right": "Portuguese",
        "wrong": "Portugese"
    }, {
        "right": "possession",
        "wrong": "posession"
    }, {
        "right": "preferred",
        "wrong": "prefered"
    }, {
        "right": "preferring",
        "wrong": "prefering"
    }, {
        "right": "propaganda",
        "wrong": "propoganda"
    }, {
        "right": "publicly",
        "wrong": "publically"
    }, {
        "right": "really",
        "wrong": "realy"
    }, {
        "right": "receive",
        "wrong": "recieve"
    }, {
        "right": "referred",
        "wrong": "refered"
    }, {
        "right": "referring",
        "wrong": "refering"
    }, {
        "right": "religious",
        "wrong": "religous"
    }, {
        "right": "remember",
        "wrong": "rember"
    }, {
        "right": "remember",
        "wrong": "remeber"
    }, {
        "right": "resistance",
        "wrong": "resistence"
    }, {
        "right": "sense",
        "wrong": "sence"
    }, {
        "right": "separate",
        "wrong": "seperate"
    }, {
        "right": "siege",
        "wrong": "seige"
    }, {
        "right": "successful",
        "wrong": "succesful"
    }, {
        "right": "supersede",
        "wrong": "supercede"
    }, {
        "right": "surprise",
        "wrong": "suprise"
    }, {
        "right": "tattoo",
        "wrong": "tatoo"
    }, {
        "right": "tendency",
        "wrong": "tendancy"
    }, {
        "right": "therefore",
        "wrong": "therefor"
    }, {
        "right": "threshold",
        "wrong": "threshhold"
    }, {
        "right": "tomorrow",
        "wrong": "tommorow"
    }, {
        "right": "tomorrow",
        "wrong": "tommorrow"
    }, {
        "right": "tongue",
        "wrong": "tounge"
    }, {
        "right": "truly",
        "wrong": "truely"
    }, {
        "right": "unforeseen",
        "wrong": "unforseen"
    }, {
        "right": "unfortunately",
        "wrong": "unfortunatly"
    }, {
        "right": "until",
        "wrong": "untill"
    }, {
        "right": "weird",
        "wrong": "wierd"
    }, {
        "right": "wherever",
        "wrong": "whereever"
    }, {
        "right": "which",
        "wrong": "wich"
    }];

    function findWord(array, attr, value) {
        for (var i = 0; i < array.length; i += 1) {
            if (array[i][attr] === value) {
                return i;
            }
        }
        return -1;
    }

    function checkSpelling(word) {
        var incorrect = findWord(words, 'wrong', word);
        if (incorrect > -1) {
            return words[incorrect].right;
        }
        return false;
    }

    var elements = document.querySelectorAll('[data-mistyped]');
    elements.forEach(function(element) {
        element.addEventListener('keyup', function(e) {
            var input = element.value.split(' ');
            var lastWord = input[input.length - 1];
            var incorrect = checkSpelling(lastWord);
            if (incorrect) {
                input[input.length -1] = incorrect;
                element.value = input.join(' ');
            }
        });
    });


})();
