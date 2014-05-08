// Card game
// Card constructor
var suitDescrption = ['hearts', 'spades', 'clubs', 'diamonds'];
var valDescription = ['01','02','03','04','05','06','07','08','09','10','jack', 'queen', 'King'];

function Card(_suit, _value){
    this.suit = _suit;
    this.val = _value;
    this.toString = function(){
        return valDescription[this.val] + ' of ' + suitDescrption[this.suit];
    };
    this.toImgString = function(){
        return '86px-' + valDescription[this.val] + '_of_' +  suitDescrption[this.suit] + '.svg.png';
    }
}

function Deck(){
    this.cards = [];
    this.shuffle = function(){
        for(var i = 0, len = this.cards.length; i < len; i++){
            var index = Math.floor(Math.random() * len);
            var temp = this.cards[i];
            this.cards[i] = this.cards[index];
            this.cards[index] = temp;
        }
    };
    this.deal = function(players){
        var dnum = 2; // deal this many cards to each player
        for (var i = 0; i < dnum; i++){ // loop for number of cards to be given
            for(var j = 0; j < players.length; j++){ // loop for the number of players
                players[j].cards.push(this.cards.shift());
            }
        }
    };
    this.toString = function(){
        //console.log(this.cards);
        return this.cards.map(function(elem){

            return elem.toString();
        });
    };
    this.init = function(){
        this.cards = [];
        for (var i = 0; i < 4; i++){
            for (var j = 0; j < 13; j++){
                var card = new Card(i, j);
                this.cards.push(card);
            }
        }
    }
}

var deck = new Deck();
console.log(deck.cards.length);
deck.init();
console.log(deck.toString());
deck.shuffle();
console.log(deck.toString());

// create a table
function Table(){
    this.players = [];
}

function Player(_name){
    this.name = _name;
    this.cards = [];
}

var names = ['Dan', 'Raj']; // input from the users

var table = new Table(); // create a new table from the Table function

names.forEach(function(player_name){ // loop over the names array, create a player for each and push it into the
    // table object's players array
    var player = new Player(player_name); // create a new player given the player name
    table.players.push(player); // push the player into the table of players
});

deck.deal(table.players); // call the deck's deal function and pass all the players on the table
console.log(table);
console.log(deck);