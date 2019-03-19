import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JhkimPortalComponent } from './jhkim-portal.component';

describe('JhkimPortalComponent', () => {
  let component: JhkimPortalComponent;
  let fixture: ComponentFixture<JhkimPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JhkimPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JhkimPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
