import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(function (req, res, next) {
    res.removeHeader('X-Powered-By');
    res.header('Server', 'Apache-Coyote/1.1')
    next();
  });

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('仓库管理系统')
    .setVersion('0.0.1')
    .addOAuth2({
      type: 'http',
      name: 'admin',
      description: 'Oauth2'
    })
    .addSecurity('basic', {
      type: 'http',
      scheme: 'basic'
    })
    .setDescription('仓库管理系统API')
    .build();
  const docs = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs-api', app, docs);
  await app.listen(3000);
}
bootstrap();
