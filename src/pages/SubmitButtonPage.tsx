
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';

const SubmitButtonPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    htmlCode: '',
    cssCode: '',
    jsCode: '',
    author: '',
    email: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, category: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit this to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Button Submitted",
      description: "Your button has been submitted for review.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      category: '',
      htmlCode: '',
      cssCode: '',
      jsCode: '',
      author: '',
      email: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-brand">Submit Your Button</h1>
          <p className="text-lg mb-8">
            Share your creative button designs with our community. Submitted buttons will be reviewed and,
            if approved, added to our library.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Button Details</h2>
              
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-1">
                  Button Title *
                </label>
                <Input 
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Give your button a unique name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-1">
                  Description *
                </label>
                <Textarea 
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your button and its features"
                  required
                  className="min-h-[100px]"
                />
              </div>
              
              <div>
                <label htmlFor="category" className="block text-sm font-medium mb-1">
                  Category *
                </label>
                <Select
                  value={formData.category}
                  onValueChange={handleSelectChange}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="minimal">Minimal</SelectItem>
                    <SelectItem value="3d">3D</SelectItem>
                    <SelectItem value="gradient">Gradient</SelectItem>
                    <SelectItem value="neon">Neon</SelectItem>
                    <SelectItem value="glassmorphism">Glassmorphism</SelectItem>
                    <SelectItem value="animated">Animated</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Button Code</h2>
              
              <div>
                <label htmlFor="htmlCode" className="block text-sm font-medium mb-1">
                  HTML Code *
                </label>
                <Textarea 
                  id="htmlCode"
                  name="htmlCode"
                  value={formData.htmlCode}
                  onChange={handleInputChange}
                  placeholder="<button class='my-button'>Click Me</button>"
                  required
                  className="min-h-[100px] font-mono"
                />
              </div>
              
              <div>
                <label htmlFor="cssCode" className="block text-sm font-medium mb-1">
                  CSS Code *
                </label>
                <Textarea 
                  id="cssCode"
                  name="cssCode"
                  value={formData.cssCode}
                  onChange={handleInputChange}
                  placeholder=".my-button { ... }"
                  required
                  className="min-h-[150px] font-mono"
                />
              </div>
              
              <div>
                <label htmlFor="jsCode" className="block text-sm font-medium mb-1">
                  JavaScript Code (optional)
                </label>
                <Textarea 
                  id="jsCode"
                  name="jsCode"
                  value={formData.jsCode}
                  onChange={handleInputChange}
                  placeholder="// Optional JavaScript for advanced interactions"
                  className="min-h-[100px] font-mono"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">About You</h2>
              
              <div>
                <label htmlFor="author" className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <Input 
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  placeholder="Your name or username"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address *
                </label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="We'll notify you when your button is approved"
                  required
                />
              </div>
            </div>
            
            <div className="pt-4">
              <Button type="submit" size="lg" className="w-full md:w-auto">
                Submit Button
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SubmitButtonPage;
