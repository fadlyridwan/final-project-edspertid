import {
  IconBrandFacebookFilled,
  IconBrandGithubFilled,
  IconBrandTwitterFilled,
  IconMailFilled,
} from "@tabler/icons-react";
import Logo from "../images/e-commerce.png";

function Footer() {
  return (
    <>
      <footer className="footer p-10 bg-sky-900 text-white">
        <div>
          <div
            onClick={() => navigate("/")}
            className="navbar-start cursor-pointer pb-2"
          >
            <img className={"h-12 w-56"} src={Logo} alt="img" />
          </div>
          <p className="pb-4">
            MFR Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
          <ul className="flex space-x-6">
            <li className="text-sm font-bold text-white cursor-pointer">
              <IconMailFilled />
            </li>
            <li className="text-sm font-bold text-white cursor-pointer">
              <IconBrandGithubFilled />
            </li>
            <li className="text-sm font-bold text-white cursor-pointer">
              <IconBrandTwitterFilled />
            </li>
            <li className="text-sm font-bold text-white cursor-pointer">
              <IconBrandFacebookFilled />
            </li>
          </ul>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
