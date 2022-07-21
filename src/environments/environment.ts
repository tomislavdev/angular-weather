// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherApiKey: '0b3e7cd70eed76302d687d1c3102137c',
  weatherApiOneCallEndpoint: 'https://api.openweathermap.org/data/2.5/onecall',
  weatherApiMeasurementsEndpoint: 'http://api.openweathermap.org/data/3.0/measurements',
  weatherApiIconsEndpoint: 'http://openweathermap.org/img/wn/',
  defaultLat: '42.6977',
  defaultLon: '23.3219',
  defaultStationId: '607da83509e7430001b9e5a0',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
