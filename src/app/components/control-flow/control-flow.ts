import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isDiv1Visible: boolean = false;
  div2Status: string = 'Show';
  hideDiv() {
    this.isDiv1Visible = false;
  }
  showDiv() {
    this.isDiv1Visible = true;
  }
  toggleDiv2() {
    // if (this.div2Status == 'Show') {
    //   this.div2Status = 'hide';
    // } else {
    //   this.div2Status = 'Show';
    // }
    this.div2Status = this.div2Status == 'Show' ? 'Hide' : 'Show';
  }
}
