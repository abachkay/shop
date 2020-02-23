import { RandomStringsGeneratorService } from './random-strings-generator.service';

export function randomStringGeneratorFactory(length: number) {
  return () => new RandomStringsGeneratorService(length);
}
