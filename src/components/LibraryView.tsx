import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ChevronRight, BookOpen, ArrowLeft, Quote } from "lucide-react";
import { libraryTopics, libraryData } from "../data";

export default function LibraryView() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filtrar los temas basados en la búsqueda
  const filteredTopics = libraryTopics
    .map((section) => ({
      ...section,
      items: section.items.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((section) => section.items.length > 0);

  return (
    <div className="relative h-full">
      <AnimatePresence mode="wait">
        {!selectedItem ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-6 pb-24 space-y-8 bg-brand-bg min-h-full"
          >
            <div className="space-y-4">
              <h2 className="font-display font-black text-3xl">Biblioteca</h2>
              <p className="text-brand-dark/60 font-medium">
                Tu arsenal de conceptos para ganar discusiones en cenas
                familiares.
              </p>

              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-dark/40"
                  size={20}
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar filósofo, concepto..."
                  className="w-full bg-white brutal-border brutal-shadow rounded-xl py-3 pl-10 pr-4 font-medium focus:outline-none focus:ring-2 focus:ring-brand-teal"
                />
              </div>
            </div>

            <div className="space-y-6">
              {filteredTopics.length > 0 ? (
                filteredTopics.map((section, i) => (
                  <motion.div
                    key={section.category}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="space-y-3"
                  >
                    <h3 className="font-display font-bold text-xl flex items-center gap-2">
                      <BookOpen size={20} className="text-brand-red" />
                      {section.category}
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {section.items.map((item) => (
                        <button
                          key={item}
                          onClick={() => setSelectedItem(item)}
                          className="bg-white p-3 rounded-xl brutal-border brutal-shadow text-left hover:bg-brand-yellow/10 transition-colors flex justify-between items-center group active:translate-y-[2px] active:shadow-none"
                        >
                          <span className="font-bold text-sm">{item}</span>
                          <ChevronRight
                            size={16}
                            className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-teal"
                          />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-10 text-brand-dark/50 font-medium">
                  No encontramos nada con "{searchQuery}". <br />
                  ¿Quizás es un concepto muy avanzado?
                </div>
              )}
            </div>
          </motion.div>
        ) : (
          <LibraryDetailView
            key="detail"
            item={selectedItem}
            onBack={() => setSelectedItem(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function LibraryDetailView({
  item,
  onBack,
}: {
  item: string;
  onBack: () => void;
  key?: React.Key;
}) {
  const data = libraryData[item] || {
    description:
      "Estamos traduciendo este concepto del alemán antiguo. Vuelve pronto.",
    memeUrl: "https://picsum.photos/seed/placeholder/800/600",
    quote: "La paciencia es amarga, pero su fruto es dulce. - Aristóteles",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="p-6 pb-24 space-y-6 bg-brand-bg min-h-full"
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-brand-dark/60 hover:text-brand-dark font-bold transition-colors"
      >
        <ArrowLeft size={20} />
        Volver
      </button>

      <h2 className="font-display font-black text-4xl">{item}</h2>

      <div className="relative rounded-2xl overflow-hidden brutal-border brutal-shadow bg-white aspect-video">
        <img
          src={data.memeUrl}
          alt={item}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="bg-white p-5 rounded-2xl brutal-border brutal-shadow space-y-4">
        <h3 className="font-display font-bold text-xl text-brand-teal">
          ¿De qué trata?
        </h3>
        <p className="text-brand-dark/80 font-medium leading-relaxed">
          {data.description}
        </p>
      </div>

      <div className="bg-brand-yellow/30 p-5 rounded-2xl brutal-border border-dashed space-y-3 relative overflow-hidden">
        <Quote
          className="absolute -right-2 -top-2 text-brand-yellow opacity-50"
          size={64}
        />
        <p className="font-display font-bold text-lg italic relative z-10">
          {data.quote}
        </p>
      </div>
    </motion.div>
  );
}
