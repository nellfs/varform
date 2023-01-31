import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class LocalAuthGuard extends AuthGuard("local") {
  constructor() {
    super();
  }

  handleRequest(err, user) {
    if (err || !user) {
      throw new UnauthorizedException(err?.message);
    }
    return user;
  }
}
