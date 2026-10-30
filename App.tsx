import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Theatre as TheatreType, ChatMessage as ChatMessageType } from './types';
import TheatreCard from './components/TheatreCard';
import ChatIcon from './components/ChatIcon';
import ArrowLeftIcon from './components/icons/ArrowLeftIcon';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';

const theatres: TheatreType[] = [
    { id: 1, name: 'Ranga Shankara', location: 'Bengaluru', keyPoints: ['Dedicated to theatre arts', 'Hosts plays from around the world', 'Intimate, engaging stage design'], imageUrl: 'https://picsum.photos/seed/ranga/600/400' },
    { id: 2, name: 'Chowdiah Memorial Hall', location: 'Bengaluru', keyPoints: ['Violin-shaped auditorium', 'Hosts diverse cultural events', 'Acoustically acclaimed venue'], imageUrl: 'https://picsum.photos/seed/chowdiah/600/400' },
    { id: 3, name: 'Jagriti Theatre', location: 'Bengaluru', keyPoints: ['Focus on contemporary English theatre', 'State-of-the-art facility', 'Promotes new writing and talent'], imageUrl: 'https://picsum.photos/seed/jagriti/600/400' },
    { id: 4, name: 'Gubbi Veeranna Rangamandira', location: 'Bengaluru', keyPoints: ['Named after the legendary theatre artist', 'Supports traditional Kannada theatre', 'A hub for local artists'], imageUrl: 'https://picsum.photos/seed/gubbi/600/400' },
    { id: 5, name: 'Kalasuruchi', location: 'Mysuru', keyPoints: ['Promotes folk arts and theatre', 'Located in a serene environment', 'Hosts workshops and performances'], imageUrl: 'https://picsum.photos/seed/kalasuruchi/600/400' },
    { id: 6, name: 'Rangayana', location: 'Mysuru', keyPoints: ['Renowned theatre repertory', 'Nurtures professional actors', 'Produces acclaimed Kannada plays'], imageUrl: 'https://picsum.photos/seed/rangayana/600/400' },
    { id: 7, name: 'Kalamandira', location: 'Mysuru', keyPoints: ['Premier auditorium for arts', 'Hosts major cultural festivals', 'Iconic city landmark'], imageUrl: 'https://picsum.photos/seed/kalamandira/600/400' },
    { id: 8, name: 'Shivarama Karantha Rangamandira', location: 'Udupi', keyPoints: ['Named after the Jnanapeeth awardee', 'Center for coastal Karnataka arts', 'Modern facilities for performances'], imageUrl: 'https://picsum.photos/seed/karantha/600/400' },
    { id: 9, name: 'Suvarna Samskruthika Samuchaya', location: 'Dharwad', keyPoints: ['Large cultural complex', 'Supports North Karnataka art forms', 'Venue for music, dance, and drama'], imageUrl: 'https://picsum.photos/seed/suvarna/600/400' },
    { id: 10, name: 'Town Hall', location: 'Mangaluru', keyPoints: ['Historic venue in the city center', 'Hosts Tulu, Konkani, and Kannada plays', 'Community cultural hub'], imageUrl: 'https://picsum.photos/seed/townhall/600/400' },
    { id: 11, name: 'Urvashi Cinema', location: 'Bengaluru', keyPoints: ['Iconic single-screen theatre', 'Known for its 70mm screen', 'Screens major movie releases'], imageUrl: 'https://picsum.photos/seed/urvashi/600/400' },
    { id: 12, name: 'Rex Theatre', location: 'Bengaluru', keyPoints: ['Classic cinema hall on Brigade Road', 'Recently renovated with modern tech', 'Shows a mix of Hollywood and Bollywood'], imageUrl: 'https://picsum.photos/seed/rex/600/400' },
    { id: 13, name: 'Cauvery Theatre', location: 'Bengaluru', keyPoints: ['Famous for Kannada film premieres', 'Large seating capacity', 'Beloved by local film fans'], imageUrl: 'https://picsum.photos/seed/cauvery/600/400' },
    { id: 14, name: 'Shankar Nag Chitramandira', location: 'Bengaluru', keyPoints: ['Named after the famous actor/director', 'Promotes experimental cinema', 'A tribute to a cinema legend'], imageUrl: 'https://picsum.photos/seed/shankarnag/600/400' },
    { id: 15, name: 'Natana School of Theatre Arts', location: 'Mysuru', keyPoints: ["Focuses on children's theatre", 'Conducts workshops and training', 'Innovative and educational performances'], imageUrl: 'https://picsum.photos/seed/natana/600/400' },
    { id: 16, name: 'KH Kalasoudha', location: 'Bengaluru', keyPoints: ['Amphitheatre-style seating', 'Hosts a variety of art forms', 'Managed by artists, for artists'], imageUrl: 'https://picsum.photos/seed/kalasoudha/600/400' },
    { id: 17, name: 'Prabhat Kalapoornima', location: 'Bengaluru', keyPoints: ['A classic cinema experience', 'Well-maintained single screen', 'Shows regional and national films'], imageUrl: 'https://picsum.photos/seed/prabhat/600/400' },
    { id: 18, name: 'Kinnara Mela', location: 'Tumari', keyPoints: ['Unique theatre in a rural setting', 'Focuses on folk and experimental forms', 'Residential theatre group'], imageUrl: 'https://picsum.photos/seed/kinnara/600/400' },
    { id: 19, name: 'Dr. Rajkumar Kalakshetra', location: 'Raichur', keyPoints: ['Major cultural center in the region', 'Named after the legendary actor', 'Multi-purpose performance hall'], imageUrl: 'https://picsum.photos/seed/rajkumar/600/400' },
    { id: 20, name: 'Neenasam', location: 'Heggodu', keyPoints: ['Influential theatre institute and repertory', 'Known for serious, artistic theatre', 'Hosts an annual culture course'], imageUrl: 'https://picsum.photos/seed/neenasam/600/400' },
];

