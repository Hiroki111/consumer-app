import nextRoutes from 'next-routes';
import { HOME, RESTAURANT_LIST, COMPONENTS, SIGNIN } from './route-names';

export default nextRoutes()
  .add(HOME, '/')
  .add(RESTAURANT_LIST, `/${RESTAURANT_LIST}`)
  .add(COMPONENTS, `/${COMPONENTS}`)
  .add(SIGNIN, `/${SIGNIN}`);
