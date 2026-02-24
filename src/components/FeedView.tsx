import React, { useState } from "react";
import { motion } from "motion/react";
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";
import { feedPosts } from "../data";

export default function FeedView() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-4 pb-24 space-y-6 bg-brand-bg"
    >
      <div className="mb-6">
        <h2 className="font-display font-black text-3xl">El Ruedo</h2>
        <p className="text-brand-dark/60 font-medium">
          Filosofía en su hábitat natural: los memes.
        </p>
      </div>

      {feedPosts.map((post, i) => (
        <PostCard key={post.id} post={post} index={i} />
      ))}
    </motion.div>
  );
}

function PostCard({
  post,
  index,
}: {
  post: (typeof feedPosts)[0];
  index: number;
  key?: React.Key;
}) {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl brutal-border brutal-shadow overflow-hidden"
    >
      <div className="p-4 border-b-2 border-brand-dark/10 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-brand-teal brutal-border flex items-center justify-center text-white font-bold font-display">
            {post.philosopher.charAt(0)}
          </div>
          <div>
            <p className="font-bold text-sm leading-tight">
              {post.philosopher}
            </p>
            <p className="text-xs text-brand-dark/50 font-medium">
              {post.concept}
            </p>
          </div>
        </div>
      </div>

      <div className="aspect-square bg-brand-bg relative border-b-2 border-brand-dark/10">
        <img
          src={post.memeUrl}
          alt="Meme"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <button
              onClick={() => setLiked(!liked)}
              className={`transition-colors ${liked ? "text-brand-red" : "text-brand-dark"}`}
            >
              <Heart size={24} className={liked ? "fill-brand-red" : ""} />
            </button>
            <button>
              <MessageCircle size={24} />
            </button>
            <button>
              <Share2 size={24} />
            </button>
          </div>
          <button>
            <Bookmark size={24} />
          </button>
        </div>

        <p className="font-bold text-sm">
          {post.likes + (liked ? 1 : 0)} mentes explotadas
        </p>

        <p className="text-sm">
          <span className="font-bold mr-2">{post.philosopher}</span>
          {post.text}
        </p>
      </div>
    </motion.div>
  );
}
