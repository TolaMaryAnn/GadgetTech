import { ImFacebook,ImTwitter, ImYoutube } from "react-icons/im";
import Link from "next/link";
export default function header() {
  return (
    <header className="bg-red-50">
      <div className="xl-container xl-mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
          <input
            type="text"
            placeholder="Search..."
            className="mt-1 block w-60 px-3 py-2 bg-white border-state-300 text-sm shadow-sm placeholder-slate-800 rounded-full focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div className="shrink w-80 sm:order-2 ">
            <Link href={'/'} className="font-bold upp text-3xl">
             GadgetTECH
            </Link>
          
        </div>

        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
            <Link href={'/'}>
            <ImFacebook color="#dc2626"/>
            </Link>
            
            <Link href={'/'}>
            <ImTwitter  color="#dc2626"/>
            </Link>
            
            <Link href={'/'}>
            <ImYoutube  color="#dc2626"/>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
