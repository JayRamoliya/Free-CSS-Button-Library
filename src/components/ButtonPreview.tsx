
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ButtonPreviewProps {
  name: string;
  cssClass: string;
  htmlCode: string;
  cssCode: string;
  isDetailView?: boolean;
}

const ButtonPreview: React.FC<ButtonPreviewProps> = ({
  name,
  cssClass,
  htmlCode,
  cssCode,
  isDetailView = false
}) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState<'html' | 'css' | null>(null);

  const copyToClipboard = (text: string, type: 'html' | 'css') => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      toast({
        title: 'Copied to clipboard',
        description: `The ${type.toUpperCase()} code was copied to your clipboard.`,
        duration: 2000,
      });
      
      setTimeout(() => {
        setCopied(null);
      }, 2000);
    });
  };

  // Dynamically insert the button's CSS
  React.useEffect(() => {
    const styleId = `button-style-${cssClass}`;
    
    if (!document.getElementById(styleId)) {
      const styleElement = document.createElement('style');
      styleElement.id = styleId;
      styleElement.innerHTML = cssCode;
      document.head.appendChild(styleElement);
    }
    
    return () => {
      if (isDetailView) return; // Don't remove if it's a detail view
      const element = document.getElementById(styleId);
      if (element) document.head.removeChild(element);
    };
  }, [cssClass, cssCode, isDetailView]);

  // Extract the class name from the HTML code
  const buttonClass = cssClass;

  // Create a basic preview that safely renders the button
  const previewButton = <button className={buttonClass}>{name}</button>;

  if (isDetailView) {
    return (
      <div className="space-y-6">
        <div className="p-10 flex justify-center items-center border rounded-lg bg-gradient-to-b from-muted/50 to-muted">
          {previewButton}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="overflow-hidden">
            <div className="p-4 bg-muted flex items-center justify-between">
              <h3 className="font-medium">HTML</h3>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => copyToClipboard(htmlCode, 'html')}
                className="h-8 w-8 p-0"
              >
                {copied === 'html' ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            <pre className="p-4 text-sm overflow-x-auto font-mono">
              {htmlCode}
            </pre>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="p-4 bg-muted flex items-center justify-between">
              <h3 className="font-medium">CSS</h3>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => copyToClipboard(cssCode, 'css')}
                className="h-8 w-8 p-0"
              >
                {copied === 'css' ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            <pre className="p-4 text-sm overflow-x-auto font-mono">
              {cssCode}
            </pre>
          </Card>
        </div>
        
        <div className="p-4 border rounded-lg bg-muted/30">
          <h3 className="font-medium mb-2">Usage Instructions</h3>
          <ol className="list-decimal list-inside text-sm space-y-2 text-muted-foreground">
            <li>Copy the HTML and CSS code</li>
            <li>Paste the CSS into your stylesheet</li>
            <li>Use the HTML structure in your templates</li>
            <li>Customize the button text and styles as needed</li>
          </ol>
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col items-center justify-center p-4">
      {previewButton}
    </div>
  );
};

export default ButtonPreview;
