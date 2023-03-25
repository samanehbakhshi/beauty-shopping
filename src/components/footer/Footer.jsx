import css from "./Footer.module.css";
import Logo from "../../assets/logo.png";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
} from "@heroicons/react/outline";
function Footer() {
  return (
    <div className={css.footerWrapper}>
   
      <hr/>
      <div className={css.wrapper}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <span className={css.logoText}>amazon</span>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon />
              111 noth avenue Oriando, FL 32801
            </span>

          <span  className={css.pngLine}> 
            <PhoneIcon />
            352-206-4415
          </span>
          <span  className={css.pngLine}>
            <InboxIcon />
            <a href="#">support@amazon.com</a>
          </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span  className={css.pngLine}>
              <LoginIcon />
              <a href="#">Sign in</a>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span  className={css.pngLine}>
              <UsersIcon />
             <a href="#"> About us</a>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Privacy</span>
            <span className={css.pngLine}>
              <LinkIcon />
              <a href="3">Safty Privacy & Terms</a>
            </span>
          </div>
      </div>
    </div>
      <div className={css.copyright}>
        <span>Copyright&copy;2022 by amazon inc</span>
        <span>All right reserved</span>
      </div>
    </div>
  );
}

export default Footer;
