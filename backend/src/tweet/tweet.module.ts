import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweet } from './entities/tweet.entity';
import { TweetController } from './tweet.controller';
import { TweetService } from './tweet.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tweet])],
  controllers: [TweetController],
  providers: [TweetService],
  exports: [TypeOrmModule, TweetService]
})
export class TweetModule { }
