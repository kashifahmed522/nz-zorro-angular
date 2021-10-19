import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MonitoringComponent } from './monitoring.component';

describe('MonitoringComponent', () => {
  let component: MonitoringComponent;
  let fixture: ComponentFixture<MonitoringComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitoringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
