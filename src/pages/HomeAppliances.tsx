import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Refrigerator, WashingMachine, Wind } from "lucide-react";
import fridgeProduct from "@/assets/fridge-product.jpg";
import washerProduct from "@/assets/washer-product.jpg";
import dryer from "@/assets/dryer.jpg";
import robotVacuum from "@/assets/robot-vacuum.jpg";
import airPurifier from "@/assets/air-purifier.jpg";

const HomeAppliances = () => {
  const products = [
    {
      id: 1,
      name: "InstaView Refrigerator",
      price: "$2,999",
      image: fridgeProduct,
      description: "French Door with Door-in-Door"
    },
    {
      id: 2,
      name: "Smart Front Load Washer",
      price: "$1,299",
      image: washerProduct,
      description: "5.0 cu. ft. with AI DD Technology"
    },
    {
      id: 3,
      name: "Heat Pump Dryer",
      price: "$1,399",
      image: dryer,
      description: "9.0 cu. ft. Energy Star Certified"
    },
    {
      id: 4,
      name: "Robot Vacuum",
      price: "$899",
      image: robotVacuum,
      description: "AI-Powered Navigation & Mapping"
    },
    {
      id: 5,
      name: "Air Purifier",
      price: "$499",
      image: airPurifier,
      description: "HEPA 13 Filter for Large Rooms"
    },
    {
      id: 6,
      name: "Side-by-Side Refrigerator",
      price: "$2,499",
      image: fridgeProduct,
      description: "27 cu. ft. with Water Dispenser"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Refrigerator className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold">Home Appliances</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Smart home appliances designed to make your life easier and more efficient.
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

export default HomeAppliances;
