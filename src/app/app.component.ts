import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  settingUp: boolean = true;
  model: StartGameForm = new StartGameForm('','',10000,'','','','');

  startNewGame() {
    this.settingUp = true;
  }

  finishSetup() {
    this.settingUp = false;
  }
}

export class StartGameForm {

  constructor(
    public player1: string,
    public player2: string,
    public totalScore: number,
    public player3?: string,
    public player4?: string,
    public player5?: string,
    public player6?: string
  ) {  this.totalScore = 10000; }

}