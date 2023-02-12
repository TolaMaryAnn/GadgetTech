import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";
import SwiperCore, { Autoplay } from "swiper";

export default function section3() {
  return (
    
      <section className="container mx-aut md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most popular</h1>

      {/* swiper */}

      <Swiper slidesPerView={2}
       loop={true}
      autoplay={{
        delay: 2000,}}
      >
        <SwiperSlide
        
        >
          {post()}
        </SwiperSlide>
        <SwiperSlide>
        {post1()}
        </SwiperSlide>
        <SwiperSlide>
        {post2()}
        </SwiperSlide>
        <SwiperSlide>
        {post3()}
        </SwiperSlide>
        <SwiperSlide>
        {post4()}
        </SwiperSlide>
        <SwiperSlide>
        {post5()}
        </SwiperSlide>
        <SwiperSlide>
        {post6()}
        </SwiperSlide>
        <SwiperSlide>
        {post7()}
        </SwiperSlide>
        <SwiperSlide>
        {post8()}
        </SwiperSlide>

       
          
      </Swiper>
    </section>
   
  );
}

function post() {
  return (
    <div className="grid">
      <div className="images">
        <Link href={"/"}>
          <Image
            src={"/assets/sec1.jpg"}
            width={400}
            height={400}
            
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
       <div className="category">
       <Link
          href={"/"}
          className=" text-bold-800 hover:text-sky-700"
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
          className="text-3xl md:text-4xl font-bold text-gray-900 hover:text-gray-400"
        >
          Phasellus maximus lectus non mauris vestibulum tempus curabitur
          placerat, odio eget
        </Link>
       </div>
      </div>
      <p className=" py-3">
        Sed elementum ut nulla nec mattis. Donec sodales purus at condimentum
        mollis. In quis ex sit amet dolor consectetur eleifend. Donec convallis
        vehicula sapien in ornare. Ut elit risus, lobortis ac lacus vitae,
        tincidunt aliquet mauris. Suspendisse potenti. Nam sed pretium neque.
        Aliquam quis mauris semper, malesuada felis a, scelerisque est.
      </p>

      <Author></Author>
    </div>
  );
}

function post1() {
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <Image
            src={"/assets/sld1.jpg"}
            width={330}
            height={330}
            
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
      <div className="category">
      <Link
          href={"/"}
          className=" text-bold-800 hover:text-sky-700"
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
          className="text-3xl md:text-4xl font-bold text-gray-900 hover:text-gray-400"
        >
          Phasellus maximus lectus non mauris vestibulum tempus curabitur
          placerat, odio eget
        </Link>
      </div>
      </div>
      <p className=" py-3">
        Sed elementum ut nulla nec mattis. Donec sodales purus at condimentum
        mollis. In quis ex sit amet dolor consectetur eleifend. Donec convallis
        vehicula sapien in ornare. Ut elit risus, lobortis ac lacus vitae,
        tincidunt aliquet mauris. Suspendisse potenti. Nam sed pretium neque.
        Aliquam quis mauris semper, malesuada felis a, scelerisque est.
      </p>

      <Author></Author>
    </div>
  );
}

function post2() {
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <Image
            src={"/assets/sld2.jpg"}
            width={400}
            height={400}
            
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
       <div className="category">
       <Link
          href={"/"}
          className=" text-bold-800 hover:text-sky-700"
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
          className="text-3xl md:text-4xl font-bold text-gray-900 hover:text-gray-400"
        >
          Phasellus maximus lectus non mauris vestibulum tempus curabitur
          placerat, odio eget
        </Link>
       </div>
      </div>
      <p className=" py-3">
        Sed elementum ut nulla nec mattis. Donec sodales purus at condimentum
        mollis. In quis ex sit amet dolor consectetur eleifend. Donec convallis
        vehicula sapien in ornare. Ut elit risus, lobortis ac lacus vitae,
        tincidunt aliquet mauris. Suspendisse potenti. Nam sed pretium neque.
        Aliquam quis mauris semper, malesuada felis a, scelerisque est.
      </p>

      <Author></Author>
    </div>
  );
}

function post3() {
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <Image
            src={"/assets/sld3.jpg"}
            width={400}
            height={200}
            
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
       <div className="category">
       <Link
          href={"/"}
          className=" text-bold-800 hover:text-sky-700"
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
          className="text-3xl md:text-4xl font-bold text-gray-900 hover:text-gray-400"
        >
          Phasellus maximus lectus non mauris vestibulum tempus curabitur
          placerat, odio eget
        </Link>
       </div>
      </div>
      <p className=" py-3">
        Sed elementum ut nulla nec mattis. Donec sodales purus at condimentum
        mollis. In quis ex sit amet dolor consectetur eleifend. Donec convallis
        vehicula sapien in ornare. Ut elit risus, lobortis ac lacus vitae,
        tincidunt aliquet mauris. Suspendisse potenti. Nam sed pretium neque.
        Aliquam quis mauris semper, malesuada felis a, scelerisque est.
      </p>

      <Author></Author>
    </div>
  );
}

