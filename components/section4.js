import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"
export default function section4() {
  return (
    <section className="container mx-auto md:px-20 py-16">
        <div className="grid lg:grid-cols-2">
            <div className="item">
            <h1 className="font-bold text-4xl py-12">Nullam dictum quis</h1>
            <div className="flex flex-col gap-6">
                {/* posts */}
                {Post()}
                {Post1()}
                {Post2()}
                {Post3()}
                {Post4()}
                {Post5()}
                {Post6()}
            </div>
            </div>
            <div className="item">
            <h1 className="font-bold text-4xl py-12">Donec convallis</h1>
            <div className="flex flex-col gap-6">
                {/* posts */}
                {Post()}
                {Post1()}
                {Post2()}
                {Post3()}
                {Post4()}
                {Post5()}
                {Post6()}
            </div>
            
            
            </div>
        </div>
    </section>
  )
}

function Post(){
    return(
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
            <Link href={"/"}>
          <Image
            className="rounded"
            src={"/assets/sec1.jpg"}
            width={300}
            height={250}
            
          />
            </Link>
        </div>

            <div className="info flex justify-center flex-col">
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
          className="text-xl  font-bold text-gray-900 hover:text-gray-400"
        >
          Phasellus maximus lectus non mauris vestibulum tempus curabitur
          placerat, odio eget
        </Link>
            </div>
        <Author></Author>
            </div>
            
        </div>
    )
}

function Post1(){
    return(
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
            <Link href={"/"}>
          <Image
            className="rounded"
            src={"/assets/sld1.jpg"}
            width={300}
            height={250}
            
          />
            </Link>
        </div>

            <div className="info flex justify-center flex-col">
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
          className="text-xl  font-bold text-gray-900 hover:text-gray-400"
        >
          Phasellus maximus lectus non mauris vestibulum tempus curabitur
          placerat, odio eget
        </Link>
            </div>
        <Author></Author>
            </div>
            
        </div>
    )
}

function Post2(){
    return(
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
            <Link href={"/"}>
          <Image
            className="rounded"
            src={"/assets/sld2.jpg"}
            width={300}
            height={250}
            
          />
            </Link>
        </div>

            <div className="info flex justify-center flex-col">
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
          className="text-xl  font-bold text-gray-900 hover:text-gray-400"
        >
          Phasellus maximus lectus non mauris vestibulum tempus curabitur
          placerat, odio eget
        </Link>
            </div>
        <Author></Author>
            </div>
            
        </div>
    )
}

function Post3(){
    return(
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
            <Link href={"/"}>
          <Image
            className="rounded"
            src={"/assets/sld3.jpg"}
            width={300}
            height={250}
            
          />
            </Link>
        </div>

            <div className="info flex justify-center flex-col">
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
          className="text-xl  font-bold text-gray-900 hover:text-gray-400"
        >
          Phasellus maximus lectus non mauris vestibulum tempus curabitur
          placerat, odio eget
        </Link>
            </div>
        <Author></Author>
            </div>
            
        </div>
    )
}

function Post4(){
    return(
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
            <Link href={"/"}>
          <Image
            className="rounded"
            src={"/assets/sld8.jpg"}
            width={300}
            height={250}
            
          />
            </Link>
        </div>

            <div className="info flex justify-center flex-col">
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
          className="text-xl  font-bold text-gray-900 hover:text-gray-400"
        >
          Phasellus maximus lectus non mauris vestibulum tempus curabitur
          placerat, odio eget
        </Link>
            </div>
        <Author></Author>
            </div>
            
        </div>
    )
}

function Post5(){
    return(
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
            <Link href={"/"}>
          <Image
            className="rounded"
            src={"/assets/sld4.jpg"}
            width={300}
            height={250}
            
          />
            </Link>
        </div>

            <div className="info flex justify-center flex-col">
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
          className="text-xl  font-bold text-gray-900 hover:text-gray-400"
        >
          Phasellus maximus lectus non mauris vestibulum tempus curabitur
          placerat, odio eget
        </Link>
            </div>
        <Author></Author>
            </div>
            
        </div>
    )
}

function Post6(){
    return(
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
            <Link href={"/"}>
          <Image
            className="rounded"
            src={"/assets/sld5.jpg"}
            width={300}
            height={250}
            
          />
            </Link>
        </div>

            <div className="info flex justify-center flex-col">
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
          className="text-xl  font-bold text-gray-900 hover:text-gray-400"
        >
          Phasellus maximus lectus non mauris vestibulum tempus curabitur
          placerat, odio eget
        </Link>
            </div>
        <Author></Author>
            </div>
            
        </div>
    )
}