import { Brand } from "src/brands/entities/brand.entity";
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Corolla',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Civic',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Cherokee',
    createdAt: new Date().getTime(),
  }
]