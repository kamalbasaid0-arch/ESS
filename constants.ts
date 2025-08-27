
import { NavLinkItem } from './types';

export const COMPANY_NAME = "ESS Construction";
export const COMPANY_SLOGAN = "Building Tomorrow's Landmarks, Today.";

export const NAV_LINKS: NavLinkItem[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/services', label: 'Our Services' },
  { path: '/projects', label: 'Our Projects' },
  { path: '/contact', label: 'Contact Us' },
];

export const GEMINI_MODEL_NAME = 'gemini-2.5-flash-preview-04-17';

export const CONTACT_INFO = {
  address: "123 Construction Ave, Building City, 00100",
  phone: "+1 (234) 567-8900",
  email: "info@essconstruction.example.com",
};

export const GEMINI_CHAT_SYSTEM_INSTRUCTION = `You are a helpful and knowledgeable assistant for '${COMPANY_NAME}', a leading company in construction and public works. Your expertise includes building construction, public infrastructure projects, hydraulic engineering, and equipment rental. Provide clear, concise, and professional answers to user inquiries about our company, services, past projects, and general construction topics. If a question is outside your scope or requires specific confidential information, politely state that you cannot provide the answer and suggest contacting the company directly through the contact page. Maintain a helpful and approachable tone.`;

