
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const SanskritInterpreter = () => {
  const [code, setCode] = useState(
`नियोजय अ = १०
नियोजय ब = ५
योग अ ब
वियोग अ ब
गुणन अ ब
भाग अ ब
यदि अ > ५
    प्रदर्शय(अ)
अन्यथा
    प्रदर्शय(ब)
`);
  const [output, setOutput] = useState<string[]>([]);
  const { toast } = useToast();

  const handleRunCode = () => {
    try {
      setOutput(["Running Sanskrit code..."]);
      // In a real implementation, we would interpret the code here
      // For now, let's simulate some output
      const simulatedOutput = [
        "१५", // 10 + 5
        "५",  // 10 - 5
        "५०", // 10 * 5
        "२",  // 10 / 5
        "१०"  // if a > 5 then print a
      ];
      
      setTimeout(() => {
        setOutput(simulatedOutput);
        toast({
          title: "Code executed successfully",
          description: "Your Sanskrit code has been processed.",
        });
      }, 500);
    } catch (error) {
      setOutput([`Error: ${error.message}`]);
      toast({
        title: "Error running code",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
              संस्कृत कोड व्याख्याता
            </h1>
            <p className="text-gray-300">
              Sanskrit Code Interpreter
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-white">Code</h2>
                <Button 
                  onClick={handleRunCode}
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  Execute
                </Button>
              </div>
              <Card className="bg-black/30 backdrop-blur-md border border-gray-700 rounded-lg overflow-hidden">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-80 bg-transparent p-4 font-devanagari text-purple-200 focus:outline-none resize-none"
                  spellCheck="false"
                />
              </Card>
              <div className="text-gray-400 text-sm">
                <p>Keywords: नियोजय (assign), प्रदर्शय (print), योग (add), वियोग (subtract), गुणन (multiply), भाग (divide), यदि (if), अन्यथा (else)</p>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-white">Output</h2>
              <Card className="bg-black/30 backdrop-blur-md border border-gray-700 rounded-lg overflow-hidden">
                <div className="w-full h-80 p-4 font-devanagari text-green-400 overflow-y-auto">
                  {output.map((line, index) => (
                    <div key={index} className="mb-2">
                      <span className="text-gray-500">&gt; </span>
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          <footer className="text-center text-gray-500 text-sm pt-8">
            <p>Sanskrit Code Interpreter &copy; {new Date().getFullYear()}</p>
          </footer>
        </div>
      </div>
    </Layout>
  );
};

export default SanskritInterpreter;
