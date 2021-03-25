import { Controller, Get, Query } from '@nestjs/common';
import { SearchDto } from './search.dto';

@Controller()
export class AppController {
  @Get()
  example(@Query() { numbers, texts }: SearchDto) {
    return { numbers, texts };
  }
}
