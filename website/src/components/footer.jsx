import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex w-full">
      <div className="flex-initial w-1/2">
        <p>USEFUL LINKS</p>
        <a href="/" className="block">Home</a>
        <a href="about" className="block">About</a>
      </div>
      <div className="flex-initial w-1/2">
        <p>CONTACT US</p>
        <p>Contact info will go here eventually</p>
      </div>
    </footer>
  );
};

export default Footer;