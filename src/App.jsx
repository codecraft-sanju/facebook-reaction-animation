import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reactions = [
  { name: 'Like', icon: '👍', color: 'text-blue-500' },
  { name: 'Love', icon: '❤️', color: 'text-red-500' },
  { name: 'Haha', icon: '😂', color: 'text-yellow-500' },
  { name: 'Wow', icon: '😮', color: 'text-orange-500' },
  { name: 'Sad', icon: '😢', color: 'text-blue-400' },
  { name: 'Angry', icon: '😡', color: 'text-red-600' },
];

const App = () => {
  const [tooltip, setTooltip] = useState(null);
  const [selectedReaction, setSelectedReaction] = useState(null);

  const handleReactionClick = (reaction) => {
    setSelectedReaction(reaction);
  };

  const tooltipVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-blue-100">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">
        Reaction Panel Example
      </h1>

      {/* Reaction Panel */}
      <div className="flex gap-4 p-6 bg-white rounded-lg shadow-xl">
        {reactions.map((reaction, index) => (
          <motion.div
            key={index}
            className={`relative cursor-pointer text-2xl ${reaction.color}`}
            whileHover={{ scale: 1.4, y: -10 }}
            whileTap={{ scale: 1.2 }}
            onMouseEnter={() => setTooltip(reaction.name)}
            onMouseLeave={() => setTooltip(null)}
            onClick={() => handleReactionClick(reaction)}
            role="button"
            tabIndex={0}
            aria-label={reaction.name}
          >
            {reaction.icon}

            {/* Tooltip */}
            <AnimatePresence>
              {tooltip === reaction.name && (
                <motion.div
                  className="absolute z-10 px-2 py-1 text-xs text-white bg-gray-800 rounded-lg shadow-lg"
                  style={{
                    top: '-40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }}
                  variants={tooltipVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {reaction.name}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Selected Reaction Display */}
      {selectedReaction && (
        <div className="mt-8 text-xl font-semibold text-gray-800">
          You reacted with:{' '}
          <span className={`text-2xl ${selectedReaction.color}`}>
            {selectedReaction.icon}
          </span>{' '}
          {selectedReaction.name}
        </div>
      )}

      {/* Footer */}
      <footer className="absolute text-center bottom-4">
        <p className="text-sm text-gray-600">
          Created by{' '}
          <a
            href="https://www.instagram.com/sanjuuu_x18"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-500 hover:underline"
          >
            @sanjuuu_x18
          </a>{' '}
          | GitHub:{' '}
          <a
            href="https://github.com/codecraft-sanju"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gray-800 hover:underline"
          >
            codecraft-sanju
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
