import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopytemplatetableComponent } from './copytemplatetable.component';

describe('CopytemplatetableComponent', () => {
  let component: CopytemplatetableComponent;
  let fixture: ComponentFixture<CopytemplatetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopytemplatetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopytemplatetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
