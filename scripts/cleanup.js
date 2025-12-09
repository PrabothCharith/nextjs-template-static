const fs = require('fs');
const path = require('path');

const pageFile = path.join(__dirname, '../src/app/page.tsx');

const cleanContent = `"use client";
import { Button } from "@heroui/react";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold">
        Next.js Static Template
      </h1>
      <p className="text-muted-foreground">
        Start editing <code className="font-mono bg-muted px-1 py-0.5 rounded">src/app/page.tsx</code> to build your app.
      </p>
      
      <div className="flex gap-2">
        <Button onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          Toggle Theme
        </Button>
      </div>
    </div>
  );
}
`;

try {
  fs.writeFileSync(pageFile, cleanContent);
  console.log('✅ Successfully cleaned src/app/page.tsx');
  console.log('🚀 You are ready to start building!');
} catch (error) {
  console.error('❌ Error cleaning file:', error);
  process.exit(1);
}
