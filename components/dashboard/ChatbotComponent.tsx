// components/ChatbotComponent.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/chatbot/button";
import { Input } from "@/components/ui/chatbot/input";
import { ScrollArea } from "@/components/ui/chatbot/scroll-area";
import {
  ChevronLeft,
  Search,
  Send,
  Home,
  MessageSquare,
  FileText,
  HelpCircle,
} from "lucide-react";

type Message = {
  id: number;
  text: string;
  sender: "bot" | "user";
};
type Article = {
  title: string;
  category: string;
  count: number;
};

const initialArticles: Article[] = [
  { title: "Getting started", category: "getting-started", count: 1 },
  { title: "Account and Billing", category: "account-billing", count: 2 },
  { title: "Support", category: "support", count: 1 },
];

export default function ChatbotComponent() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi, how can we help?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [view, setView] = useState<"home" | "chat" | "articles">("home");
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [searchTerm, setSearchTerm] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: input,
        sender: "user",
      };
      setMessages([...messages, newMessage]);
      setInput("");
      // Simulate bot response
      setTimeout(() => {
        const botResponse: Message = {
          id: messages.length + 2,
          text: "Thanks for your message. How else can I assist you?",
          sender: "bot",
        };
        setMessages((msgs) => [...msgs, botResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="fixed bottom-20 right-4 w-96 h-[600px] bg-[#1C2333] border border-[#2D3748] rounded-lg shadow-lg overflow-hidden flex flex-col">
      {/* ... (keep the rest of the JSX as it was) */}
    </div>
  );
}