import React from "react";
import { motion } from "motion/react";
import { BookOpen, Brain, Lightbulb, Share2 } from "lucide-react";
import { DailyRec } from "../data";

export default function DailyView({ rec }: { rec: DailyRec; key?: React.Key }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-6 pb-24 space-y-6"
    >
      <div className="space-y-2">
        <h2 className="font-display font-black text-3xl leading-tight">
          {rec.title}
        </h2>
        <div className="flex items-center gap-2 text-sm font-bold text-brand-teal">
          <span className="bg-brand-teal/10 px-3 py-1 rounded-full brutal-border">
            {rec.concept}
          </span>
          <span className="bg-brand-yellow/20 px-3 py-1 rounded-full brutal-border text-brand-dark">
            {rec.philosopher}
          </span>
        </div>
      </div>

      <div className="relative rounded-2xl overflow-hidden brutal-border brutal-shadow bg-white aspect-square">
        <img
          src={rec.memeUrl}
          alt="Meme del día"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
          <p className="text-white font-bold text-lg">Meme del Día</p>
        </div>
      </div>

      <div className="bg-white p-5 rounded-2xl brutal-border brutal-shadow space-y-4">
        <div className="flex items-start gap-3">
          <div className="bg-brand-red/10 p-2 rounded-xl text-brand-red">
            <BookOpen size={24} />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg">La Teoría</h3>
            <p className="text-brand-dark/80 text-sm leading-relaxed mt-1">
              {rec.explanation}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-brand-yellow p-5 rounded-2xl brutal-border brutal-shadow space-y-4">
        <div className="flex items-start gap-3">
          <div className="bg-white p-2 rounded-xl text-brand-dark brutal-border">
            <Lightbulb size={24} />
          </div>
          <div>
            <h3 className="font-display font-bold text-lg">A la Práctica</h3>
            <p className="text-brand-dark/90 text-sm font-medium leading-relaxed mt-1">
              {rec.application}
            </p>
          </div>
        </div>
      </div>

      <button className="w-full bg-brand-dark text-white font-bold py-4 rounded-xl brutal-border brutal-shadow flex items-center justify-center gap-2 hover:bg-brand-dark/90 transition-colors active:translate-y-1 active:shadow-none">
        <Share2 size={20} />
        Compartir Sabiduría
      </button>
    </motion.div>
  );
}
