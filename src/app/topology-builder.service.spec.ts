import { TestBed } from '@angular/core/testing';

import { TopologyBuilderService } from './topology-builder.service';

describe('TopologyBuilderService', () => {
  let service: TopologyBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopologyBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
