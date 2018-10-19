import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarDirectoryComponent } from './nav-bar-directory.component';

describe('NavBarDirectoryComponent', () => {
  let component: NavBarDirectoryComponent;
  let fixture: ComponentFixture<NavBarDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarDirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
