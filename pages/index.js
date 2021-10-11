import Image from "next/image";


export default function Index() {
  return (

<div className="min-h-screen z-0 overflow-hidden lg:overflow-visible">
  <div>
    <video className="video" playsInline autoPlay muted loop crossOrigin="true">
      <source src="/spectrum.mp4" type="video/mp4" />
    </video>
  </div>
</div>

  );
}
