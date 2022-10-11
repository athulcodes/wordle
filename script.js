const targetwords = [
  "cigar",
  "rebut",
  "sissy",
  "humph",
  "awake",
  "blush",
  "focal",
  "evade",
  "naval",
  "serve",
  "heath",
  "dwarf",
  "model",
  "karma",
  "stink",
  "grade",
  "quiet",
  "bench",
  "abate",
  "feign",
  "major",
  "death",
  "fresh",
  "crust",
  "stool",
  "colon",
  "abase",
  "marry",
  "react",
  "batty",
  "pride",
  "floss",
  "helix",
  "croak",
  "staff",
  "paper",
  "unfed",
  "whelp",
  "trawl",
  "outdo",
  "adobe",
  "crazy",
  "sower",
  "repay",
  "digit",
  "crate",
  "cluck",
  "spike",
  "mimic",
  "pound",
  "maxim",
  "linen",
  "unmet",
  "flesh",
  "booby",
  "forth",
  "first",
  "stand",
  "belly",
  "ivory",
  "seedy",
  "print",
  "yearn",
  "drain",
  "bribe",
  "stout",
  "panel",
  "crass",
  "flume",
  "offal",
  "agree",
  "error",
  "swirl",
  "argue",
  "bleed",
  "delta",
  "flick",
  "totem",
  "wooer",
  "front",
  "shrub",
  "parry",
  "biome",
  "lapel",
  "start",
  "greet",
  "goner",
  "golem",
  "lusty",
  "loopy",
  "round",
  "audit",
  "lying",
  "gamma",
  "labor",
  "islet",
  "civic",
  "forge",
  "corny",
  "moult",
  "basic",
  "salad",
  "agate",
  "spicy",
  "spray",
  "essay",
  "fjord",
  "spend",
  "kebab",
  "guild",
  "aback",
  "motor",
  "alone",
  "hatch",
  "hyper",
  "thumb",
  "dowry",
  "ought",
  "belch",
  "dutch",
  "pilot",
  "tweed",
  "comet",
  "jaunt",
  "enema",
  "steed",
  "abyss",
  "growl",
  "fling",
  "dozen",
  "boozy",
  "erode",
  "world",
  "gouge",
  "click",
  "briar",
  "great",
  "altar",
  "pulpy",
  "blurt",
  "coast",
  "duchy",
  "groin",
  "fixer",
  "group",
  "rogue",
  "badly",
  "smart",
  "pithy",
  "gaudy",
  "chill",
  "heron",
  "vodka",
  "finer",
  "surer",
  "radio",
  "rouge",
  "perch",
  "retch",
  "wrote",
  "clock",
  "tilde",
  "store",
  "prove",
  "bring",
  "solve",
  "cheat",
  "grime",
  "exult",
  "usher",
  "epoch",
  "triad",
  "break",
  "rhino",
  "viral",
  "conic",
  "masse",
  "sonic",
  "vital",
  "trace",
  "using",
  "peach",
  "champ",
  "baton",
  "brake",
  "pluck",
  "craze",
  "gripe",
  "weary",
  "picky",
  "acute",
  "ferry",
  "aside",
  "tapir",
  "troll",
  "unify",
  "rebus",
  "boost",
  "truss",
  "siege",
  "tiger",
  "banal",
  "slump",
  "crank",
  "gorge",
  "query",
  "drink",
  "favor",
  "abbey",
  "tangy",
  "panic",
  "solar",
  "shire",
  "proxy",
  "point",
  "robot",
  "prick",
  "wince",
  "crimp",
  "knoll",
  "sugar",
  "whack",
  "mount",
  "perky",
  "could",
  "wrung",
  "light",
  "those",
  "moist",
  "shard",
  "pleat",
  "aloft",
  "skill",
  "elder",
  "frame",
  "humor",
  "pause",
  "ulcer",
  "ultra",
  "robin",
  "cynic",
  "agora",
  "aroma",
  "caulk",
  "shake",
  "pupal",
  "dodge",
  "swill",
  "tacit",
];

