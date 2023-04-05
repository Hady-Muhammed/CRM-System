import { TestBed } from '@angular/core/testing';
import { DealsService } from './deals.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Deal } from 'src/models/Deal';
import { of } from 'rxjs';

fdescribe('DealsService', () => {
  let service: DealsService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DealsService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getDeals()', () => {
    it('should get all the deals of the system', (done: DoneFn) => {
      let mockDeals: Deal[] = [{
        id: 0,
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        company: '',
        status: '',
        date: '',
        probability_status: '',
        state: ''
      }]
      spyOn(service,'getDeals').and.returnValue(of(mockDeals))
      service.getDeals().subscribe((deals) => {
        expect(deals).toBe(mockDeals);
        done()
      })
    });
  });
});
