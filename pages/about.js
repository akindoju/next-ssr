import Link from "next/link";

const About = () => (
  <div style={{ fontSize: "20px", color: "blue" }}>
    <h1>About</h1>
    <Link href="/" passHref={true}>
      <button>Back</button>
    </Link>
  </div>
);

export default About;
