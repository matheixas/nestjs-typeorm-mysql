import { AuthResetDto } from '../auth/dto/auth-reset.dto';
import { resetToken } from './reset-token.mock';

export const authResetDto: AuthResetDto = {
  password: '654321',
  token: resetToken,
};