const TheatreGuideScreen = ({ onChatClick }: { onChatClick: () => void }) => (
    <div className="min-h-screen bg-slate-900">
        <main className="container mx-auto px-4 py-8">
            <header className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Karnataka Theatre & Cinema Guide</h1>
                <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                    Explore the rich cultural landscape of Karnataka's most celebrated performance venues.
                </p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {theatres.map((theatre) => <TheatreCard key={theatre.id} theatre={theatre} />)}
            </div>
        </main>
        <ChatIcon onClick={onChatClick} />
    </div>
);

const ChatbotScreen = ({ onBackClick }: { onBackClick: () => void }) => {
    const [messages, setMessages] = useState<ChatMessageType[]>([{
        id: 'init',
        role: 'model',
        text: "Hello! I'm your guide to Karnataka's theatres. Ask me about venues, theatre history, or how to find current show information."
    }]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = useCallback(async (messageText: string) => {
        const userMessage: ChatMessageType = {
            id: Date.now().toString(),
            role: 'user',
            text: messageText,
        };
        const history = messages
            .filter((message) => message.id !== 'init')
            .slice(-10)
            .map(({ role, text }) => ({ role, text }));

        setMessages((previous) => [...previous, userMessage]);
        setIsLoading(true);
        const modelMessageId = (Date.now() + 1).toString();
        setMessages((previous) => [...previous, { id: modelMessageId, role: 'model', text: '...' }]);

        try {
            const response = await fetch('/api/theatre-chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: messageText, history }),
                signal: AbortSignal.timeout(45_000),
            });
            const result = await response.json().catch(() => ({}));
            if (!response.ok) throw new Error(typeof result.error === 'string' ? result.error : 'Chat service unavailable.');
            const answer = typeof result.answer === 'string' ? result.answer : 'No response was returned.';
            setMessages((previous) => previous.map((item) =>
                item.id === modelMessageId ? { ...item, text: answer } : item
            ));
        } catch {
            setMessages((previous) => previous.map((item) =>
                item.id === modelMessageId ? { ...item, text: "I'm having trouble connecting right now. Please try again in a moment." } : item
            ));
        } finally {
            setIsLoading(false);
        }
    }, [messages]);

    return (
        <div className="h-screen w-full flex flex-col bg-slate-800">
            <header className="flex items-center p-4 bg-slate-900/70 backdrop-blur-sm shadow-md z-10">
                <button onClick={onBackClick} className="p-2 rounded-full hover:bg-slate-700 transition-colors" aria-label="Go back">
                    <ArrowLeftIcon className="h-6 w-6 text-white" />
                </button>
                <div className="ml-4">
                    <h2 className="text-xl font-bold text-white">Karnataka Theatre Chatbot</h2>
                    <p className="text-sm text-green-400">Online</p>
                </div>
            </header>
            <main className="flex-grow overflow-y-auto p-6">
                <div className="space-y-6">
                    {messages.map((message) => <ChatMessage key={message.id} message={message} />)}
                    <div ref={messagesEndRef} />
                </div>
            </main>
            <footer className="p-4 bg-slate-900/70 backdrop-blur-sm">
                <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
            </footer>
        </div>
    );
};

const App: React.FC = () => {
    const [screen, setScreen] = useState<'guide' | 'chatbot'>('guide');
    if (screen === 'chatbot') return <ChatbotScreen onBackClick={() => setScreen('guide')} />;
    return <TheatreGuideScreen onChatClick={() => setScreen('chatbot')} />;
};

export default App;
