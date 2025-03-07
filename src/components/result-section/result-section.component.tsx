import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
export function ResultSection({
  title,
  description,
}: { readonly title?: string; readonly description: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="rounded-lg border border-gray-800 p-4">
        {title && (
          <h1 className="mb-4 w-full justify-center bg-transparent py-1 text-xs uppercase text-gray-400 hover:bg-gray-800">
            {title}
          </h1>
        )}
        <ScrollArea className="h-36 w-full">
          <div className="space-y-3 text-xs text-gray-300">{description}</div>
        </ScrollArea>
      </div>
    </motion.div>
  );
}
