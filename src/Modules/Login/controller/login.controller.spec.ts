import { Test, TestingModule } from '@nestjs/testing';
import { usuarioController } from './usuario.controller';

describe('usuarioController', () => {
  let controller: usuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [usuarioController],
    }).compile();

    controller = module.get<usuarioController>(usuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
