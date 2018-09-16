import { InnerRoutingModule } from './inner-routing.module';

describe('InnerRoutingModule', () => {
  let innerRoutingModule: InnerRoutingModule;

  beforeEach(() => {
    innerRoutingModule = new InnerRoutingModule();
  });

  it('should create an instance', () => {
    expect(innerRoutingModule).toBeTruthy();
  });
});
