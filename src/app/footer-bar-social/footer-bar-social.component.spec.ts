import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBarSocialComponent } from './footer-bar-social.component';

describe('FooterBarSocialComponent', () => {
  let component: FooterBarSocialComponent;
  let fixture: ComponentFixture<FooterBarSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterBarSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBarSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
