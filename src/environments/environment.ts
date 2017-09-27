// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC6IRDr7acHw_thhpdfiIsxU7TPHvBLiwk',
    authDomain: 'notas-en-angular.firebaseapp.com',
    databaseURL: 'https://notas-en-angular.firebaseio.com',
    projectId: 'notas-en-angular',
    storageBucket: 'notas-en-angular.appspot.com',
    messagingSenderId: '1009052024734'
  }
};
