import { type SchemaTypeDefinition } from 'sanity';
import chef from './chefs';
import food from './foods';
import faq from './faq';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [food, chef, faq],
};
