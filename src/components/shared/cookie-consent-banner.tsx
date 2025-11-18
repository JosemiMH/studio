"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { Cookie } from "lucide-react";
import { cn } from "@/lib/utils";

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { translations } = useLanguage();
  const { cookie_banner, footer } = translations;

  useEffect(() => {
    // This effect runs only on the client
    try {
      const consent = localStorage.getItem("cookie_consent");
      if (!consent) {
        // Small delay to prevent layout shifts on load
        const timer = setTimeout(() => setIsVisible(true), 1500);
        return () => clearTimeout(timer);
      }
    } catch (error) {
      console.error("Could not access localStorage:", error);
    }
  }, []);

  const handleConsent = (consent: "accepted" | "declined") => {
    try {
      localStorage.setItem("cookie_consent", consent);
      setIsVisible(false);
    } catch (error) {
      console.error("Could not write to localStorage:", error);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4"
        >
          <div className="container mx-auto">
             <div className="bg-card text-card-foreground p-6 rounded-lg shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 border">
                <div className="flex items-start gap-4">
                    <Cookie className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm">
                        {cookie_banner.message}{" "}
                        <Link href="/cookie-policy" className="underline hover:text-primary">
                            {footer.cookies}
                        </Link>
                        .
                    </p>
                </div>
                <div className="flex gap-4 flex-shrink-0">
                    <Button variant="outline" onClick={() => handleConsent("declined")}>{cookie_banner.decline}</Button>
                    <Button onClick={() => handleConsent("accepted")}>{cookie_banner.accept}</Button>
                </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsentBanner;
