import { ConnectButton } from "@rainbow-me/rainbowkit";

export function Header() {
  return (
    <header className="flex items-center justify-end border-b border-gray-800 px-4 py-3">
      <ConnectButton />
    </header>
  );
}
