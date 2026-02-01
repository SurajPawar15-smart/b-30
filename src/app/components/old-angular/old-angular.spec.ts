import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldAngular } from './old-angular';

describe('OldAngular', () => {
  let component: OldAngular;
  let fixture: ComponentFixture<OldAngular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OldAngular]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldAngular);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
