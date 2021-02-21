import { routes } from './routes';

export const core = () => ({
  init: () => {
    routes.init();
  },
});
