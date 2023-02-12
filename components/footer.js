import Link from "next/link";
import { ImFacebook,ImTwitter, ImYoutube } from "react-icons/im";

export default function footer() {

    
  return (
    
    <footer className="bg-red-200">
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href={"/"}>
              <ImFacebook color="#dc2626" />
            </Link>

            <Link href={"/"}>
              <ImTwitter color="#dc2626" />
            </Link>

            <Link href={"/"}>
              <ImYoutube color="#dc2626" />
            </Link>
          </div>
          
          <p className="py-5 text-gray-900 ">
            Copyright @2023 All right reserved | This template is made by Tola
          </p>
          <p className="text-gray-900 text-center">
            Terms & Condition
          </p>
        </div>
      </div>
    </footer>
  );
}
