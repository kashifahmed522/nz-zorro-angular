import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatewrapperComponent } from './templatewrapper.component';

describe('TemplatewrapperComponent', () => {
  let component: TemplatewrapperComponent;
  let fixture: ComponentFixture<TemplatewrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatewrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatewrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
