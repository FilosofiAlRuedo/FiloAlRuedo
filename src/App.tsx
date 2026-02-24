import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import { BookOpen, Sparkles, Smile } from "lucide-react";
import DailyView from "./components/DailyView";
import FeedView from "./components/FeedView";
import LibraryView from "./components/LibraryView";
import { dailyRecommendations, Level } from "./data";

export default function App() {
  const [activeTab, setActiveTab] = useState<"daily" | "feed" | "library">(
    "daily",
  );
  const [userLevel, setUserLevel] = useState<Level>("Principiante");

  return (
    <div className="max-w-md mx-auto h-screen flex flex-col bg-brand-bg relative overflow-hidden sm:shadow-2xl sm:rounded-3xl sm:h-[90vh] sm:my-[5vh] sm:brutal-border">
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center bg-brand-bg z-10 border-b-2 border-brand-dark/10">
        <h1 className="font-display font-black text-xl text-brand-dark flex items-center gap-2">
          <Sparkles className="text-brand-yellow fill-brand-yellow" size={24} />
          Al Ruedo
        </h1>
        <button
          className="flex items-center gap-2 bg-white px-3 py-1 rounded-full brutal-border text-xs font-bold brutal-shadow active:translate-y-[2px] active:shadow-none transition-all"
          onClick={() => {
            const levels: Level[] = ["Principiante", "Intermedio", "Avanzado"];
            const next =
              levels[(levels.indexOf(userLevel) + 1) % levels.length];
            setUserLevel(next);
          }}
        >
          Nivel: <span className="text-brand-teal">{userLevel}</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden relative">
        <AnimatePresence mode="wait">
          {activeTab === "daily" && (
            <DailyView key="daily" rec={dailyRecommendations[userLevel]} />
          )}
          {activeTab === "feed" && <FeedView key="feed" />}
          {activeTab === "library" && <LibraryView key="library" />}
        </AnimatePresence>
      </main>

      {/* Bottom Nav */}
      <nav className="bg-white border-t-2 border-brand-dark p-2 px-6 flex justify-between items-center z-10 absolute bottom-0 w-full">
        <NavItem
          icon={<Sparkles size={24} />}
          label="Hoy"
          isActive={activeTab === "daily"}
          onClick={() => setActiveTab("daily")}
        />
        <NavItem
          icon={<Smile size={24} />}
          label="El Ruedo"
          isActive={activeTab === "feed"}
          onClick={() => setActiveTab("feed")}
        />
        <NavItem
          icon={<BookOpen size={24} />}
          label="Biblioteca"
          isActive={activeTab === "library"}
          onClick={() => setActiveTab("library")}
        />
      </nav>
    </div>
  );
}

function NavItem({
  icon,
  label,
  isActive,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-1 transition-colors w-20 py-2 ${isActive ? "text-brand-red" : "text-brand-dark/40 hover:text-brand-dark"}`}
    >
      <div
        className={`p-1 rounded-xl transition-all ${isActive ? "scale-110" : ""}`}
      >
        {icon}
      </div>
      <span className="text-[10px] font-bold uppercase tracking-wider">
        {label}
      </span>
    </button>
  );
}
