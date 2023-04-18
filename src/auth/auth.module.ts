import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.services";
import { UserModule } from "src/user/user.module";


@Module({
    imports: [UserModule],
    controllers: [AuthController],
    providers: [ AuthService]
})
export class AuthModule{}