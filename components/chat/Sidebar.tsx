import Link from "next/link";
import { Plus, FileText, ArrowLeft, Zap } from "lucide-react";
import { conversations } from "@/lib/mock-data";

type SidebarProps = {
  activeId: string;
  onSelect: (id: string) => void;
  onNew: () => void;
};

export default function Sidebar({ activeId, onSelect, onNew }: SidebarProps) {
  return (
    <aside className="w-[220px] shrink-0 bg-primary border-r border-white/[0.06] flex flex-col h-full">
      {/* Header */}
      <div className="px-4 py-3.5 flex items-center justify-between border-b border-white/[0.06]">
        <Link href="/" className="text-[15px] font-semibold tracking-tight select-none">
          <span className="text-text-primary">Build</span>
          <span className="text-accent">Like</span>
        </Link>
        <Link
          href="/"
          className="w-6 h-6 flex items-center justify-center text-text-muted/50 hover:text-text-muted transition-colors rounded-md hover:bg-white/[0.04]"
          title="Back to home"
        >
          <ArrowLeft size={14} />
        </Link>
      </div>

      {/* New session */}
      <div className="px-3 pt-3 pb-1">
        <button
          onClick={onNew}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-text-muted hover:text-text-primary border border-white/[0.06] hover:border-white/[0.10] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-150"
        >
          <Plus size={14} />
          New session
        </button>
      </div>

      {/* Sessions */}
      <div className="flex-1 overflow-y-auto px-2 py-2">
        <div className="px-2 py-1 mb-1">
          <span className="text-[10px] font-medium text-text-muted/40 uppercase tracking-[0.12em]">
            Sessions
          </span>
        </div>

        <div className="space-y-0.5">
          {conversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => onSelect(conv.id)}
              className={`w-full text-left px-2.5 py-2 rounded-lg transition-all duration-150 ${
                activeId === conv.id
                  ? "bg-white/[0.07] text-text-primary"
                  : "text-text-muted/70 hover:bg-white/[0.04] hover:text-text-muted"
              }`}
            >
              <div className="flex items-start gap-2">
                <FileText size={11} className="mt-0.5 shrink-0 opacity-40" />
                <div className="min-w-0">
                  <div className="text-[12px] font-medium truncate leading-tight">{conv.title}</div>
                  <div className="text-[10px] text-text-muted/40 mt-0.5">{conv.date}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Plan + user */}
      <div className="border-t border-white/[0.06] p-3 space-y-2">
        {/* Usage */}
        <div className="px-2 py-2 rounded-lg bg-white/[0.02] border border-white/[0.05]">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] text-text-muted/50">Free plan</span>
            <span className="text-[10px] text-text-muted/40">3 / 10 sessions</span>
          </div>
          <div className="h-0.5 rounded-full bg-white/[0.06] overflow-hidden">
            <div className="h-full w-[30%] rounded-full bg-white/25" />
          </div>
          <Link href="/#pricing" className="mt-2 flex items-center gap-1 text-[10px] text-white/35 hover:text-white/60 transition-colors">
            <Zap size={9} />
            Upgrade to Pro
          </Link>
        </div>

        {/* User */}
        <div className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-white/[0.04] transition-colors cursor-pointer">
          <div className="w-6 h-6 rounded-full bg-white/[0.1] border border-white/[0.12] flex items-center justify-center text-white/70 text-[10px] font-bold shrink-0">
            T
          </div>
          <div className="min-w-0">
            <div className="text-[12px] font-medium text-text-primary/90 truncate leading-tight">Tommaso</div>
            <div className="text-[10px] text-text-muted/40 truncate">tommgibe@gmail.com</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
