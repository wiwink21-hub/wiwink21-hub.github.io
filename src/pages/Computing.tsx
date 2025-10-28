import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Monitor, Laptop } from "lucide-react";
import monitorGaming from "@/assets/monitor-gaming.jpg";
import monitorUhd from "@/assets/monitor-uhd.jpg";

const Computing = () => {
  const products = [
    {
      id: 1,
      name: "UltraGear Gaming Monitor",
      price: "$799",
      image: monitorGaming,
      description: "27\" 240Hz 1ms IPS Display"
    },
    {
      id: 2,
      name: "UltraFine 5K Monitor",
      price: "$1,299",
      image: monitorUhd,
      description: "32\" 5K IPS with Thunderbolt 4"
    },
    {
      id: 3,
      name: "UltraWide Monitor",
      price: "$999",
      image: monitorGaming,
      description: "34\" Curved WQHD Display"
    },
    {
      id: 4,
      name: "4K UHD Monitor",
      price: "$649",
      image: monitorUhd,
      description: "28\" HDR10 Professional Display"
    },
    {
      id: 5,
      name: "Gaming Monitor Pro",
      price: "$1,499",
      image: monitorGaming,
      description: "32\" 4K 144Hz with G-Sync"
    },
    {
      id: 6,
      name: "Professional Monitor",
      price: "$899",
      image: monitorUhd,
      description: "27\" Color Calibrated Display"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Monitor className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold">Computing</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            High-performance monitors and computing solutions for work and play.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden group cursor-pointer transition-all hover:shadow-lg" data-testid={`card-product-${product.id}`}>
              <div className="aspect-square overflow-hidden bg-secondary">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2" data-testid={`text-product-name-${product.id}`}>{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary" data-testid={`text-price-${product.id}`}>{product.price}</span>
                  <Button data-testid={`button-view-${product.id}`}>View Details</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Computing;
