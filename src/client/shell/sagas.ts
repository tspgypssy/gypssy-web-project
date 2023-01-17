import commonSagas from '../common/saga';
import dashboardFormSagas from '../modules/dashboard/saga';
import loginFormSagas from '../modules/login/saga';
import landingPageFormSagas from '../modules/landingpage/saga';


export default [
  ...commonSagas,
  ...dashboardFormSagas,
 ...loginFormSagas,
 ...landingPageFormSagas,
];
