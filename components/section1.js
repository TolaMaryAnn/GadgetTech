import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
export default function section1() {
  SwiperCore.use([Autoplay]);
  return (
    <section className="py-16 bg-red-400">
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>

        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
        >
          <SwiperSlide> {Slide()}</SwiperSlide>
          <SwiperSlide> {Slide2()}</SwiperSlide>
          <SwiperSlide> {Slide3()}</SwiperSlide>
          <SwiperSlide> {Slide4()}</SwiperSlide>
          <SwiperSlide> {Slide5()}</SwiperSlide>
         
        </Swiper>
      </div>
    </section>
  );
}

function Slide() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={"/"}>
          <Image src={"/assets/sec1.jpg"} width={400} height={400} />
        </Link>
      </div>

      <div className="info flex justify-center flex-col">
        <div className="category">
          <Link
            href={"/"}
            className="text-white text-bold-800 hover:text-sky-700"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Link>

          <Link href={"/"} className="hover:text-sky-100 ">
            - Feburary 4th, 2023
          </Link>
        </div>

        <div className="title">
          <Link
            href={"/"}
            className="text-3xl md:text-5xl font-bold text-gray-900 hover:text-gray-400"
          >
            Phasellus maximus lectus non mauris vestibulum tempus curabitur
            placerat, odio eget
          </Link>
        </div>
        <p className="text-white py-3">
          Sed elementum ut nulla nec mattis. Donec sodales purus at condimentum
          mollis. In quis ex sit amet dolor consectetur eleifend. Donec
          convallis vehicula sapien in ornare. Ut elit risus, lobortis ac lacus
          vitae, tincidunt aliquet mauris. Suspendisse potenti. Nam sed pretium
          neque. Aliquam quis mauris semper, malesuada felis a, scelerisque est.
        </p>

        <Author></Author>
      </div>
    </div>
  );
}

function Slide2() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={"/"}>
          <Image src={"/assets/sld1.jpg"} width={400} height={400} />
        </Link>
      </div>

      <div className="info flex justify-center flex-col">
        <div className="category">
          <Link
            href={"/"}
            className="text-white text-bold-800 hover:text-sky-700"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Link>

          <Link href={"/"} className="hover:text-sky-100 ">
            - Feburary 4th, 2023
          </Link>
        </div>

        <div className="title">
          <Link
            href={"/"}
            className="text-3xl md:text-5xl font-bold text-gray-900 hover:text-gray-400"
          >
            Phasellus maximus lectus non mauris vestibulum tempus curabitur
            placerat, odio eget
          </Link>
        </div>
        <p className="text-white py-3">
          Sed elementum ut nulla nec mattis. Donec sodales purus at condimentum
          mollis. In quis ex sit amet dolor consectetur eleifend. Donec
          convallis vehicula sapien in ornare. Ut elit risus, lobortis ac lacus
          vitae, tincidunt aliquet mauris. Suspendisse potenti. Nam sed pretium
          neque. Aliquam quis mauris semper, malesuada felis a, scelerisque est.
        </p>

        <Author></Author>
      </div>
    </div>
  );
}

function Slide3() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={"/"}>
          <Image src={"/assets/sld2.jpg"} width={400} height={400} />
        </Link>
      </div>

      <div className="info flex justify-center flex-col">
        <div className="category">
          <Link
            href={"/"}
            className="text-white text-bold-800 hover:text-sky-700"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Link>

          <Link href={"/"} className="hover:text-sky-100 ">
            - Feburary 4th, 2023
          </Link>
        </div>

        <div className="title">
          <Link
            href={"/"}
            className="text-3xl md:text-5xl font-bold text-gray-900 hover:text-gray-400"
          >
            Phasellus maximus lectus non mauris vestibulum tempus curabitur
            placerat, odio eget
          </Link>
        </div>
        <p className="text-white py-3">
          Sed elementum ut nulla nec mattis. Donec sodales purus at condimentum
          mollis. In quis ex sit amet dolor consectetur eleifend. Donec
          convallis vehicula sapien in ornare. Ut elit risus, lobortis ac lacus
          vitae, tincidunt aliquet mauris. Suspendisse potenti. Nam sed pretium
          neque. Aliquam quis mauris semper, malesuada felis a, scelerisque est.
        </p>

        <Author></Author>
      </div>
    </div>
  );
}

function Slide4() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={"/"}>
          <Image src={"/assets/sld3.jpg"} width={400} height={400} />
        </Link>
      </div>

      <div className="info flex justify-center flex-col">
        <div className="category">
          <Link
            href={"/"}
            className="text-white text-bold-800 hover:text-sky-700"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Link>

          <Link href={"/"} className="hover:text-sky-100 ">
            - Feburary 4th, 2023
          </Link>
        </div>

        <div className="title">
          <Link
            href={"/"}
            className="text-3xl md:text-5xl font-bold text-gray-900 hover:text-gray-400"
          >
            Phasellus maximus lectus non mauris vestibulum tempus curabitur
            placerat, odio eget
          </Link>
        </div>
        <p className="text-white py-3">
          Sed elementum ut nulla nec mattis. Donec sodales purus at condimentum
          mollis. In quis ex sit amet dolor consectetur eleifend. Donec
          convallis vehicula sapien in ornare. Ut elit risus, lobortis ac lacus
          vitae, tincidunt aliquet mauris. Suspendisse potenti. Nam sed pretium
          neque. Aliquam quis mauris semper, malesuada felis a, scelerisque est.
        </p>

        <Author></Author>
      </div>
    </div>
  );
}

function Slide5() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={"/"}>
          <Image src={"/assets/sld4.jpg"} width={400} height={400} />
        </Link>
      </div>

      <div className="info flex justify-center flex-col">
        <div className="category">
          <Link
            href={"/"}
            className="text-white text-bold-800 hover:text-sky-700"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Link>

          <Link href={"/"} className="hover:text-sky-100 ">
            - Feburary 4th, 2023
          </Link>
        </div>

        <div className="title">
          <Link
            href={"/"}
            className="text-3xl md:text-5xl font-bold text-gray-900 hover:text-gray-400"
          >
            Phasellus maximus lectus non mauris vestibulum tempus curabitur
            placerat, odio eget
          </Link>
        </div>
        <p className="text-white py-3">
          Sed elementum ut nulla nec mattis. Donec sodales purus at condimentum
          mollis. In quis ex sit amet dolor consectetur eleifend. Donec
          convallis vehicula sapien in ornare. Ut elit risus, lobortis ac lacus
          vitae, tincidunt aliquet mauris. Suspendisse potenti. Nam sed pretium
          neque. Aliquam quis mauris semper, malesuada felis a, scelerisque est.
        </p>

        <Author></Author>
      </div>
    </div>
  );
}
