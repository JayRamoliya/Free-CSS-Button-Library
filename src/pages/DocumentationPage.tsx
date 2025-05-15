
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';

const DocumentationPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-brand">Documentation</h1>
          
          <Tabs defaultValue="getting-started">
            <TabsList className="mb-6">
              <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
              <TabsTrigger value="installation">Installation</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
              <TabsTrigger value="api">API</TabsTrigger>
            </TabsList>
            
            <TabsContent value="getting-started" className="space-y-4">
              <h2 className="text-2xl font-bold">Getting Started with ButtonCraft</h2>
              <p>
                ButtonCraft provides thousands of customizable button styles for your web projects.
                You can use our buttons in multiple ways:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Copy HTML/CSS directly from the button detail page</li>
                <li>Install via npm and import components</li>
                <li>Use our ButtonCraft CDN for quick prototyping</li>
              </ul>
              <p className="mt-4">
                Choose the method that best fits your workflow and project requirements.
              </p>
            </TabsContent>
            
            <TabsContent value="installation" className="space-y-4">
              <h2 className="text-2xl font-bold">Installation</h2>
              <h3 className="text-xl font-bold mt-4">NPM</h3>
              <div className="bg-muted p-4 rounded-md font-mono">
                npm install buttoncraft
              </div>
              
              <h3 className="text-xl font-bold mt-4">Yarn</h3>
              <div className="bg-muted p-4 rounded-md font-mono">
                yarn add buttoncraft
              </div>
              
              <h3 className="text-xl font-bold mt-4">CDN</h3>
              <div className="bg-muted p-4 rounded-md font-mono overflow-x-auto">
                {`<link rel="stylesheet" href="https://cdn.buttoncraft.dev/buttoncraft.min.css">`}
              </div>
            </TabsContent>
            
            <TabsContent value="usage" className="space-y-4">
              <h2 className="text-2xl font-bold">Usage</h2>
              <h3 className="text-xl font-bold">React</h3>
              <div className="bg-muted p-4 rounded-md font-mono overflow-x-auto">
                {`import { Button } from 'buttoncraft';

function App() {
  return (
    <Button variant="gradient" size="lg">
      Click Me
    </Button>
  );
}`}
              </div>
              
              <h3 className="text-xl font-bold mt-4">HTML/CSS</h3>
              <div className="bg-muted p-4 rounded-md font-mono overflow-x-auto">
                {`<button class="bc-button bc-gradient bc-lg">
  Click Me
</button>`}
              </div>
            </TabsContent>
            
            <TabsContent value="api" className="space-y-4">
              <h2 className="text-2xl font-bold">API Reference</h2>
              <p>
                The ButtonCraft API provides several properties you can use to customize your buttons.
              </p>
              
              <h3 className="text-xl font-bold mt-4">Button Props</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border p-2 text-left">Prop</th>
                      <th className="border p-2 text-left">Type</th>
                      <th className="border p-2 text-left">Default</th>
                      <th className="border p-2 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">variant</td>
                      <td className="border p-2 font-mono">string</td>
                      <td className="border p-2">default</td>
                      <td className="border p-2">The button variant (default, outline, ghost, etc.)</td>
                    </tr>
                    <tr>
                      <td className="border p-2">size</td>
                      <td className="border p-2 font-mono">string</td>
                      <td className="border p-2">md</td>
                      <td className="border p-2">The button size (sm, md, lg)</td>
                    </tr>
                    <tr>
                      <td className="border p-2">disabled</td>
                      <td className="border p-2 font-mono">boolean</td>
                      <td className="border p-2">false</td>
                      <td className="border p-2">Whether the button is disabled</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DocumentationPage;
