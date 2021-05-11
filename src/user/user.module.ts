import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthModule } from 'src/auth/auth.module';
import { AuthMiddleware } from 'src/auth/auth.middleware';
import { FavoritesModule } from 'src/favorites/favorites.module';


@Module({
    imports: [
        AuthModule,
        FavoritesModule,
        TypeOrmModule.forFeature([UserRepository]),
    ],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]

})
export class UserModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AuthMiddleware)
            .forRoutes(
                { path: "users", method: RequestMethod.GET },
                { path: "users/favorites", method: RequestMethod.POST },
                { path: "users/favorites", method: RequestMethod.GET }
            );
    }
}
