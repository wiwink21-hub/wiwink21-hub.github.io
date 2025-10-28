import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Tv, Refrigerator, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import tvProduct from "@/assets/tv-product.jpg";
import fridgeProduct from "@/assets/fridge-product.jpg";
import washerProduct from "@/assets/washer-product.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Modern home electronics" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Innovation for a <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Better Life</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover cutting-edge technology designed to enhance your everyday living experience.
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild className="group">
                <Link to="/products">
                  Explore Products
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground text-lg">Premium technology for modern living</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="overflow-hidden group cursor-pointer transition-all hover:shadow-lg">
            <div className="aspect-square overflow-hidden bg-secondary">
              <img 
                src={tvProduct} 
                alt="Smart TV"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Tv size={20} />
                <span className="text-sm font-semibold">TVs & Audio</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">OLED Smart TV</h3>
              <p className="text-muted-foreground mb-4">Experience stunning picture quality with AI-powered processing</p>
              <Link to="/products" className="text-primary font-medium inline-flex items-center group">
                Learn More
                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Card>

          <Card className="overflow-hidden group cursor-pointer transition-all hover:shadow-lg">
            <div className="aspect-square overflow-hidden bg-secondary">
              <img 
                src={fridgeProduct} 
                alt="Smart Refrigerator"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Refrigerator size={20} />
                <span className="text-sm font-semibold">Home Appliances</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart InstaView™</h3>
              <p className="text-muted-foreground mb-4">Keep food fresh longer with advanced cooling technology</p>
              <Link to="/products" className="text-primary font-medium inline-flex items-center group">
                Learn More
                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Card>

          <Card className="overflow-hidden group cursor-pointer transition-all hover:shadow-lg">
            <div className="aspect-square overflow-hidden bg-secondary">
              <img 
                src={washerProduct} 
                alt="Smart Washer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Sparkles size={20} />
                <span className="text-sm font-semibold">Laundry</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI DD™ Washer</h3>
              <p className="text-muted-foreground mb-4">Smart fabric care with AI-powered wash motions</p>
              <Link to="/products" className="text-primary font-medium inline-flex items-center group">
                Learn More
                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground text-lg">Industry-leading innovation and quality</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Technology</h3>
              <p className="text-muted-foreground">AI-powered features that learn and adapt to your lifestyle</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tv className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">Built to last with industry-leading materials and craftsmanship</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Refrigerator className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Energy Efficient</h3>
              <p className="text-muted-foreground">Save money and the environment with eco-friendly designs</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
