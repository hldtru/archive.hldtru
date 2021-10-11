export default function Footer() {
  return (
    <footer className="flex relative w-full bg-transparent mx-auto z-40">
      <ul className="flex fixed bottom-0 pt-28 items-center justify-between w-full py-4 px-4 mx-0 md:px-4 lg:px-4 text-xs text-black">
        <li>
          <i>powered by</i>{" "}
          <a
            href="https://www.hldtru.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            <i>truth</i>®
          </a>
        </li>

        <li>
          <a
            href="https://github.com/chvndler/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}
