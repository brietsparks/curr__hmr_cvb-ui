import { app, builderService } from '../config';

export const AUTH_CONFIG = {
  domain: 'bsapaka.auth0.com',
  clientId: '4FXSDQeNobJ2XHR16pkKjLzfuoAGSyb5',
  callbackUrl: app.url + '/callback',
  builderAudience: builderService.auth0.identifier
};
