import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
title="SevaProject";

//Initializing variables
devotee:number =0;
mantraChanted:number = 0;
roundsChanted:number = 0;
liveVideoUrl:any= "../assets/mov_bbb.mp4";


// disable chanting button
chantingBtnIsDisabled:boolean =false;

//code for circle css changes
devoteeCircleCss = (450 - (450 * this.devotee) / 100);
displayDevotee = (450 - this.devoteeCircleCss) * 100 /450;
mantraChantedCircleCss = (450 - (450 * this.mantraChanted) / 108);
displayMantraChanted = (450 - this.mantraChantedCircleCss) * 108 /450;
roundsChantedCircleCss = (450 - (450 * this.roundsChanted) / 100);
displayRoundsChanted = (450 - this.roundsChantedCircleCss) * 100 /450;



chantingBtnPress(){
 
  this.mantraChanted +=  1;
  
  this.chantingBtnIsDisabled = true;
  setTimeout(() => {
    this.chantingBtnIsDisabled = false;
    
  },5000);
  

  if(this.mantraChanted >= 109){
    this.roundsChanted +=  1;
    this.mantraChanted =1;
  }
  //code for circle css changes
this.mantraChantedCircleCss = (450 - (450 * this.mantraChanted) / 108);
this.displayMantraChanted = (450 - this.mantraChantedCircleCss) * 108 /450;
this.roundsChantedCircleCss = (450 - (450 * this.roundsChanted) / 100);
this.displayRoundsChanted = (450 - this.roundsChantedCircleCss) * 100 /450;


   
  
  
}

}
