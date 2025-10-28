import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tv, Volume2, Headphones } from "lucide-react";
import tvProduct from "@/assets/tv-product.jpg";
import tvOled1 from "@/assets/tv-oled-1.jpg";
import smartSpeaker from "@/assets/smart-speaker.jpg";
import soundbar from "@/assets/soundbar.jpg";

const TvsAudio = () => {
  const products = [
    {
      id: 1,
      name: "OLED evo C3 Series",
      price: "$1,999",
      image: tvProduct,
      description: "77\" 4K Smart TV with AI Picture Pro"
    },
    {
      id: 2,
      name: "OLED evo G3 Series",
      price: "$2,499",
      image: tvOled1,
      description: "65\" Gallery Design 4K Smart TV"
    },
    {
      id: 3,
      name: "Premium Soundbar",
      price: "$699",
      image: soundbar,
      description: "7.1.2 Channel with Dolby Atmos"
    },
    {
      id: 4,
      name: "Smart Speaker",
      price: "$299",
      image: smartSpeaker,
      description: "Voice Assistant with Premium Sound"
    },
    {
      id: 5,
      name: "NanoCell 4K TV",
      price: "$1,499",
      image: tvProduct,
      description: "86\" Pure Colors Smart TV"
    },
    {
      id: 6,
      name: "QNED MiniLED TV",
      price: "$2,799",
      image: tvOled1,
      description: "75\" Quantum Dot with Dimming"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Tv className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold">TVs & Audio</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Experience stunning picture quality and immersive sound with our premium TVs and audio systems.
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

export default TvsAudio;
