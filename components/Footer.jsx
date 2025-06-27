import {
  FacebookIcon,
  PinterestIcon,
  InstagramIcon,
} from "./../components/Icons";
import useMediaQuery from "./../utils/useMediaquery";
import Image from "next/image";

function Footer() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <footer
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        marginTop: "200px",
        maxHeight: "300px",
      }}
    >
      <Image
        src="/images/pattern-hills.svg"
        alt="Pattern Hills"
        fill
        style={{
          objectFit: "cover",
          objectPosition: isMobile ? "80% 20%" : "top",
        }}
        priority
      />
      <div className="iconList">
        <FacebookIcon />
        <PinterestIcon />
        <InstagramIcon />
      </div>
    </footer>
  );
}

export default Footer;
