import { Component, OnInit, OpaqueToken } from '@angular/core';
import { ReflectiveInjector } from '@angular/core';

// class MandrillService {};
// class SendGridService {};
class EmailService {};
class MandrillService extends EmailService {};
class SendGridService extends EmailService {};

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  // let injector = ReflectiveInjector.resolveAndCreate([
  //   { provide: "EmailService", useClass: MandrillService }  
  // ]);
  let mandrillServiceToken = new OpaqueToken('EmailService');
  let sendGridServiceToken = new OpaqueToken('EmailService');

  let injector = ReflectiveInjector.resolveAndCreate([
    { provide: mandrillServiceToken, useClass: MandrillService },
    { provide: sendGridServiceToken, useClass: SendGridService }
  ]);
  
  // let emailService = injector.get(EmailService);
  // let emailService2 = injector.get(EmailService);
  let emailService1 = injector.get(mandrillServiceToken);
  let emailService10 = injector.get(sendGridServiceToken);
  // console.log(emailService === emailService2);
  console.log(mandrillServiceToken === sendGridServiceToken);
  }

}
