import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

export const useReader = () => {
  return createReader(process.cwd(), keystaticConfig);
};
