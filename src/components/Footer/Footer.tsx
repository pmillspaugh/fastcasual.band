import Image from "next/image";
import youtube from "@/images/icons/youtube.svg";
import spotify from "@/images/icons/spotify.svg";
import instagram from "@/images/icons/instagram.svg";

const Footer = () => {
  return (
    <footer className="p-6 flex-shrink-0 flex gap-4 justify-center items-center">
      <a href="">
        <Image
          src={spotify}
          alt="Fast Casual on Spotify"
          width={24}
          height={24}
        />
      </a>
      <a href="https://www.youtube.com/watch?v=ZhxyLEpEIvI">
        <Image
          src={youtube}
          alt="Fast Casual on YouTube"
          width={24}
          height={24}
        />
      </a>
      <a href="">
        <Image
          src={instagram}
          alt="Fast Casual on Instagram"
          width={24}
          height={24}
        />
      </a>
    </footer>
  );
};

export default Footer;
