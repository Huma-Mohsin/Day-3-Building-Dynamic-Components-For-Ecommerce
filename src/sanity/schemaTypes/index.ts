import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './MockApiProducts'





export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema],
}
