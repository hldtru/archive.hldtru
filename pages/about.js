import Image from "next/image";

export default function AboutPage() {
  return (


<div className="container mx-auto p-1 text-grey-darkest">
  <div className="flex flex-wrap -mx-0 mb-0">
    <div className="w-full md:w-1/2 lg:w-1/4 px-1 mb-2">
      <div className="rounded-lg border h-72 text-sm text-grey-dark flex items-center justify-center">
        <p>full / half / quarter</p>
      </div>
    </div>
    <div className="w-full md:w-1/2 lg:w-1/4 px-1 mb-2">
      <div className="rounded-lg border h-72 text-sm text-grey-dark flex items-center justify-center">
        <p>full / half / quarter</p>
      </div>
    </div>
    <div className="w-full lg:w-1/2 px-1">
      <div className="rounded-lg border h-72 text-sm text-grey-dark flex items-center justify-center">
        <p>full / half</p>
      </div>
    </div>
  </div>
</div>

  );
}
