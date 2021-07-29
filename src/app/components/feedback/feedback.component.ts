import { Component, OnInit } from '@angular/core';

import { Feedback } from './../../models/feedback.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  customerFeedback = new Feedback();

  constructor() { }

  ngOnInit(): void {
  }

  saveFeedback() {
    alert('Thanks for your valuable feedback!!!\nThe feedback has been submitted succesfully.');
    console.table(this.customerFeedback);
  }

}
