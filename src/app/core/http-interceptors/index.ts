import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HTTPInterceptor } from './http-interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HTTPInterceptor, multi: true }
];
