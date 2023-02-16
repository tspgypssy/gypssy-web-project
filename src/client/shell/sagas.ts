import commonSagas from '../common/saga';
import loginFormSagas from '../modules/login/saga';
import landingPageFormSagas from '../modules/landingpage/saga';
import userFormSagas from '../modules/user/saga';
import tripDetailFormSagas from '../modules/trip-detail/saga';
import hostFormSagas from '../modules/host/saga';

export default [
  ...commonSagas,
 ...loginFormSagas,
 ...landingPageFormSagas,
 ...userFormSagas,
 ...tripDetailFormSagas,
 ...hostFormSagas
];
