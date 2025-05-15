
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <section>
            <h1 className="text-4xl font-bold mb-6 text-brand">About ButtonCraft</h1>
            <p className="text-lg mb-4">
              ButtonCraft is a comprehensive CSS button library designed to help developers and designers
              create beautiful, accessible, and interactive buttons for their web applications.
            </p>
            <p className="text-lg mb-4">
              Our mission is to simplify the process of creating stylish and functional buttons
              while maintaining best practices for web accessibility and performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="mb-4">
              ButtonCraft began as a passion project by a team of front-end developers who were tired of
              recreating the same button styles for different projects. We wanted to create a centralized
              resource that would provide high-quality, customizable button components that could be easily
              integrated into any web project.
            </p>
            <p>
              Today, ButtonCraft offers thousands of unique button styles, animations, and effects
              that can be customized to fit any design system or brand identity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">The Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Alex Johnson</h3>
                <p className="text-muted-foreground">Founder & Lead Developer</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Maria Garcia</h3>
                <p className="text-muted-foreground">UI/UX Designer</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">David Kim</h3>
                <p className="text-muted-foreground">Front-end Developer</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">Sarah Lee</h3>
                <p className="text-muted-foreground">Documentation & Support</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">
              We'd love to hear from you! If you have any questions, feedback, or suggestions,
              please reach out to us.
            </p>
            <Button className="flex items-center gap-2" variant="outline" asChild>
              <a href="mailto:contact@buttoncraft.dev">
                Email Us <ExternalLink size={16} />
              </a>
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
