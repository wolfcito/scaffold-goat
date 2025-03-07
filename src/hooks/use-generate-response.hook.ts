"use client";
import { createOpenAI } from "@ai-sdk/openai";
import { getOnChainTools } from "@goat-sdk/adapter-vercel-ai";
import { modespray } from "@goat-sdk/plugin-modespray";
import { viem } from "@goat-sdk/wallet-viem";
import { generateText } from "ai";
import { useCallback, useState } from "react";
import type { UseWalletClientReturnType } from "wagmi";

interface UseGenerateResponseReturn {
  loading: boolean;
  responseText: string;
  error: string | null;
  generateResponse: (userInput: string) => Promise<void>;
}

export function useGenerateResponse(walletClient: UseWalletClientReturnType["data"]): UseGenerateResponseReturn {
  const [loading, setLoading] = useState<boolean>(false);
  const [responseText, setResponseText] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const generateResponse = useCallback(
    async (userInput: string) => {
      setLoading(true);
      setError(null);
      try {
        if (!walletClient) {
          setError("Wallet client not available.");
          return;
        }
        const fetchedTools = await getOnChainTools({
          wallet: viem(walletClient),
          plugins: [modespray()],
        });
        console.log("🤖 Processing prompt:", userInput);
        const openai = createOpenAI({
          apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
        });
        const result = await generateText({
          model: openai("gpt-4o-mini"),
          tools: fetchedTools,
          maxSteps: 5,
          prompt: userInput,
        });
        console.log("📊 FINAL RESPONSE", result.text);
        setResponseText(result.text);
      } catch (err) {
        console.error("❌ ERROR", err);
        setError("Ocurrió un error, inténtalo de nuevo.");
      } finally {
        setLoading(false);
      }
    },
    [walletClient],
  );

  return { loading, responseText, error, generateResponse };
}
