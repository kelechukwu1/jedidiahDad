import father from "../../public/images/about/father.webp";
import RootLayout from "@/components/shared/layout/root-layout";
import SectionHeader from "@/components/shared/section-header";
import Image from "next/image";

export default function Blog() {
  return (
    <RootLayout title="Blog - Dr Passy Amaraegbu | Living a life of purity, power and prosperity">
      <section className="load-in pt-5 mb-10 md:flex gap-10 md:mx-16">
        <div className="">
          <SectionHeader title="Blog" pageTitle />
        </div>
        <div className="text-white text-xl mt-16 pr-48">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
          iusto libero sint ab error tempora assumenda.
        </div>
      </section>

      <section className="md:mx-16 mb-20 text-white">
        <div className="md:flex gap-10">
          <div className="w-2/3">
            <Image
              src={father}
              height={700}
              width={500}
              alt={"this"}
              className="w-full h-full"
            />
          </div>
          <div>
            <div className="mb-5">
              <div className="flex gap-5">
                <div>
                  <Image
                    src={father}
                    height={250}
                    width={250}
                    alt={"this"}
                    className="h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="bg-gray-100 rounded px-3 py-1 text-black">
                      Reality
                    </div>
                    <div className="text-gray-300">2 min read</div>
                  </div>
                  <div className="text-2xl">
                    Making things working out regardless
                  </div>
                  <div className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minus, earum?
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <div className="flex gap-5">
                <div>
                  <Image
                    src={father}
                    height={250}
                    width={250}
                    alt={"this"}
                    className="h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="bg-gray-100 rounded px-5 py-1 text-black">
                      Love
                    </div>
                    <div className="text-gray-300">5 min read</div>
                  </div>
                  <div className="text-2xl">
                    Making things working out regardless
                  </div>
                  <div className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minus, earum?
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex gap-5">
                <div>
                  <Image
                    src={father}
                    height={250}
                    width={250}
                    alt={"this"}
                    className="h-full"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="bg-gray-100 rounded px-3 py-1 text-black">
                      Reality
                    </div>
                    <div className="text-gray-300">2 min read</div>
                  </div>
                  <div className="text-2xl">
                    Making things working out regardless
                  </div>
                  <div className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minus, earum?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="md:mx-16 text-white">
        <div className="space-y-10">
          <div className="flex gap-x-10">
            <div className="p-4 border border-gray-300">
              <div className="mb-5">
                <Image src={father} height={350} width={350} alt={"this"} />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <div className="bg-gray-100 rounded px-3 py-1 text-black">
                    Reality
                  </div>
                  <div className="text-gray-300">2 min read</div>
                </div>
                <div className="text-xl text-gray-200">
                  Making things working out regardless
                </div>
                <div className="text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minus, earum?
                </div>
              </div>
            </div>
            <div className="p-4 border border-gray-300">
              <div className="mb-5">
                <Image src={father} height={350} width={350} alt={"this"} />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <div className="bg-gray-100 rounded px-3 py-1 text-black">
                    Reality
                  </div>
                  <div className="text-gray-300">2 min read</div>
                </div>
                <div className="text-xl text-gray-200">
                  Making things working out regardless
                </div>
                <div className="text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minus, earum?
                </div>
              </div>
            </div>
            <div className="p-4 border border-gray-300">
              <div className="mb-5">
                <Image src={father} height={350} width={350} alt={"this"} />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <div className="bg-gray-100 rounded px-3 py-1 text-black">
                    Reality
                  </div>
                  <div className="text-gray-300">2 min read</div>
                </div>
                <div className="text-xl text-gray-200">
                  Making things working out regardless
                </div>
                <div className="text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minus, earum?
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-x-10">
            <div className="p-4 border border-gray-300">
              <div className="mb-5">
                <Image src={father} height={350} width={350} alt={"this"} />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <div className="bg-gray-100 rounded px-3 py-1 text-black">
                    Reality
                  </div>
                  <div className="text-gray-300">2 min read</div>
                </div>
                <div className="text-xl text-gray-200">
                  Making things working out regardless
                </div>
                <div className="text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minus, earum?
                </div>
              </div>
            </div>

            <div className="p-4 border border-gray-300">
              <div className="mb-5">
                <Image src={father} height={350} width={350} alt={"this"} />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <div className="bg-gray-100 rounded px-3 py-1 text-black">
                    Reality
                  </div>
                  <div className="text-gray-300">2 min read</div>
                </div>
                <div className="text-xl text-gray-200">
                  Making things working out regardless
                </div>
                <div className="text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minus, earum?
                </div>
              </div>
            </div>

            <div className="p-4 border border-gray-300">
              <div className="mb-5">
                <Image src={father} height={350} width={350} alt={"this"} />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <div className="bg-gray-100 rounded px-3 py-1 text-black">
                    Reality
                  </div>
                  <div className="text-gray-300">2 min read</div>
                </div>
                <div className="text-xl text-gray-200">
                  Making things working out regardless
                </div>
                <div className="text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minus, earum?
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-x-10">
            <div className="p-4 border border-gray-300">
              <div className="mb-5">
                <Image src={father} height={350} width={350} alt={"this"} />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <div className="bg-gray-100 rounded px-3 py-1 text-black">
                    Reality
                  </div>
                  <div className="text-gray-300">2 min read</div>
                </div>
                <div className="text-xl text-gray-200">
                  Making things working out regardless
                </div>
                <div className="text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minus, earum?
                </div>
              </div>
            </div>

            <div className="p-4 border border-gray-300">
              <div className="mb-5">
                <Image src={father} height={350} width={350} alt={"this"} />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <div className="bg-gray-100 rounded px-3 py-1 text-black">
                    Reality
                  </div>
                  <div className="text-gray-300">2 min read</div>
                </div>
                <div className="text-xl text-gray-200">
                  Making things working out regardless
                </div>
                <div className="text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minus, earum?
                </div>
              </div>
            </div>

            <div className="p-4 border border-gray-300">
              <div className="mb-5">
                <Image src={father} height={350} width={350} alt={"this"} />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <div className="bg-gray-100 rounded px-3 py-1 text-black">
                    Reality
                  </div>
                  <div className="text-gray-300">2 min read</div>
                </div>
                <div className="text-xl text-gray-200">
                  Making things working out regardless
                </div>
                <div className="text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minus, earum?
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RootLayout>
  );
}