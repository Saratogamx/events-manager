import { Component, OnInit, Input, Inject, ViewChild, ElementRef } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {
  /**
   *  Binds input params from parent component.
   *  title and elementId are the input params:
   *  - title is used to display modal window's title
   *  - elementId is used to set modal div id unique property
   *  - closeOnBodyClick is used to determine if the modal will close when clicked in its body
  */
  @Input() title: string;
  @Input() elementId: string;
  @Input() closeOnBodyClick: string;
  // With "ViewChild" the #modalcontainer anchor is accessed to get the actual DOM element
  @ViewChild('modalcontainer') containerEl: ElementRef;

  constructor(
    // jQuery service injected as a "token injection"
    @Inject(JQ_TOKEN) private $: any
  ) { }

  ngOnInit() {}

  closeModal() {
    if (this.closeOnBodyClick === 'true') {
      this.$(this.containerEl.nativeElement).modal('hide');
    }
  }

}
