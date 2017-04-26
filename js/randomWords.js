
var words1 = ["Yellow", "Moist", "Ticklish", "Crunchy", "Electric", "Powerful", "Weak", "Huge", "Miniature", "Soggy", "Lengthy", "Fully Clothed", "Fuzzy", "Virgin", "Fickle", "Blue", "Red", "Dark", "Forceful", "Delicate",
				"Slippery", "Juicy", "Dead", "Angry", "Clumsy", "Mushy", "Noisy", "Chubby", "Calm", "Rich", "Shy", "Gentle", "Jolly", "Kind", "Jealous", "Lazy", "Scary", "Repulsive", "Petite", "Puny", "Short", "Small", "Tiny",
				"Bitter", "Broken", "Filthy", "Yummy", "Sticky", "Sweet"];

var words2 = ["Pretzel", "Egg", "Toe", "Cat", "Popsicle", "Lead-based paint", "Abdomen", "Chance Wills", "Sock", "Shoe", "Gofish Card", "Pastrami", "Pasta", "Lasagna", "Bowl Cut", "Middle Part", "Number", "Advertisement", "Video Game",
                "Air", "Gator", "Plane", "Dictionary", "Camera", "Revenge", "Telescope", "Bagpipe", "Barn", "Bath","Book", "Clam", "Cloth", "Cookie", "Crying", "Data", "Daughter", "Son", "Ear", "Eel", "Energy",
                "Ex-wife", "Father", "Father-in-Law", "Fork", "Princess", "Grandparent", "Grapefruit", "Sandwich"];


function createAFetish() {
var rnd = Math.ceil(Math.random() * words1.length - 1);
var rnd2 = Math.ceil(Math.random() * words2.length - 1);

// Display the word inside the text box
document.getElementById("firstWord").innerHTML = words1[rnd];
document.getElementById("secondWord").innerHTML = words2[rnd2];
}