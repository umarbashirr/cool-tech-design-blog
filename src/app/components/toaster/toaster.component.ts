import { Component, Input, OnInit } from '@angular/core';
import { Toast } from 'src/app/models/toast';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css'],
})
export class ToasterComponent implements OnInit {
  @Input() public toast: Toast | undefined;

  constructor() {}

  ngOnInit(): void {
    this.closeToaster();
  }

  closeToaster() {
    setTimeout(() => {
      this.toast = {
        isActive: false,
        message: '',
      };
    }, 4000);
  }
}
