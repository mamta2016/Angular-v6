import { Component, OnInit, Inject } from '@angular/core';

export class OtherService {
  constructor() { };
}

export class SimpleService {
  value: string;
}

// export class SimpleService {
//   otherService:OtherService
//   constructor(@Inject(OtherService) otherService:OtherService) {
//     this.otherService = otherService;
//    };
// }

@Component({
  selector: 'app-config-of-service',
  templateUrl: './config-of-service.component.html',
  styleUrls: ['./config-of-service.component.css'],
  viewProviders:[SimpleService,OtherService]
})
export class ConfigOfServiceComponent implements OnInit {

  constructor(private simpleService:SimpleService, private service: SimpleService) { }
  ngOnInit() {

  }

}
