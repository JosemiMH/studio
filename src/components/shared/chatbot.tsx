
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, CornerDownLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { aiChatbotAssistance } from "@/ai/flows/ai-chatbot-assistance";
import { Card } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { useTranslations } from "@/contexts/translations-context";

interface Message {
  text: string;
  sender: "user" | "bot";
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const translations = useTranslations();
  const { chatbot } = translations;
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ text: chatbot.welcome, sender: "bot" }]);
    }
  }, [isOpen, chatbot.welcome, messages.length]);

  useEffect(() => {
    if (scrollAreaRef.current) {
        // A bit of a hack to scroll to the bottom.
        setTimeout(() => {
            const viewport = scrollAreaRef.current?.querySelector('div[data-radix-scroll-area-viewport]');
            if (viewport) {
                viewport.scrollTop = viewport.scrollHeight;
            }
        }, 100);
    }
  }, [messages]);

  const handleSendMessage = async (query?: string) => {
    const text = query || inputValue;
    if (text.trim() === "" || isLoading) return;

    const newMessages: Message[] = [...messages, { text, sender: "user" }];
    setMessages(newMessages);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await aiChatbotAssistance({ query: text });
      setMessages([...newMessages, { text: response.response, sender: "bot" }]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages([
        ...newMessages,
        { text: "Sorry, I'm having trouble connecting. Please try again later.", sender: "bot" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };
  
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-4 sm:right-8 w-[calc(100%-2rem)] max-w-sm h-[70vh] max-h-[600px] z-50"
          >
            <Card className="h-full w-full flex flex-col shadow-2xl">
              <div className="flex items-center justify-between p-4 bg-primary text-primary-foreground rounded-t-lg">
                <div className="flex items-center gap-2">
                  <Bot className="w-6 h-6" />
                  <h3 className="font-semibold text-lg">Eva's Assistant</h3>
                </div>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80" onClick={() => setIsOpen(false)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <ScrollArea className="flex-grow p-4 bg-background" ref={scrollAreaRef}>
                <div className="space-y-4">
                  {messages.map((msg, index) => (
                    <div key={index} className={`flex items-end gap-2 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                      {msg.sender === 'bot' && <Avatar className="w-8 h-8"><AvatarFallback><Bot size={20}/></AvatarFallback></Avatar>}
                      <div className={`max-w-[80%] rounded-xl px-4 py-2 ${msg.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                        <p className="text-sm">{msg.text}</p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                     <div className="flex items-end gap-2 justify-start">
                        <Avatar className="w-8 h-8"><AvatarFallback><Bot size={20}/></AvatarFallback></Avatar>
                        <div className="max-w-[80%] rounded-xl px-4 py-2 bg-muted text-muted-foreground">
                            <Loader2 className="w-5 h-5 animate-spin" />
                        </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
              
              <div className="p-4 border-t bg-background">
                <div className="flex flex-wrap gap-2 mb-2">
                    {chatbot.suggestions.map((s: string) => (
                        <Button key={s} size="sm" variant="outline" onClick={() => handleSuggestionClick(s)} disabled={isLoading}>
                            {s}
                        </Button>
                    ))}
                </div>
                <form
                    onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                    }}
                    className="flex items-center gap-2"
                >
                    <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={chatbot.placeholder}
                    className="flex-grow"
                    disabled={isLoading}
                    />
                    <Button type="submit" size="icon" disabled={isLoading}>
                    <CornerDownLeft className="w-5 h-5" />
                    </Button>
                </form>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Button
        className="fixed bottom-4 right-4 sm:right-8 w-16 h-16 rounded-full shadow-2xl z-50 flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Chatbot"
      >
        <AnimatePresence mode="wait">
            <motion.div
                key={isOpen ? "x" : "bot"}
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.2 }}
            >
                {isOpen ? <X size={28} /> : <Bot size={28} />}
            </motion.div>
        </AnimatePresence>
      </Button>
    </>
  );
};

export default Chatbot;
