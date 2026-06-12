"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Share2, Check } from "lucide-react";
import Sidebar from "@/components/chat/Sidebar";
import FounderFilter from "@/components/chat/FounderFilter";
import MessageBubble from "@/components/chat/MessageBubble";
import MessageInput from "@/components/chat/MessageInput";
import { conversations } from "@/lib/mock-data";
import type { Message, Conversation } from "@/lib/mock-data";

const mockResponses: Record<string, { content: string; sources: { name: string; id: string }[] }[]> = {
  all: [
    {
      content:
        "Great question. Let me synthesize how these founders would approach this.\n\nThe key principle here is to focus on the fundamental constraints of your situation rather than copying surface-level tactics. First principles thinking means asking: what is actually true here, and what follows from that?\n\nStart by identifying the single constraint that limits your progress most. Remove that, and your next constraint becomes visible. Iterate on this rather than trying to optimize everything at once.",
      sources: [
        { name: "Musk", id: "musk" },
        { name: "PG", id: "graham" },
      ],
    },
    {
      content:
        "To add to that: the most dangerous trap is optimizing for metrics that feel good but don't correlate with real value creation. Revenue, retention, and referrals are the only signals that matter early on. Everything else is a proxy that can mislead you.",
      sources: [
        { name: "Hormozi", id: "hormozi" },
        { name: "Altman", id: "altman" },
      ],
    },
  ],
  hormozi: [
    {
      content:
        "Here's the Hormozi framework on this: most business problems are offer problems in disguise. If you're struggling to grow, it's usually because your offer isn't compelling enough — not your funnel, not your ads, not your copy.\n\nAn irresistible offer eliminates all the reasons someone would say no. It combines: a dream outcome, perceived high probability of achievement, minimal time to result, and minimal effort required. Stack enough of those and you can charge 10x what competitors charge.",
      sources: [{ name: "Hormozi", id: "hormozi" }],
    },
  ],
  naval: [
    {
      content:
        "Naval's take on this comes down to leverage. There are three types of leverage: labor (people), capital (money), and products with no marginal cost (code and media).\n\nThe modern founder has access to unprecedented leverage through software and content. Code runs while you sleep. A good blog post or YouTube video can compound for years. Focus on acquiring specific knowledge — things you're naturally curious about that few others understand deeply — then apply leverage to it.",
      sources: [{ name: "Naval", id: "naval" }],
    },
  ],
  bezos: [
    {
      content:
        "Jeff Bezos's mental model here is the regret minimization framework: imagine yourself at 80 years old looking back. Which decision will you regret more — trying and failing, or never having tried?\n\nBeyond that, Amazon's success came from being stubbornly focused on long-term customer value over short-term metrics. If you'd be embarrassed to explain a decision to a customer, it's the wrong decision. If you'd be proud to tell them in ten years, do it now.",
      sources: [{ name: "Bezos", id: "bezos" }],
    },
  ],
  altman: [
    {
      content:
        "Sam Altman's core advice here: speed of execution is almost always the decisive variable. Most founders underestimate how much momentum matters.\n\nBuild something, ship it, talk to users, iterate. The difference between winning and losing startups at the early stage is almost always: who's learning faster. A mediocre product that ships beats a perfect product that doesn't. Get to real user feedback as quickly as humanly possible.",
      sources: [{ name: "Altman", id: "altman" }],
    },
  ],
  yc: [
    {
      content:
        "The YC playbook here is simple and almost always right: talk to users.\n\nEvery week, you should be doing customer interviews. Not surveys — conversations. Ask about their problems, their workarounds, their frustrations. The actual product insight almost never comes from inside the building. Build the thing people tell you they want, then figure out why it works or doesn't.",
      sources: [
        { name: "PG", id: "graham" },
        { name: "Altman", id: "altman" },
      ],
    },
  ],
};

function getRandomResponse(filter: string) {
  const pool = mockResponses[filter] || mockResponses.all;
  return pool[Math.floor(Math.random() * pool.length)];
}

