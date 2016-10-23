// testing a new module here
var fortuneCookies = [
	"Conquer your fears or they will conquer you.",
	"Rivers need springs.",
	"Do not fear what you don't know.",
	"You will have a pleasant surprise.",
	"Whenever possible, keep it simple."
]

// make function getFortune available from outside the current module
exports.getFortune = function(){
	var idx = Math.floor(Math.random() * fortuneCookies.length)
	return fortuneCookies[idx];
}