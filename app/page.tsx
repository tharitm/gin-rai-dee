'use client'
import Transition from "@/components/Transition";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <AnimatePresence>
      <Transition />
    </AnimatePresence>
  );
}
