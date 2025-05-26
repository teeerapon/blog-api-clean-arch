import { NestFactory } from '@nestjs/core';
import { BlogModule } from './blog/presentation/http/blog.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(BlogModule);
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(3001);
  console.log('✅ API is running at http://localhost:3001/api');
}
bootstrap();
