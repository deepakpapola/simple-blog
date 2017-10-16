import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-alert',
  template: `
  <simple-notifications 
  [options]="options"  >
  </simple-notifications>
`,
})
export class AlertComponent implements OnInit {
  message: any;

  public options = { }
  constructor( ) { 
    
    
  }

  ngOnInit() {
    // this.alertService.getMessage().subscribe(message => {this.message = message; });
    
  }

}