function post4() {
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <Image
            src={"/assets/sld4.jpg"}
            width={400}
            height={400}
           
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
       <div className="category">
       <Link
          href={"/"}
          className=" text-bold-800 hover:text-sky-700"
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
          className="text-3xl md:text-4xl font-bold text-gray-900 hover:text-gray-400"
        >
          Phasellus maximus lectus non mauris vestibulum tempus curabitur
          placerat, odio eget
        </Link>
       </div>
      </div>
      <p className=" py-3">
        Sed elementum ut nulla nec mattis. Donec sodales purus at condimentum
        mollis. In quis ex sit amet dolor consectetur eleifend. Donec convallis
        vehicula sapien in ornare. Ut elit risus, lobortis ac lacus vitae,
        tincidunt aliquet mauris. Suspendisse potenti. Nam sed pretium neque.
        Aliquam quis mauris semper, malesuada felis a, scelerisque est.
      </p>

      <Author></Author>
    </div>
  );
}

function post5() {
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <Image
            src={"/assets/sld5.jpg"}
            width={400}
            height={400}
            
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
      <div className="category">
      <Link
          href={"/"}
          className=" text-bold-800 hover:text-sky-700"
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
          className="text-3xl md:text-4xl font-bold text-gray-900 hover:text-gray-400"
        >
          Phasellus maximus lectus non mauris vestibulum tempus curabitur
          placerat, odio eget
        </Link>
      </div>
      </div>
      <p className=" py-3">
        Sed elementum ut nulla nec mattis. Donec sodales purus at condimentum
        mollis. In quis ex sit amet dolor consectetur eleifend. Donec convallis
        vehicula sapien in ornare. Ut elit risus, lobortis ac lacus vitae,
        tincidunt aliquet mauris. Suspendisse potenti. Nam sed pretium neque.
        Aliquam quis mauris semper, malesuada felis a, scelerisque est.
      </p>

      <Author></Author>
    </div>
  );
}

function post6() {
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <Image
            src={"/assets/sld6.jpg"}
            width={400}
            height={400}
            
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
       <div className="category">
       <Link
          href={"/"}
          className=" text-bold-800 hover:text-sky-700"
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
          className="text-3xl md:text-4xl font-bold text-gray-900 hover:text-gray-400"
        >
          Phasellus maximus lectus non mauris vestibulum tempus curabitur
          placerat, odio eget
        </Link>
       </div>
      </div>
      <p className=" py-3">
        Sed elementum ut nulla nec mattis. Donec sodales purus at condimentum
        mollis. In quis ex sit amet dolor consectetur eleifend. Donec convallis
        vehicula sapien in ornare. Ut elit risus, lobortis ac lacus vitae,
        tincidunt aliquet mauris. Suspendisse potenti. Nam sed pretium neque.
        Aliquam quis mauris semper, malesuada felis a, scelerisque est.
      </p>

      <Author></Author>
    </div>
  );
}
function post7() {
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <Image
            src={"/assets/sld7.jpg"}
            width={350}
            height={350}
            
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
      <div className="category">
      <Link
          href={"/"}
          className=" text-bold-800 hover:text-sky-700"
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
          className="text-3xl md:text-4xl font-bold text-gray-900 hover:text-gray-400"
        >
          Phasellus maximus lectus non mauris vestibulum tempus curabitur
          placerat, odio eget
        </Link>
      </div>
      </div>
      <p className=" py-3">
        Sed elementum ut nulla nec mattis. Donec sodales purus at condimentum
        mollis. In quis ex sit amet dolor consectetur eleifend. Donec convallis
        vehicula sapien in ornare. Ut elit risus, lobortis ac lacus vitae,
        tincidunt aliquet mauris. Suspendisse potenti. Nam sed pretium neque.
        Aliquam quis mauris semper, malesuada felis a, scelerisque est.
      </p>

      <Author></Author>
    </div>
  );
}

function post8() {
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <Image
            src={"/assets/sld8.jpg"}
            width={400}
            height={400}
            
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
       <div className="category">
       <Link
          href={"/"}
          className=" text-bold-800 hover:text-sky-700"
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
          className="text-3xl md:text-4xl font-bold text-gray-900 hover:text-gray-400"
        >
          Phasellus maximus lectus non mauris vestibulum tempus curabitur
          placerat, odio eget
        </Link>
       </div>
      </div>
      <p className=" py-3">
        Sed elementum ut nulla nec mattis. Donec sodales purus at condimentum
        mollis. In quis ex sit amet dolor consectetur eleifend. Donec convallis
        vehicula sapien in ornare. Ut elit risus, lobortis ac lacus vitae,
        tincidunt aliquet mauris. Suspendisse potenti. Nam sed pretium neque.
        Aliquam quis mauris semper, malesuada felis a, scelerisque est.
      </p>

      <Author></Author>
    </div>
  );
}
