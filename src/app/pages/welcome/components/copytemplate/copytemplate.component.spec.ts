import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopytemplateComponent } from './copytemplate.component';

describe('CopytemplateComponent', () => {
  let component: CopytemplateComponent;
  let fixture: ComponentFixture<CopytemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopytemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopytemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
