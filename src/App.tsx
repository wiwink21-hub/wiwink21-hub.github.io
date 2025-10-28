import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import TvsAudio from "./pages/TvsAudio";
import HomeAppliances from "./pages/HomeAppliances";
import Computing from "./pages/Computing";
import Support from "./pages/Support";
import CustomerService from "./pages/CustomerService";
import ProductRegistration from "./pages/ProductRegistration";
import Warranty from "./pages/Warranty";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/tvs-audio" element={<TvsAudio />} />
          <Route path="/home-appliances" element={<HomeAppliances />} />
          <Route path="/computing" element={<Computing />} />
          <Route path="/support" element={<Support />} />
          <Route path="/customer-service" element={<CustomerService />} />
          <Route path="/product-registration" element={<ProductRegistration />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
