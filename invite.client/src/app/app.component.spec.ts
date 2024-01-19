import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve invites forecasts from the server', () => {
    const mockInvites = [
      { id: 1, fullName: "first", startDate: '2021-10-01', endDate: '2021-10-01' },
      { id: 2, fullName: "second", startDate: '2021-10-02', endDate: '2021-10-02' }
    ];

    component.ngOnInit();

    const req = httpMock.expectOne('/api/invites');
    expect(req.request.method).toEqual('GET');
    req.flush(mockInvites);

    expect(component.invites).toEqual(mockInvites);
  });
});
