import Image from "next/image";
import Link from "next/link";
export default function author() {
  return (
    <div className="author flex py-5">
      <Image
        src={"/assets/author.jpg"}
        className="rounded-full"
        width={60}
        height={60}
      />

      <div className="flex flex-col justify-center px-4">
        <Link
          href={"/"}
          className="text-md font-bold text-gray-800 hover:text-gray-500"
        >
          {" "}
          Omotola MaryAnn
        </Link>

        <span className="text-sm text-gray-900 ">CEO and founder</span>
      </div>
    </div>
  );
}
