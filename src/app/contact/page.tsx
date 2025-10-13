
import ContactForm from "@/components/contact-form";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Elie Gazel Portfolio',
  description: 'Get in touch for collaborations, opportunities, or just to say hello.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-3 uppercase inline-block overflow-hidden whitespace-nowrap animate-typing">
            Let's Connect<span className="text-primary animate-blink">|</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Feel free to contact, wether you're looking for a developer or just need more infos.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
