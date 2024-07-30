import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href={"/"}>
      <div className="size-14 relative">
        <Image src={"/logo.png"} fill alt="Logo" />
      </div>
    </Link>
  );
}

export default Logo;
