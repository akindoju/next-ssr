import Link from "next/link";
import Image from "../components/Image";

const About = () => (
  <div style={{ fontSize: "20px", color: "red" }}>
    <h1>About</h1>
    <Image />
    <Link href="/" passHref={true}>
      <button>Back</button>
    </Link>
  </div>
);

export default About;
