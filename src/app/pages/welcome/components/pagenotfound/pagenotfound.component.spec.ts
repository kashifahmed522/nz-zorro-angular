import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PagenotfoundComponent } from './pagenotfound.component';

describe('PagenotfoundComponent', () => {
  let component: PagenotfoundComponent;
  let fixture: ComponentFixture<PagenotfoundComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PagenotfoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
