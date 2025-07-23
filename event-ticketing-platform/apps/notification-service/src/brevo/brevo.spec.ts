import { Test, TestingModule } from '@nestjs/testing';
import { Brevo } from './brevo';

describe('Brevo', () => {
  let provider: Brevo;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Brevo],
    }).compile();

    provider = module.get<Brevo>(Brevo);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