export default function AppPage() {
  const [activeConvId, setActiveConvId] = useState(conversations[0].id);
  const [activeFilter, setActiveFilter] = useState("all");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [allConversations, setAllConversations] = useState(conversations);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const activeConversation = allConversations.find((c) => c.id === activeConvId)!;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeConversation?.messages, isTyping]);

  const handleSend = (content: string) => {
    const newUserMessage: Message = {
      id: `msg-${Date.now()}-user`,
      role: "user",
      content,
      timestamp: new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      }),
    };

    setAllConversations((prev) =>
      prev.map((c) =>
        c.id === activeConvId
          ? { ...c, messages: [...c.messages, newUserMessage] }
          : c
      )
    );

    setIsTyping(true);

    setTimeout(() => {
      const response = getRandomResponse(activeFilter);
      const newAssistantMessage: Message = {
        id: `msg-${Date.now()}-assistant`,
        role: "assistant",
        content: response.content,
        sources: response.sources,
        timestamp: new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        }),
      };

      setIsTyping(false);
      setAllConversations((prev) =>
        prev.map((c) =>
          c.id === activeConvId
            ? { ...c, messages: [...c.messages, newAssistantMessage] }
            : c
        )
      );
    }, 1400 + Math.random() * 600);
  };

  const handleNewChat = () => {
    const newConv: Conversation = {
      id: `conv-new-${Date.now()}`,
      title: "New conversation",
      preview: "Just started...",
      date: "Now",
      messages: [],
    };
    setAllConversations((prev) => [newConv, ...prev]);
    setActiveConvId(newConv.id);
    setSidebarOpen(false);
  };

  const handleSelectConv = (id: string) => {
    setActiveConvId(id);
    setSidebarOpen(false);
  };

  const [copied, setCopied] = useState(false);
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isEmpty = activeConversation?.messages.length === 0;

  return (
    <div className="flex h-screen bg-primary overflow-hidden">
      {/* Desktop sidebar */}
      <div className="hidden md:flex">
        <Sidebar
          activeId={activeConvId}
          onSelect={handleSelectConv}
          onNew={handleNewChat}
        />
      </div>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-primary/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.div
              initial={{ x: -240 }}
              animate={{ x: 0 }}
              exit={{ x: -240 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed left-0 top-0 h-full z-50 md:hidden flex"
            >
              <Sidebar
                activeId={activeConvId}
                onSelect={handleSelectConv}
                onNew={handleNewChat}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="border-b border-white/[0.06] px-4 md:px-6 py-2.5 bg-primary/70 backdrop-blur-xl">
          <div className="flex items-center gap-3 max-w-3xl mx-auto w-full">
            {/* Mobile hamburger */}
            <button
              className="md:hidden w-7 h-7 flex items-center justify-center text-text-muted/50 hover:text-text-muted transition-colors shrink-0 rounded-md hover:bg-white/[0.04]"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={16} />
            </button>

            <FounderFilter active={activeFilter} onChange={setActiveFilter} />

            {/* Share button */}
            <button
              onClick={handleShare}
              className="ml-auto shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.07] hover:border-white/[0.12] bg-white/[0.02] hover:bg-white/[0.04] text-[12px] text-white/35 hover:text-white/60 transition-all duration-150"
            >
              {copied ? <Check size={12} className="text-green-400" /> : <Share2 size={12} />}
              <span className="hidden sm:inline">{copied ? "Copied" : "Share"}</span>
            </button>
          </div>
        </header>

        {/* Messages area */}
        <div className="flex-1 overflow-y-auto">
          {isEmpty ? (
            <EmptyState onSuggest={handleSend} />
          ) : (
            <div className="max-w-3xl mx-auto px-4 md:px-6 py-6 space-y-6">
              {activeConversation.messages.map((msg) => (
                <MessageBubble
                  key={msg.id}
                  message={msg}
                />
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white/[0.07] border border-white/[0.1] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white/50 text-[9px] font-bold">BL</span>
                    </div>
                    <div className="flex gap-1.5 items-center py-2">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-1 h-1 rounded-full bg-white/30"
                          animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.8, 1, 0.8] }}
                          transition={{ repeat: Infinity, duration: 1.4, delay: i * 0.2 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Input */}
        <MessageInput onSend={handleSend} disabled={isTyping} />
      </div>
    </div>
  );
}

function EmptyState({ onSuggest }: { onSuggest: (s: string) => void }) {
  const suggestions = [
    "How should I price my SaaS product?",
    "When is the right time to hire my first employee?",
    "How do I write a cold email that gets responses?",
    "Should I raise venture capital?",
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        {/* Welcome */}
        <div className="flex justify-center mb-6">
          <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center">
            <span className="text-white/60 text-sm font-bold">BL</span>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-white/90 text-center mb-2 tracking-tight">
          Welcome to BuildLike.
        </h2>
        <p className="text-sm text-white/35 text-center mb-2 leading-relaxed">
          Ask any business decision. Get answers sourced from founders who&apos;ve solved it.
        </p>
        <p className="text-[11px] text-white/20 text-center mb-8">
          Every answer is attributed — nothing is generated from noise.
        </p>

        <p className="text-[11px] text-white/25 uppercase tracking-widest mb-3 text-center">Start with</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => onSuggest(s)}
              className="text-left px-3.5 py-3 rounded-xl bg-card border border-white/[0.07] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-150 text-sm text-text-muted/70 hover:text-text-primary"
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
