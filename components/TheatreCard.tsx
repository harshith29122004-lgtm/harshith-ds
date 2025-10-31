
import React from 'react';
import { Theatre } from '../types';

interface TheatreCardProps {
  theatre: Theatre;
}

const TheatreCard: React.FC<TheatreCardProps> = ({ theatre }) => {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-500/30 transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover"
        src={theatre.imageUrl}
        alt={theatre.name}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{theatre.name}</h3>
        <p className="text-sm font-semibold text-indigo-400 mb-4">{theatre.location}</p>
        <ul className="space-y-2">
          {theatre.keyPoints.map((point, index) => (
            <li key={index} className="flex items-start text-slate-300">
              <svg
                className="w-4 h-4 mr-2 mt-1 text-indigo-400 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TheatreCard;
