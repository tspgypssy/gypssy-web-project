import commonSagas from '../common/saga';
import loginFormSagas from '../modules/login/saga';
import landingPageFormSagas from '../modules/landingpage/saga';


export default [
  ...commonSagas,
 ...loginFormSagas,
 ...landingPageFormSagas,
];
