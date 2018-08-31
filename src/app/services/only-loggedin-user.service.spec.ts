import { TestBed, inject } from '@angular/core/testing';

import { OnlyLoggedInUsersGuard } from './only-loggedin-user.service';

describe('OnlyLoggedInUsersGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnlyLoggedInUsersGuard]
    });
  });

  it('should be created', inject([OnlyLoggedInUsersGuard], (service: OnlyLoggedInUsersGuard) => {
    expect(service).toBeTruthy();
  }));
});
