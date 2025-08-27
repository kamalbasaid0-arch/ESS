
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  icon?: React.ReactNode; // For SVG or character icons
  imageUrl?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  details?: string; // More detailed description for modal/page
  completionDate?: string;
  location?: string;
}

export interface NavLinkItem {
  path: string;
  label: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}
