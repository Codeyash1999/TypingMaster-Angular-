import { Component } from '@angular/core';

//Importing Another Libary After Installing It
import { lorem } from 'faker';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Declaring A Variable RandomSentence Which Will Hold The Random Sentence In App Component
  randomText= lorem.sentence();

  //Declaring Another Variable EnteredText Which Will Hold The Value Entered By The User
  enteredText = '';

  onInput(value : string)
  {
    this.enteredText = value;
  }

  checkText()
  {
    if(this.randomText === this.enteredText)
    {
      return true;
    }
    return false;
  }

  // Making A Function Compare Which Will Be Able To Change The Colour According To The Condition
  compare(randomLetter : string , enteredLetter : string)
  {
    //Condition 1 To Be Checked Is If There Has Been No Text
    if(!enteredLetter)
    {
      return 'pending';
    }
    else
    {
      return randomLetter === enteredLetter ? 'correct' : 'incorrect';
    }
  }

}
