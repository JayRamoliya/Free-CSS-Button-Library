
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-brand flex items-center justify-center">
                <span className="text-white font-bold">BC</span>
              </div>
              <span className="font-bold text-xl">ButtonCraft</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              The ultimate CSS button library for modern web applications.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Pages</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link to="/buttons" className="text-muted-foreground hover:text-foreground transition-colors">All Buttons</Link></li>
              <li><Link to="/categories" className="text-muted-foreground hover:text-foreground transition-colors">Categories</Link></li>
              <li><Link to="/generator" className="text-muted-foreground hover:text-foreground transition-colors">Generator</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/docs" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Submit Button</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Discord</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ButtonCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
