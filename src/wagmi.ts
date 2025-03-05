import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { arbitrum, base, mainnet, mode, modeTestnet, optimism, polygon, sepolia } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains:
    process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
      ? [
          { ...modeTestnet, iconBackground: "#000000", iconUrl: "https://lab.modespray.xyz/chain/mode-chain.png" },
          sepolia,
        ]
      : [mode, mainnet, polygon, optimism, arbitrum, base],
  ssr: true,
});
