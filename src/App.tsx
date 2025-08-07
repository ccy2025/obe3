import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import { Toaster } from 'sonner';

export default function App() {
  return (
    <div className="min-h-screen font-noto-sans-sc bg-gray-50">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Toaster position="top-right" />
    </div>
  );
}
