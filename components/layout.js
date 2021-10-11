import Header from "./header";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <div className="min-h-screen min-w-screen w-full h-full bg-white overscroll-contain z-0">
      <Header />

      <main className="h-full overflow-visible lg:overflow-visible px-1 z-20">
        {props.children}
      </main>

      <Footer />
    </div>
  );
}
