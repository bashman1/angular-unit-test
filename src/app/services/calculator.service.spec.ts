import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /**
   * my test stating from here
   */
  it('should add two numbers', ()=>{
    // const logger = new LoggerService();
    // spyOn(logger, 'log');

    //simulating objects instead of creating real objects
    const logger = jasmine.createSpyObj('LoggerService', ["log"]);

    const calculator = new CalculatorService(logger);

    const results = calculator.add(2,2);

    expect(results).toBe(4);
    expect(logger.log).toHaveBeenCalledTimes(1);

  })

  it('should subtract two numbers', ()=>{

    const calculator = new CalculatorService(new LoggerService());

    const results = calculator.subtract(2,2);

    expect(results).toBe(0, "Unexpected subtraction results");

  })


});
