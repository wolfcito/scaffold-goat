"use client";
import { Header } from "@/components/header";
import { ResultDisplay } from "@/components/result-display";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGenerateResponse } from "@/hooks";
import { AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useWalletClient } from "wagmi";

export default function Home() {
  const { data: walletClient } = useWalletClient();
  const { loading, responseText, error, generateResponse } = useGenerateResponse(walletClient);
  const [userInput, setUserInput] = useState<string>(
    "Spray 0.0001 ETH of my balance to 0x8b8e92779251F3b9B46c4D16CE6B4097430D761e and 0x869cdf824e6fF40C6823cb148299F9feeD654671",
  );

  const handleClick = () => {
    if (!walletClient) {
      console.error("WalletClient not available");
      return;
    }
    generateResponse(userInput);
  };

  return (
    <main className="flex flex-col flex-grow px-1">
      <Header />
      <div className="relative h-screen overflow-hidden bg-grid-pattern">
        <div className="flex flex-col items-center mt-20">
          <h2 className="mb-6 text-center text-xl font-medium">Chat with GOAT</h2>

          <div className="relative mb-6 h-24 w-24">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 opacity-50 blur-sm" />
            <div className="relative flex h-full w-full items-center justify-center rounded-lg bg-zinc-900 p-2">
              <Image
                src="/images/goatsdk.jpg"
                alt="AI Avatar"
                width={80}
                height={80}
                className="h-20 w-20 rounded-md"
              />
            </div>
          </div>

          <div className="mb-8 w-full max-w-md">
            <p className="mb-2 flex items-center justify-center text-sm text-gray-400">
              {`You're working on ${process.env.NEXT_PUBLIC_ENABLE_TESTNETS ? "Testnet" : "Mainnet"}`}
              <span className="ml-1 p-0.5 text-lg">ⓘ</span>
            </p>

            <div className="flex items-center">
              <Input
                type="text"
                placeholder="Enter your message"
                className="mt-4 w-full border-gray-700 bg-zinc-800/80 text-gray-200 mr-1"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
              <Button
                variant="outline"
                size="icon"
                className="mt-4 justify-center rounded-md border border-gray-700 hover:bg-zinc-800 py-1 text-xs uppercase text-gray-400 bg-gray-100/10 hover:text-gray-100"
                onClick={handleClick}
              >
                <ChevronRight />
              </Button>
            </div>
          </div>

          <div className="grid w-full max-w-md mb-8">
            <AnimatePresence mode="wait">
              <ResultDisplay loading={loading} error={error} responseText={responseText} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}
