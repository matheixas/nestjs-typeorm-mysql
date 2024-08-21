import { FileService } from '../auth/file/file.service';

export const fileServiceMock = {
  provide: FileService,
  useValue: {
    getDestinationPath: jest.fn(),
    upload: jest.fn().mockResolvedValue(''),
  },
};
