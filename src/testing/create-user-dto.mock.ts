import { Role } from '../enums/role.enum';
import { CreateUserDTO } from '../user/dto/create-user.dto';

export const createUserDTO: CreateUserDTO = {
  birthAt: '2000-01-01',
  email: 'matheus@teste.com',
  name: 'Matheus Teixeira',
  password: '123456',
  role: Role.User,
};
