import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { X, MessageCircle, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Message {
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
  quickActions?: { label: string; action: string }[];
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hey there! 👋 Welcome to LoveDanceLive.\nHow can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
      quickActions: [
        { label: 'Entering a Competition', action: 'competition' },
        { label: 'Uploading a Video', action: 'upload' },
        { label: 'Workshops / Classes', action: 'workshops' },
        { label: 'Account or Login Help', action: 'account' },
        { label: 'Contact the Team', action: 'contact' }
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuickAction = (action: string) => {
    let response = '';
    let quickActions: { label: string; action: string }[] | undefined;

    switch (action) {
      case 'competition':
        response = "You can join live regional events or submit your video online — both routes can qualify you for Dubai!\nWant me to open the registration page for you?";
        quickActions = [{ label: 'Open How to Enter', action: 'link:/how-to-enter' }];
        break;
      case 'upload':
        response = "Ready to upload your performance? Make sure your video is MP4, MOV or AVI and under 500 MB.\nClick below to get started!";
        quickActions = [{ label: 'Upload Video', action: 'link:/how-to-enter' }];
        break;
      case 'workshops':
        response = "We've got amazing workshops across every region and online all year.\nWould you like to view the regional schedule or browse online classes?";
        quickActions = [
          { label: 'View Workshops', action: 'link:/workshops' },
          { label: 'Online Classes', action: 'link:/online-classes' }
        ];
        break;
      case 'account':
        response = "Having trouble logging in? Click below to reset your password or contact support.";
        quickActions = [
          { label: 'Reset Password', action: 'link:/auth' },
          { label: 'Contact Support', action: 'link:/contact' }
        ];
        break;
      case 'contact':
        response = "I can connect you with our support team!\nYou can reach us via email at hello@lovedancelive.com or fill out our contact form.";
        quickActions = [{ label: 'Contact Form', action: 'link:/contact' }];
        break;
      default:
        return;
    }

    const botMessage: Message = {
      text: response,
      sender: 'bot',
      timestamp: new Date(),
      quickActions
    };
    setMessages(prev => [...prev, botMessage]);
  };

  const sendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputValue;
    if (!textToSend.trim() || isLoading) return;

    const userMessage: Message = {
      text: textToSend,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({
            message: textToSend,
            conversationHistory: messages.slice(-6).map(m => ({
              role: m.sender === 'user' ? 'user' : 'assistant',
              content: m.text
            }))
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      const botResponse: Message = {
        text: data.reply || "I'm having trouble responding. Please try again!",
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        text: "Sorry, I'm having trouble connecting right now. Please try again or contact hello@lovedancelive.com for assistance.",
        sender: 'bot',
        timestamp: new Date(),
        quickActions: [{ label: 'Contact Support', action: 'link:/contact' }]
      };
      setMessages(prev => [...prev, errorMessage]);
      
      toast({
        title: "Connection Error",
        description: "Unable to reach the chat service. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-4 sm:right-6 z-50 h-14 w-14 rounded-full bg-accent text-accent-foreground shadow-lg hover:bg-accent/90"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-4 left-4 sm:left-auto sm:right-6 z-50 sm:w-96 max-w-[calc(100vw-2rem)] shadow-2xl">
          <CardHeader className="bg-accent text-accent-foreground">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-poppins">LoveDanceLive Assistant</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-accent-foreground hover:bg-accent-foreground/10"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-accent-foreground/80 mt-1">Ask me anything about LoveDanceLive!</p>
          </CardHeader>
          <CardContent className="p-0">
            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div key={index}>
                  <div
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === 'user'
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                  {/* Quick Action Buttons */}
                  {message.quickActions && (
                    <div className={`flex gap-2 mt-2 flex-wrap ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      {message.quickActions.map((qa, qaIndex) => (
                        <Button
                          key={qaIndex}
                          variant="outline"
                          size="sm"
                          className="text-xs h-8"
                          onClick={() => {
                            if (qa.action.startsWith('link:')) {
                              window.location.href = qa.action.replace('link:', '');
                            } else {
                              handleQuickAction(qa.action);
                            }
                          }}
                        >
                          {qa.label}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t p-4">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button
                  onClick={() => sendMessage()}
                  size="icon"
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatBot;