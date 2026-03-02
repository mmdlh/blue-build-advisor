import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import HomePage from "./pages/HomePage";
import SmartMaterialsPage from "./pages/SmartMaterialsPage";
import EnergySavingPage from "./pages/EnergySavingPage";
import DecorativePage from "./pages/DecorativePage";
import EngineeringPage from "./pages/EngineeringPage";
import BrandsPage from "./pages/BrandsPage";
import SolutionsPage from "./pages/SolutionsPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/smart-materials" element={<SmartMaterialsPage />} />
            <Route path="/energy-saving" element={<EnergySavingPage />} />
            <Route path="/decorative" element={<DecorativePage />} />
            <Route path="/engineering" element={<EngineeringPage />} />
            <Route path="/brands" element={<BrandsPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