const wordoftheday = "break";
let line = 1;
let entered = [];
let attempts = 6;

const keyListener = (event) => {
  let char = event.key.toUpperCase();
  let alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "ENTER",
    "BACKSPACE",
  ];

  if (attempts == 0) {
    window.alert("No more tries!");
    entered = console.log("No more tries!");
  }

  if (!alphabet.includes(char)) {
    console.log("Invalid character", char);
  } else if (char == "ENTER") {
    if (entered.length < 5) {
      window.alert("Not enough letters!");
      i;
    } else {
      validateEntry();
      line++;
      entered = [];
    }
  } else if (char == "BACKSPACE") {
    deleteLetter();
    console.log(entered);
  } else if (entered.length == 5) {
    console.log("Only accepts up to 5 letters");
  } else {
    entered.push(char);
    console.log(entered);
    displayLetter(char);
  }
};

function displayLetter(letter) {
  let elId = `c${entered.length}l${line}`;
  const el = document.getElementById(elId);
  el.textContent = letter;
  letter++;
}

function addLetter() {
  if (entered.length > 0) {
    entered.pop();
    let elId = `c${entered.length + 1}l${line}`;
    const el = document.getElementById(elId);
    el.textContent = "";
  } else {
    console.log("Nothing to delete!");
  }
}

function validateEntry() {
  console.log(
    "validate if" + entered.join("") + " equals " + wordoftheday.toUpperCase()
  );
  //if the entered word is exactly the word of the day::
  if (entered.join("") == wordoftheday.toUpperCase()) {
    modal.style.display = "block"; // show the modal when it hits
    for (let letter = 0; letter < entered.length; letter++) {
      let buttonKeyboard = document.getElementById(entered[letter]);
      let elId = `c${letter + 1}l${line}`;
      const el = document.getElementById(elId);
      el.classList.add("validated", "rotate-horizontal-center");
      tentativas = 0;
      buttonKeyboard.classList.remove("normal", "wrong-position");
      buttonKeyboard.classList.add("validated");
    }
  } else {
    for (let letter = 0; letter < entered.length; letter++) {
      let elId = `c${letter + 1}l${line}`;
      const el = document.getElementById(elId);
      let wordoftheday1 = wordoftheday.toUpperCase();
      let buttonKeyboard = document.getElementById(entered[letter]);
     
      // if a letter is correct
      if (entered[letter] == wordoftheday[letter].toUpperCase()) {
        el.classList.add("validated", "rotate-horizontal-center");
        buttonKeyboard.classList.remove("normal");
        buttonKeyboard.classList.add("validated");
      } else if (wordoftheday1.includes(entered[letter])) {
        
        // if the letter exists in the word but is in the wrong place:
        let attemptPos = entered[letter];
        let realPos = wordoftheday.lastIndexOf(wordoftheday[letter]);
        if (attemptPos != realPos) {
          el.classList.add("wrong-position", "rotate-horizontal-center");
          buttonKeyboard.classList.remove("normal");
          buttonKeyboard.classList.add("wrong-position");
        }
        // if a letter is invalid
      } else {
        el.classList.add("invalid", "rotate-horizontal-center");
        buttonKeyboard.classList.remove("normal");
        buttonKeyboard.classList.add("invalid");
      }
    }
    attempts--;
  }
}

document.body.addEventListener("keydown", keyListener);

// Making the keyboard work with click
document.querySelectorAll(".letter").forEach((el) => {
  el.addEventListener("click", function (el) {
    let letter = el.target.textContent;
    document.getElementsByClassName(letter);
    el.textContent = letter;
    if (letter == "⌫") {
      apagaletter();
    } else if (letter == "ENTER") {
      if (entered.length < 5) {
        window.alert("Enter sufficient letters");
        i;
      } else {
        validateEntry();
        line++;
        entered = [];
      }
    } else {
      entered.push(letter);
      displayLetter(letter);
    }
  });
});

// Get the modal
var modal = document.getElementById("modalHit");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
