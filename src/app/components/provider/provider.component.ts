import { Component, OnInit } from '@angular/core';
import { ReflectiveInjector } from '@angular/core';

class MandrillService {};
class SendGridService {};
class GenericEmailService {};
const isProd = true;

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    // use of useClass
    // let injector = ReflectiveInjector.resolveAndCreate([
    //   { provide: 'email', useClass: MandrillService },
    //   { provide: SendGridService, useClass: SendGridService },
    // ]);

    // use of useExisting

    // let injector = ReflectiveInjector.resolveAndCreate([
    //   { provide: GenericEmailService, useClass: GenericEmailService }, 
    //   { provide: MandrillService, useExisting: GenericEmailService }, 
    //   { provide: SendGridService, useExisting: GenericEmailService } 
    // ]);
    // let email = injector.get('email');
    // console.log(email)

    // use of useValue without freeze and we can change the value of object
    // let injector = ReflectiveInjector.resolveAndCreate([
    //   { provide: "APIKey", useValue: {
    //     'APIKey':'XYZ1234ABC',
    //   'APISecrete': 'msddnsdfhsdhf' 
    //   }
    // ]);

    // use of useValue with freeze and we cann't change the value of object
    // let injector = ReflectiveInjector.resolveAndCreate([
    //   { provide: "APIKey", useValue: Object.freeze ({
    //     'APIKey':'XYZ1234ABC',
    //   'APISecrete': 'msddnsdfhsdhf'}) 
    //   }
    // ]);

    // use of useFactory method
    let injector = ReflectiveInjector.resolveAndCreate([
      {
        provide: "EmailService",
        useFactory: () => { 
          if (isProd) {
            return new MandrillService();
          } else {
            return new SendGridService();
          }
        }
      },
    ]);
    //let config = injector.get('APIKey');
    // config['APIKey'] = 'hellooo';
    // console.log(config);
    let service = injector.get("EmailService");
    console.log(service);
  }

}
