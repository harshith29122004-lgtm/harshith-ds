
export interface Theatre {
  id: number;
  name: string;
  location: string;
  keyPoints: string[];
  imageUrl: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
}
