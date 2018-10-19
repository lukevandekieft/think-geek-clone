import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBarLinksComponent } from './footer-bar-links.component';

describe('FooterBarLinksComponent', () => {
  let component: FooterBarLinksComponent;
  let fixture: ComponentFixture<FooterBarLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterBarLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBarLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
