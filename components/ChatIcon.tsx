
import React from 'react';
import ChatBubbleIcon from './icons/ChatBubbleIcon';

interface ChatIconProps {
  onClick: () => void;
}

const ChatIcon: React.FC<ChatIconProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-indigo-500 z-50"
      aria-label="Open Chatbot"
    >
      <ChatBubbleIcon className="h-8 w-8" />
    </button>
  );
};

export default ChatIcon;
