import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full px-2 py-2 bg-cyan-500 flex flex-row items-center fixed z-100">
      <Link href="/">
        <Image
          src="/SPSMediaLabel.svg"
          alt="SPS Media Label"
          width={96}
          height={96}
          className="cursor-pointer"
        ></Image>
      </Link>
    </header>
  );
};
