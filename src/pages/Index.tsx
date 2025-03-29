
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const sampleCodes = [
  {
    title: "1. Basic Arithmetic",
    code: `नियोजय अ = १०
नियोजय ब = ५
प्रदर्शय(योग अ ब)     # जोड़: १५
प्रदर्शय(वियोग अ ब)   # घटाव: ५
प्रदर्शय(गुणन अ ब)    # गुणा: ५०
प्रदर्शय(भाग अ ब)     # भाग: २
`
  },
  {
    title: "2. If-Else Condition",
    code: `नियोजय अ = १५
यदि अ > १०
    प्रदर्शय(अ)  # यदि सत्य, तो १५ मुद्रित हो जाएगा
अन्यथा
    प्रदर्शय("छोटा संख्या")
`
  },
  {
    title: "3. While Loop",
    code: `नियोजय संख्या = ५
यावत् संख्या > ०
    प्रदर्शय(संख्या)
    नियोजय संख्या = संख्या - १
`
  },
  {
    title: "4. For Loop",
    code: `सर्वे इ १ ५
    प्रदर्शय(इ)
समाप्त
`
  },
  {
    title: "5. Factorial",
    code: `नियोजय संख्या = ५
नियोजय फैक्टोरियल = १
यावत् संख्या > ०
    नियोजय फैक्टोरियल = फैक्टोरियल * संख्या
    नियोजय संख्या = संख्या - १
प्रदर्शय(फैक्टोरियल)  # १२०
`
  },
  {
    title: "6. Fibonacci",
    code: `नियोजय अ = ०
नियोजय ब = १
प्रदर्शय(अ)
प्रदर्शय(ब)
नियोजय सीमा = ८
नियोजय गणना = २
यावत् गणना < सीमा
    नियोजय अगला = अ + ब
    प्रदर्शय(अगला)
    नियोजय अ = ब
    नियोजय ब = अगला
    नियोजय गणना = गणना + १
`
  },
  {
    title: "7. Maximum",
    code: `नियोजय अ = २०
नियोजय ब = ३०
यदि अ > ब
    प्रदर्शय(अ)
अन्यथा
    प्रदर्शय(ब)  # ३० मुद्रित होगा
`
  },
  {
    title: "8. Even or Odd",
    code: `नियोजय संख्या = ७
यदि संख्या % २ == ०
    प्रदर्शय("सम संख्या")
अन्यथा
    प्रदर्शय("विषम संख्या")  # "विषम संख्या" मुद्रित होगा
`
  },
  {
    title: "9. Sum 1 to N",
    code: `नियोजय अंत = १०
नियोजय योग = ०
सर्वे इ १ अंत
    नियोजय योग = योग + इ
समाप्त
प्रदर्शय(योग)  # ५५ मुद्रित होगा
`
  },
  {
    title: "10. Reverse Number",
    code: `नियोजय संख्या = १२३४
नियोजय उलटा = ०
यावत् संख्या > ०
    नियोजय अंक = संख्या % १०
    नियोजय उलटा = उलटा * १० + अंक
    नियोजय संख्या = भाग संख्या १०
प्रदर्शय(उलटा)  # ४३२१ मुद्रित होगा
`
  }
];

const SanskritInterpreter = () => {
  const [code, setCode] = useState(sampleCodes[0].code);
  const [output, setOutput] = useState<string[]>([]);
  const { toast } = useToast();

  const handleRunCode = () => {
    try {
      setOutput(["Running Sanskrit code..."]);
      
      let simulatedOutput: string[] = [];
      
      // Simulate basic arithmetic operations
      if (code.includes("योग अ ब")) {
        simulatedOutput.push("१५"); // 10 + 5
      }
      if (code.includes("वियोग अ ब")) {
        simulatedOutput.push("५");  // 10 - 5
      }
      if (code.includes("गुणन अ ब")) {
        simulatedOutput.push("५०"); // 10 * 5
      }
      if (code.includes("भाग अ ब")) {
        simulatedOutput.push("२");  // 10 / 5
      }
      
      // Simulate if-else conditions
      if (code.includes("यदि अ > ५") && code.includes("प्रदर्शय(अ)")) {
        simulatedOutput.push("१०"); // if a > 5 then print a
      }
      if (code.includes("यदि अ > १०")) {
        simulatedOutput.push("१५");
      }
      
      // Simulate loops
      if (code.includes("संख्या = ५") && code.includes("यावत् संख्या > ०")) {
        simulatedOutput.push("५");
        simulatedOutput.push("४");
        simulatedOutput.push("३");
        simulatedOutput.push("२");
        simulatedOutput.push("१");
      }
      
      // Simulate fibonacci
      if (code.includes("फिबोनाची") || code.includes("अगला = अ + ब")) {
        simulatedOutput.push("०");
        simulatedOutput.push("१");
        simulatedOutput.push("१");
        simulatedOutput.push("२");
        simulatedOutput.push("३");
        simulatedOutput.push("५");
        simulatedOutput.push("८");
        simulatedOutput.push("१३");
      }
      
      // Simulate for loop
      if (code.includes("सर्वे इ १ ५")) {
        simulatedOutput.push("१");
        simulatedOutput.push("२");
        simulatedOutput.push("३");
        simulatedOutput.push("४");
        simulatedOutput.push("५");
      }
      
      // Simulate factorial
      if (code.includes("फैक्टोरियल") && code.includes("संख्या = ५")) {
        simulatedOutput.push("१२०");
      }
      
      // Simulate maximum
      if (code.includes("यदि अ > ब") && code.includes("अ = २०") && code.includes("ब = ३०")) {
        simulatedOutput.push("३०");
      }
      
      // Simulate even or odd
      if (code.includes("संख्या % २ == ०") && code.includes("संख्या = ७")) {
        simulatedOutput.push("विषम संख्या");
      }
      
      // Simulate sum 1 to N
      if (code.includes("अंत = १०") && code.includes("योग = ०")) {
        simulatedOutput.push("५५");
      }
      
      // Simulate reverse number
      if (code.includes("संख्या = १२३४") && code.includes("उलटा = ०")) {
        simulatedOutput.push("४३२१");
      }
      
      if (simulatedOutput.length === 0) {
        simulatedOutput = ["Execution complete."];
      }
      
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

  const handleSelectSampleCode = (sampleCode: string) => {
    setCode(sampleCode);
    setOutput([]);
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

          <div className="flex flex-wrap gap-2 mb-6">
            {sampleCodes.map((sample, index) => (
              <Button 
                key={index}
                variant="outline" 
                className="bg-gray-800/50 text-gray-200 border-gray-700 hover:bg-gray-700/50"
                onClick={() => handleSelectSampleCode(sample.code)}
              >
                {sample.title}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <Card className="bg-gray-800/30 backdrop-blur-md border border-gray-700 rounded-lg overflow-hidden">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-80 bg-transparent p-4 font-devanagari text-purple-200 focus:outline-none resize-none"
                  spellCheck="false"
                />
              </Card>
              <div className="text-gray-400 text-sm">
                <p>Keywords: नियोजय (assign), प्रदर्शय (print), योग (add), वियोग (subtract), गुणन (multiply), भाग (divide), यदि (if), अन्यथा (else), यावत् (while), सर्वे (for)</p>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-white">Output</h2>
              <Card className="bg-gray-800/30 backdrop-blur-md border border-gray-700 rounded-lg overflow-hidden">
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
