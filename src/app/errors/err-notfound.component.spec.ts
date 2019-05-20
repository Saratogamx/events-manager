import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrNotfoundComponent } from './err-notfound.component';

describe('ErrNotfoundComponent', () => {
  let component: ErrNotfoundComponent;
  let fixture: ComponentFixture<ErrNotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrNotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
