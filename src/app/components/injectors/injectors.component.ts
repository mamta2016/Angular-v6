import { Component, OnInit } from '@angular/core';
import { ReflectiveInjector } from '@angular/core'; 
import { SimpleService } from '../config-of-service/config-of-service.component';

class MandrillService {}; 
class SendGridService {};
class EmailService {}

@Component({
  selector: 'app-injectors',
  templateUrl: './injectors.component.html',
  styleUrls: ['./injectors.component.css']
})
export class InjectorsComponent implements OnInit {

  constructor(private service: SimpleService) { }

  ngOnInit() {
    
    // let injector = ReflectiveInjector.resolveAndCreate([
    //   MandrillService,
    //   SendGridService
    // ]);
    let injector = ReflectiveInjector.resolveAndCreate([EmailService]); 
    let childInjector = injector.resolveAndCreateChild([EmailService]);

    // let emailService1 = injector.get(MandrillService);
    // let emailService2 = injector.get(MandrillService);
    // console.log(emailService1 === emailService2);
    console.log(injector.get(EmailService) === childInjector.get(EmailService));
  }
}

