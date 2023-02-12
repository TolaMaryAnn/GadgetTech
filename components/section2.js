import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";

import fetcher from "@/lib/fetcher";




export default function section2() {


  
  const {data,isLoading,isError} = fetcher('api/posts')
  if(data) console.log(data)

//  getPost().then(res => console.log(res))
  return (
    <section className=" container mx-auto md-px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Post</h1>

      {/* grid col */}
      <div className="grid md-grid-cols-2 lg:grid-cols-3 gap-14">
        {post()}
        {post1()}
        {post2()}
        {post3()}
        {post4()}
        {post5()}
        {post6()}
        {post7()}
        {post8()}
       {/* {
        data.map((value, index) => (
          <Post data={value} key={index}></Post>
        ))
       } */}
      </div>
    </section>
  );
}

function post() {


  
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <Image
            src={"/assets/sec1.jpg"}
            
            width={500}
            height={500}
            className="rounded"
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
          className="text-xl font-bold text-gray-900 hover:text-gray-400"
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
            className="rounded"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
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
          className="text-xl font-bold text-gray-900 hover:text-gray-400"
        >
          Phasellus maximus lectus non mauris vestibulum tempus curabitur
          placerat, odio eget
        </Link>
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
            className="rounded"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
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
          className="text-xl font-bold text-gray-900 hover:text-gray-400"
        >
          Phasellus maximus lectus non mauris vestibulum tempus curabitur
          placerat, odio eget
        </Link>
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
            width={500}
            height={500}
            className="rounded"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
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
          className="text-xl font-bold text-gray-900 hover:text-gray-400"
        >
          Phasellus maximus lectus non mauris vestibulum tempus curabitur
          placerat, odio eget
        </Link>
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
            width={500}
            height={500}
            className="rounded"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
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
          className="text-xl font-bold text-gray-900 hover:text-gray-400"
        >
          Phasellus maximus lectus non mauris vestibulum tempus curabitur
          placerat, odio eget
        </Link>
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
            width={500}
            height={500}
            className="rounded"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
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
          className="text-xl font-bold text-gray-900 hover:text-gray-400"
        >
          Phasellus maximus lectus non mauris vestibulum tempus curabitur
          placerat, odio eget
        </Link>
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
            width={500}
            height={500}
            className="rounded"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
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
          className="text-xl font-bold text-gray-900 hover:text-gray-400"
        >
          Phasellus maximus lectus non mauris vestibulum tempus curabitur
          placerat, odio eget
        </Link>
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
            className="rounded"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
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
          className="text-xl font-bold text-gray-900 hover:text-gray-400"
        >
          Phasellus maximus lectus non mauris vestibulum tempus curabitur
          placerat, odio eget
        </Link>
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
            width={500}
            height={500}
            className="rounded"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
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
          className="text-xl font-bold text-gray-900 hover:text-gray-400"
        >
          Phasellus maximus lectus non mauris vestibulum tempus curabitur
          placerat, odio eget
        </Link>
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
