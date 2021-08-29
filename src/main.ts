import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { MainModule } from "./module";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(MainModule);

  const baseDocumentConfig = new DocumentBuilder()
    .setTitle("NestJS API")
    .setDescription("Example API documentation for NestJS example project")
    .setVersion("2.0")
    .build();

  const document = SwaggerModule.createDocument(app, baseDocumentConfig);
  SwaggerModule.setup("/docs", app, document);

  await app.listen(3000);
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();
