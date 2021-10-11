import Image from "next/image";

export default function AboutPage() {
  return (




      <div className="w-full h-screen overscroll-contain z-0 mx-auto py-1 px-1 sm:px-1 lg:px-1">
        <h2 className="sr-only">Products</h2>
        <div className="w-full mx-0 px-0 py-0 grid grid-cols-2 gap-x-2 sm:grid-cols-2 gap-x-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-4">
          <a href="#" className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="w-full h-full object-center object-cover group-hover:opacity-75" />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">
              Earthen Bottle
            </h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              $48
            </p>
          </a>

          <a href="#" className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." className="w-full h-full object-center object-cover group-hover:opacity-75" />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">
              Nomad Tumbler
            </h3>
            <p class="mt-1 text-lg font-medium text-gray-900">
              $35
            </p>
          </a>

          <a href="#" className="group">
            <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg" alt="Person using a pen to cross a task off a productivity paper card." className="w-full h-full object-center object-cover group-hover:opacity-75" />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">
              Focus Paper Refill
            </h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              $89
            </p>
          </a>

          <a href="#" className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="w-full h-full object-center object-cover group-hover:opacity-75" />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">
              Machined Mechanical Pencil
            </h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              $35
            </p>
          </a>

        </div>
      </div>



  );
}
