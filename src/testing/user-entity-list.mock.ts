import { Role } from '../enums/role.enum';
import { UserEntity } from '../user/entity/user.entity';

export const userEntityList: UserEntity[] = [
  {
    name: 'Matheus Teixeira',
    email: 'matheus@teste.com',
    birthAt: new Date('2000-01-01'),
    id: 1,
    password: '$2b$10$w7pMkIjmRYvFJkqkgBl5EenVLbYHlJEY4LbYGKxQz/IGZoCQGdoU6',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Fernandinho Fernandes',
    email: 'fernandinho@teste.com',
    birthAt: new Date('2000-01-01'),
    id: 2,
    password: '$2b$10$w7pMkIjmRYvFJkqkgBl5EenVLbYHlJEY4LbYGKxQz/IGZoCQGdoU6',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Fabinho Studart',
    email: 'fabinho@teste.com',
    birthAt: new Date('2000-01-01'),
    id: 3,
    password: '$2b$10$w7pMkIjmRYvFJkqkgBl5EenVLbYHlJEY4LbYGKxQz/IGZoCQGdoU6',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
