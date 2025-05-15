
import React from 'react';
import { Button } from '@/components/ui/button';

interface NpmInfoProps {
  version?: string;
  packageName?: string;
}

const NpmInfo: React.FC<NpmInfoProps> = ({ 
  version = "1.0.0", 
  packageName = "buttoncraft" 
}) => {
  const installCommand = `npm install ${packageName}@${version}`;
  const yarnCommand = `yarn add ${packageName}@${version}`;
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };
  
  return (
    <div className="bg-card border rounded-md p-4 mb-6">
      <h3 className="font-semibold mb-2">Install via npm</h3>
      <div className="bg-muted p-2 rounded flex justify-between items-center mb-2">
        <code className="text-sm">{installCommand}</code>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => copyToClipboard(installCommand)}
          className="h-6 text-xs"
        >
          Copy
        </Button>
      </div>
      
      <h3 className="font-semibold mb-2">Install via yarn</h3>
      <div className="bg-muted p-2 rounded flex justify-between items-center">
        <code className="text-sm">{yarnCommand}</code>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => copyToClipboard(yarnCommand)}
          className="h-6 text-xs"
        >
          Copy
        </Button>
      </div>
    </div>
  );
};

export default NpmInfo;
