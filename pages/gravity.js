import Image from "next/image";

export default function Gravity() {
  return (

<div>
  <div className="flex flex-wrap -mx-0 mb-0 z-20">
    <div className="w-1/2 md:w-1/2 lg:w-1/4 px-1 mb-2">
      <div className="relative rounded-lg bg-gray-100 h-72 text-sm text-grey-dark flex items-center justify-center lg:h-80 md:h-80">
      <div className="scania_heading"></div>
        <Image
          src="https://cdn.hldtru.space/archive/dot/dot-01.jpg"
          alt="one"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="scania_body">Days of truth</div>
      <div className="scania_bodysmall">Brand Identity, Website Design, System, Video</div>
    </div>
    <div className="w-1/2 md:w-1/2 lg:w-1/4 px-1 mb-2">
      <div className="relative rounded-lg bg-gray-100 h-72 text-sm text-grey-dark flex items-center justify-center lg:h-80 md:h-80">
      <div className="scania_heading z-30"></div>
        <Image
          src="https://cdn.hldtru.space/archive/dot/dot-01.jpg"
          alt="one"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="scania_body">Copenhagen® Racing</div>
      <div className="scania_bodysmall">Brand Identity, Website Design, System, Video</div>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/4 px-1 mb-2">
      <div className="relative rounded-lg bg-gray-100 h-72 text-sm text-grey-dark flex items-center justify-center lg:h-80 md:h-80">
      <div className="scania_heading z-30"></div>
        <Image
          src="https://cdn.hldtru.space/archive/dot/dot-01.jpg"
          alt="one"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="scania_body">Preseason ©2021</div>
      <div className="scania_bodysmall">Brand Identity, Website Design, System, Video</div>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/4 px-1 mb-2">
      <div className="relative rounded-lg bg-gray-100 h-72 text-sm text-grey-dark flex items-center justify-center lg:h-80 md:h-80">
        <Image
          src="https://cdn.hldtru.space/archive/dot/dot-01.jpg"
          alt="one"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="scania_body">Collection ©2021</div>
      <div className="scania_bodysmall">Brand Identity, Website Design, System, Video</div>
    </div>
  </div>

  <div className="flex flex-wrap -mx-0 mb-0">
    <div className="w-1/2 md:w-1/2 lg:w-1/4 px-1 mb-2">
      <div className="rounded-lg border bg-gray-800 h-72 text-sm text-grey-dark flex items-center justify-center">
        <p>full / half / quarter</p>
      </div>
    </div>
    <div className="w-1/2 md:w-1/2 lg:w-1/4 px-1 mb-2">
      <div className="rounded-lg border bg-gray-100 h-72 text-sm text-grey-dark flex items-center justify-center">
        <p>full / half / quarter</p>
      </div>
    </div>
    <div className="w-1/2 md:w-1/2 lg:w-1/4 px-1 mb-2">
      <div className="rounded-lg border bg-gray-300 h-72 text-sm text-grey-dark flex items-center justify-center">
        <p>full / half</p>
      </div>
    </div>
    <div className="w-1/2 md:w-1/2 lg:w-1/4 px-1 mb-2">
      <div className="rounded-lg border bg-gray-500 h-72 text-sm text-grey-dark flex items-center justify-center">
        <p>full / half</p>
      </div>
    </div>
  </div>

  <div className="bg-transparent h-20"></div>
</div>

  );
}
