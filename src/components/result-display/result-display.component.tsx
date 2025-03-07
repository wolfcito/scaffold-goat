import { ResultSection } from "@/components/result-section";
import { motion } from "framer-motion";
import React from "react";

interface ResultDisplayProps {
  readonly loading: boolean;
  readonly error: string | null;
  readonly responseText: string;
}

export function ResultDisplay({ loading, error, responseText }: ResultDisplayProps) {
  if (loading) {
    return <ResultSection title="CAPABILITIES" description={<p>Loading...</p>} />;
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <ResultSection title="ERROR" description={<p>{error}</p>} />
      </motion.div>
    );
  }

  if (responseText) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <ResultSection title="CAPABILITIES" description={<p>{responseText}</p>} />
      </motion.div>
    );
  }

  return (
    <ResultSection
      title="CAPABILITIES"
      description={
        <>
          <p>✅ GOAT SDK Integration</p>
          <p>✅ Interact with Blockchains</p>
          <p>✅ Security Without Private Keys</p>
          <p>✅ Spray Ether using the innovative Modespray plugin, ideal for distributing payments and incentives.</p>
        </>
      }
    />
  );
}
