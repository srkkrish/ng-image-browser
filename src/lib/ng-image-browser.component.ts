import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng-image-browser',
  templateUrl: 'ng-image-browser.component.html',
  styleUrls: ['ng-image-browser.component.scss']
})
export class NgImageBrowserComponent implements OnInit {
  @Input() imagesrc: string;
  @Output() modelvalue = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  HandleChange(event){
  let file = event.target.files[0];
  var reader  = new FileReader();
  
  reader.onload = (event:any) => {
    this.imagesrc = event.target.result;
    this.modelvalue.emit(event.target.result);
  }
  reader.readAsDataURL(file);
  }

}
