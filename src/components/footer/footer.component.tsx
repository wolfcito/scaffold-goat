export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0  pl-1.5 text-sm text-gray-400 w-full isolate py-1 bg-black">
      <p className="flex justify-center">
        {"Built by "}
        <a
          href="https://twitter.com/AKAwolfcito"
          target="_blank"
          rel="noopener noreferrer"
          title="@wolfcito"
          className="underline mx-1"
        >
          @wolfcito
        </a>
        {" . The source code is available on"}
        <a
          href="https://github.com/wolfcito/goat-daipp"
          target="_blank"
          rel="noopener noreferrer"
          className="underline mx-1"
        >
          GitHub.
        </a>
      </p>
    </footer>
  );
}
