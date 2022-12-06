
let questions = 9;

let questionsLeft = ' [' + questions + ' questions left]';
let adjective = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let verb = prompt('Please type a verb that does not end in -ing ' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let nounKing = prompt('Please type a noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let name = prompt('Kingdom Name!' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let personalName = prompt("Enter a name of a person" + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let occupation = prompt('Type a occupation' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let antagonist = prompt('Enter a criminal' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let hero = prompt('Who helps' + personalName + "?" + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let heroicAction = prompt('What verb do they do to'+ personalName + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);


alert('All done. Ready for the message?');



let sentence = "<h2>There was a " + adjective;
sentence += ' kingdom that used magic to ' + verb;
sentence += " other "  + nounKing + "s ";
sentence += 'and it was called ' + name + ". ";
sentence +=  "Here, " + personalName + ", a witch live as a ";
sentence +=  occupation + " at the edge of the street. ";
sentence += "Yet, just last week a " + antagonist + " attacked " + personalName + " and was crippled and rendered comatose. ";
sentence += "However, " + hero + " heard of " + personalName + "'s misfortune and was in town. "
sentence += "So, " + hero + " visited and cured them by " + heroicAction;
sentence += '.</h2>';
document.write(sentence);
