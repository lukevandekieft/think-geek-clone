import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopLinksComponent } from './shop-links.component';

describe('ShopLinksComponent', () => {
  let component: ShopLinksComponent;
  let fixture: ComponentFixture<ShopLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
