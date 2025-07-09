// apps/api-gateway/src/test/test.controller.ts
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Test')
@Controller('test')
export class TestController {
  @Get()
  getTest() {
    return { message: 'Swagger is working!' };
  }
}
