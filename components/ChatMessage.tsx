
import React from 'react';
import { ChatMessage as ChatMessageType } from '../types';
import UserIcon from './icons/UserIcon';
import BotIcon from './icons/BotIcon';

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div className={`flex items-start gap-4 ${isUser ? 'justify-end' : ''}`}>
      {!isUser && (
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center">
          <BotIcon className="h-6 w-6 text-white" />
        </div>
      )}
      <div
        className={`max-w-md lg:max-w-2xl rounded-lg px-4 py-3 shadow ${
          isUser
            ? 'bg-indigo-600 text-white rounded-br-none'
            : 'bg-slate-700 text-slate-200 rounded-bl-none'
        }`}
      >
        <p className="text-base whitespace-pre-wrap">{message.text}</p>
      </div>
       {isUser && (
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-slate-600 flex items-center justify-center">
          <UserIcon className="h-6 w-6 text-white" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
