import Link from "next/link";

const Index = () => (
  <div>
    <h1>SSR Magician</h1>
    <Link href="/about" passHref={true}>
      <button>About</button>
    </Link>
    <Link href="/robots" passHref={true}>
      <button>Robots</button>
    </Link>
  </div>
);

export default Index;
