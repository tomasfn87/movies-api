import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [
    MoviesModule,
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PASSWORD}@cluster0.z0mml.mongodb.net/${process.env.MONGO_ATLAS_DB}?retryWrites=true&w=majority`
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
