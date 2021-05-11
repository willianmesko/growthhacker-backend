import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { Favorites } from './favorites/favorites.entity';
import { FavoritesModule } from './favorites/favorites.module';
import { AuthModule } from './auth/auth.module';
import { GamesModule } from './games/games.module';
import { EletronicModule } from './eletronic/eletronic.module';
import { AttributeModule } from './attributes/attribute.module';
import { Games } from './games/games.entity';
import { Eletronic } from './eletronic/eletronic.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      // @ts-ignore
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [User, Favorites, Games, Eletronic,],

    }),
    UserModule,
    GamesModule,
    EletronicModule,
    FavoritesModule,
    AttributeModule,
    AuthModule,
  ],

})
export class AppModule {
}
