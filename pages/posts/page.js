import Format from "@/layout/format";
import Author from "@/components/_child/author";
import Image from "next/image";
import Related from "@/components/_child/related";
import { useRouter } from "next/router";


export default function Page() {
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Author></Author>
        </div>

        <div className="post py-10">
          <h1 className="font-bold text-3xl text-center pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae auctor justo. Nullam dictum quis ligula sed rhoncus.
          </h1>
          <p className="tex-gray-500 text-xl text-center">
            Nulla viverra sem vel nibh congue fermentum. Vestibulum a turpis
            libero. Phasellus maximus lectus non mauris vestibulum tempus.
          </p>
          <div className="py-10">
            <Image src={"/assets/post1.jpg"} width={900} height={600} />
          </div>
          <div className="content text gray-600 text-lg flex flex-col gap-4">
            <p>
              Integer feugiat porta suscipit. Integer consequat euismod arcu eu
              facilisis. Pellentesque tempor libero iaculis nunc pretium
              sodales. Donec tristique ex et purus rutrum, vulputate placerat
              sem aliquet. Pellentesque at justo ut mauris sollicitudin rhoncus.
              Suspendisse vitae mauris ante.
            </p>
            <p>
              Nam ante metus, consectetur vitae tortor ac, posuere condimentum
              tellus. Maecenas congue venenatis turpis, eu sagittis purus
              efficitur sit amet. Aenean vitae sollicitudin purus, ut rhoncus
              sapien. Integer rhoncus metus leo, eget viverra ante molestie a.
              Aenean lectus velit, fermentum et augue eu, consectetur convallis
              odio. Vestibulum id nisi dolor. Praesent a viverra leo, sed
              sollicitudin lorem.
            </p>
            <p>
              Donec volutpat eleifend sem a euismod. Sed varius gravida lectus
              sit amet condimentum. Nam mollis velit vel libero vulputate
              aliquet. Nunc eget diam tellus. Fusce a felis lorem. Nulla dui
              libero, sodales vel justo a, bibendum ullamcorper enim. Etiam vel
              interdum risus. Nunc bibendum sit amet magna at tempor. Fusce
              justo ipsum, posuere in neque in, laoreet ornare elit. Donec sit
              amet leo interdum, pulvinar tortor sit amet, tincidunt sapien.
            </p>
          </div>
        </div>
        <Related></Related>
      </section>
    </Format>
  );
}
