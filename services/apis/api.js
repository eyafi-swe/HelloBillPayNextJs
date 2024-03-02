import axios from "../plugins/axios";
import Auth from "./Auth";
import FAQ from "./FAQ";
import ManagePaymentMethod from "./ManagePaymentMethod";
import MobileRecharge from "./MobileRecharge";
import Profile from "./Profile";

export default {
  auth: new Auth(axios),
  profile: new Profile(axios),
  faq: new FAQ(axios),
  managePaymentMethod: new ManagePaymentMethod(axios),
  mobileRecharge: new MobileRecharge(axios),
}