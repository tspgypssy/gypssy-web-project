import commonSagas from '../common/saga';
import dashboardFormSagas from '../modules/dashboard/saga';
import loginFormSagas from '../modules/login/saga';
import peoplefeedFormSagas from '../modules/peoplefeed/saga';
import landingPageFormSagas from '../modules/landingpage/saga';
import personalDetailsPageFormSagas from '../modules/personal-details/saga';


export default [
  ...commonSagas,
  ...dashboardFormSagas,
 ...loginFormSagas,
 ...peoplefeedFormSagas,
 ...landingPageFormSagas,
 ...personalDetailsPageFormSagas
];
