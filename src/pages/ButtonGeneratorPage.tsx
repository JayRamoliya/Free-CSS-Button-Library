
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Copy, RotateCw, Save, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ButtonGeneratorPage = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState<'html' | 'css' | null>(null);
  
  // Button properties
  const [text, setText] = useState('Button Text');
  const [bgColor, setBgColor] = useState('#6366f1');
  const [textColor, setTextColor] = useState('#ffffff');
  const [borderColor, setBorderColor] = useState('#6366f1');
  const [fontWeight, setFontWeight] = useState('500');
  const [borderRadius, setBorderRadius] = useState(4);
  const [borderWidth, setBorderWidth] = useState(0);
  const [paddingY, setPaddingY] = useState(8);
  const [paddingX, setPaddingX] = useState(16);
  const [fontSize, setFontSize] = useState(16);
  const [animationType, setAnimationType] = useState('none');
  const [hoverEffect, setHoverEffect] = useState('none');
  const [hoverBgColor, setHoverBgColor] = useState('#4f46e5');
  const [hoverTextColor, setHoverTextColor] = useState('#ffffff');
  
  // Generate CSS
  const generateCSS = () => {
    let css = `.btn-custom {
  background-color: ${bgColor};
  color: ${textColor};
  padding: ${paddingY}px ${paddingX}px;
  border-radius: ${borderRadius}px;
  font-size: ${fontSize}px;
  font-weight: ${fontWeight};
  cursor: pointer;
  border: ${borderWidth}px solid ${borderColor};
  transition: all 0.3s ease;
`;

    // Add hover effects
    if (hoverEffect !== 'none') {
      css += `\n.btn-custom:hover {
  background-color: ${hoverBgColor};
  color: ${hoverTextColor};`;
      
      if (hoverEffect === 'scale') {
        css += `\n  transform: scale(1.05);`;
      } else if (hoverEffect === 'shadow') {
        css += `\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);`;
      } else if (hoverEffect === 'elevate') {
        css += `\n  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);`;
      }
      
      css += `\n}`;
    }
    
    // Add animation
    if (animationType !== 'none') {
      if (animationType === 'pulse') {
        css += `\n@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.btn-custom {
  animation: pulse 2s infinite;
}`;
      } else if (animationType === 'bounce') {
        css += `\n@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}

.btn-custom {
  animation: bounce 2s infinite;
}`;
      } else if (animationType === 'shake') {
        css += `\n@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }
  20%, 40%, 60%, 80% { transform: translateX(2px); }
}

.btn-custom:hover {
  animation: shake 0.5s;
}`;
      }
    }
    
    css += `\n}`;
    
    return css;
  };
  
  // Generate HTML
  const generateHTML = () => {
    return `<button class="btn-custom">${text}</button>`;
  };
  
  // Create style element to preview the button
  useEffect(() => {
    const styleId = 'custom-button-preview';
    let styleElement = document.getElementById(styleId);
    
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }
    
    styleElement.innerHTML = generateCSS();
    
    return () => {
      if (styleElement) {
        document.head.removeChild(styleElement);
      }
    };
  }, [
    bgColor, textColor, borderColor, fontWeight, borderRadius, borderWidth,
    paddingY, paddingX, fontSize, animationType, hoverEffect, hoverBgColor, hoverTextColor
  ]);
  
  // Copy code to clipboard
  const copyToClipboard = (type: 'html' | 'css') => {
    const content = type === 'html' ? generateHTML() : generateCSS();
    navigator.clipboard.writeText(content).then(() => {
      setCopied(type);
      toast({
        title: 'Copied to clipboard',
        description: `The ${type.toUpperCase()} code has been copied to your clipboard.`,
        duration: 2000,
      });
      
      setTimeout(() => {
        setCopied(null);
      }, 2000);
    });
  };
  
  // Reset button properties
  const resetProperties = () => {
    setText('Button Text');
    setBgColor('#6366f1');
    setTextColor('#ffffff');
    setBorderColor('#6366f1');
    setFontWeight('500');
    setBorderRadius(4);
    setBorderWidth(0);
    setPaddingY(8);
    setPaddingX(16);
    setFontSize(16);
    setAnimationType('none');
    setHoverEffect('none');
    setHoverBgColor('#4f46e5');
    setHoverTextColor('#ffffff');
    
    toast({
      title: 'Reset complete',
      description: 'Button properties have been reset to default values.',
      duration: 2000,
    });
  };
  
  // Save to favorites
  const saveButton = () => {
    toast({
      title: 'Coming Soon',
      description: 'This feature will be available in a future update.',
      duration: 2000,
    });
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Button Generator</h1>
            <p className="text-muted-foreground md:text-lg max-w-[700px]">
              Create your own custom button by adjusting the properties below. See the preview update in real-time.
            </p>
          </div>
        </div>
      </section>
      
      {/* Generator */}
      <section className="py-12 flex-grow">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Controls */}
            <div className="lg:col-span-7 space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Button Properties</h3>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="text">Button Text</Label>
                        <Input
                          id="text"
                          value={text}
                          onChange={(e) => setText(e.target.value)}
                          placeholder="Button Text"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="font-weight">Font Weight</Label>
                        <Select value={fontWeight} onValueChange={setFontWeight}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Font Weight" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="400">Regular (400)</SelectItem>
                            <SelectItem value="500">Medium (500)</SelectItem>
                            <SelectItem value="600">Semibold (600)</SelectItem>
                            <SelectItem value="700">Bold (700)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="bg-color">Background Color</Label>
                        <div className="flex gap-2">
                          <div 
                            className="w-8 h-8 rounded-md border" 
                            style={{ backgroundColor: bgColor }}
                          />
                          <Input
                            id="bg-color"
                            type="text"
                            value={bgColor}
                            onChange={(e) => setBgColor(e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="text-color">Text Color</Label>
                        <div className="flex gap-2">
                          <div 
                            className="w-8 h-8 rounded-md border" 
                            style={{ backgroundColor: textColor }}
                          />
                          <Input
                            id="text-color"
                            type="text"
                            value={textColor}
                            onChange={(e) => setTextColor(e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="border-color">Border Color</Label>
                        <div className="flex gap-2">
                          <div 
                            className="w-8 h-8 rounded-md border" 
                            style={{ backgroundColor: borderColor }}
                          />
                          <Input
                            id="border-color"
                            type="text"
                            value={borderColor}
                            onChange={(e) => setBorderColor(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
                      <div className="space-y-4">
                        <Label>Border Radius: {borderRadius}px</Label>
                        <Slider 
                          value={[borderRadius]} 
                          min={0} 
                          max={24} 
                          step={1} 
                          onValueChange={(value) => setBorderRadius(value[0])} 
                        />
                      </div>
                      
                      <div className="space-y-4">
                        <Label>Border Width: {borderWidth}px</Label>
                        <Slider 
                          value={[borderWidth]} 
                          min={0} 
                          max={5} 
                          step={1} 
                          onValueChange={(value) => setBorderWidth(value[0])} 
                        />
                      </div>
                      
                      <div className="space-y-4">
                        <Label>Padding Y: {paddingY}px</Label>
                        <Slider 
                          value={[paddingY]} 
                          min={4} 
                          max={24} 
                          step={1} 
                          onValueChange={(value) => setPaddingY(value[0])} 
                        />
                      </div>
                      
                      <div className="space-y-4">
                        <Label>Padding X: {paddingX}px</Label>
                        <Slider 
                          value={[paddingX]} 
                          min={8} 
                          max={48} 
                          step={1} 
                          onValueChange={(value) => setPaddingX(value[0])} 
                        />
                      </div>
                      
                      <div className="space-y-4">
                        <Label>Font Size: {fontSize}px</Label>
                        <Slider 
                          value={[fontSize]} 
                          min={12} 
                          max={24} 
                          step={1} 
                          onValueChange={(value) => setFontSize(value[0])} 
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="animation">Animation</Label>
                        <Select value={animationType} onValueChange={setAnimationType}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Animation" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">None</SelectItem>
                            <SelectItem value="pulse">Pulse</SelectItem>
                            <SelectItem value="bounce">Bounce</SelectItem>
                            <SelectItem value="shake">Shake on Hover</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="hover-effect">Hover Effect</Label>
                        <Select value={hoverEffect} onValueChange={setHoverEffect}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Hover Effect" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">None</SelectItem>
                            <SelectItem value="color">Color Change</SelectItem>
                            <SelectItem value="scale">Scale Up</SelectItem>
                            <SelectItem value="shadow">Shadow</SelectItem>
                            <SelectItem value="elevate">Elevate</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    {hoverEffect !== 'none' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-4">
                        <div className="space-y-2">
                          <Label htmlFor="hover-bg-color">Hover Background Color</Label>
                          <div className="flex gap-2">
                            <div 
                              className="w-8 h-8 rounded-md border" 
                              style={{ backgroundColor: hoverBgColor }}
                            />
                            <Input
                              id="hover-bg-color"
                              type="text"
                              value={hoverBgColor}
                              onChange={(e) => setHoverBgColor(e.target.value)}
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="hover-text-color">Hover Text Color</Label>
                          <div className="flex gap-2">
                            <div 
                              className="w-8 h-8 rounded-md border" 
                              style={{ backgroundColor: hoverTextColor }}
                            />
                            <Input
                              id="hover-text-color"
                              type="text"
                              value={hoverTextColor}
                              onChange={(e) => setHoverTextColor(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex justify-between pt-4 border-t">
                      <Button variant="outline" onClick={resetProperties} className="flex items-center gap-2">
                        <RotateCw className="w-4 h-4" />
                        Reset
                      </Button>
                      
                      <Button onClick={saveButton} className="flex items-center gap-2">
                        <Save className="w-4 h-4" />
                        Save Button
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Preview and Code */}
            <div className="lg:col-span-5">
              <div className="space-y-8 sticky top-24">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4">Preview</h3>
                    <div className="flex items-center justify-center p-10 border rounded-lg bg-gradient-to-b from-muted/50 to-muted">
                      <button className="btn-custom">{text}</button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <Tabs defaultValue="html">
                    <div className="border-b px-6 py-3">
                      <TabsList className="mx-auto">
                        <TabsTrigger value="html">HTML</TabsTrigger>
                        <TabsTrigger value="css">CSS</TabsTrigger>
                      </TabsList>
                    </div>
                    <TabsContent value="html" className="p-0">
                      <div className="p-4 bg-muted flex items-center justify-between">
                        <h3 className="font-medium">HTML Code</h3>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard('html')}
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
                        {generateHTML()}
                      </pre>
                    </TabsContent>
                    <TabsContent value="css" className="p-0">
                      <div className="p-4 bg-muted flex items-center justify-between">
                        <h3 className="font-medium">CSS Code</h3>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard('css')}
                          className="h-8 w-8 p-0"
                        >
                          {copied === 'css' ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                      <pre className="p-4 text-sm overflow-x-auto font-mono whitespace-pre-wrap">
                        {generateCSS()}
                      </pre>
                    </TabsContent>
                  </Tabs>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ButtonGeneratorPage;
