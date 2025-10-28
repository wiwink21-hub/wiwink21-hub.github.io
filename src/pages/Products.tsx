import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tv, Refrigerator, Smartphone, Monitor, Sparkles, WashingMachine } from "lucide-react";
import tvProduct from "@/assets/tv-product.jpg";
import fridgeProduct from "@/assets/fridge-product.jpg";
import washerProduct from "@/assets/washer-product.jpg";
import tvOled1 from "@/assets/tv-oled-1.jpg";
import monitorGaming from "@/assets/monitor-gaming.jpg";
import monitorUhd from "@/assets/monitor-uhd.jpg";
import smartphone1 from "@/assets/smartphone-1.jpg";
import smartSpeaker from "@/assets/smart-speaker.jpg";
import soundbar from "@/assets/soundbar.jpg";
import dryer from "@/assets/dryer.jpg";
import securityCamera from "@/assets/security-camera.jpg";
import robotVacuum from "@/assets/robot-vacuum.jpg";
import airPurifier from "@/assets/air-purifier.jpg";

const Products = () => {
  const categories = [
    { icon: Tv, name: "TVs & Audio", count: 10 },
    { icon: Refrigerator, name: "Refrigerators", count: 10 },
    { icon: WashingMachine, name: "Laundry", count: 10 },
    { icon: Monitor, name: "Monitors", count: 10 },
    { icon: Smartphone, name: "Mobile", count: 10 },
    { icon: Sparkles, name: "Smart Home", count: 10 },
  ];

  const products = [
    // TVs & Audio (10 products)
    {
      id: 1,
      name: "OLED evo C3 Series",
      category: "TVs & Audio",
      price: "$1,999",
      image: tvProduct,
      description: "77\" 4K Smart TV with AI Picture Pro"
    },
    {
      id: 2,
      name: "OLED evo G3 Series",
      category: "TVs & Audio",
      price: "$2,499",
      image: tvOled1,
      description: "65\" Gallery Design 4K Smart TV"
    },
    {
      id: 3,
      name: "NanoCell 4K TV",
      category: "TVs & Audio",
      price: "$1,499",
      image: tvProduct,
      description: "86\" Pure Colors Smart TV"
    },
    {
      id: 4,
      name: "QNED MiniLED TV",
      category: "TVs & Audio",
      price: "$2,799",
      image: tvOled1,
      description: "75\" Quantum Dot with Dimming"
    },
    {
      id: 5,
      name: "UHD 4K Smart TV",
      category: "TVs & Audio",
      price: "$899",
      image: tvProduct,
      description: "55\" AI ThinQ Smart TV"
    },
    {
      id: 6,
      name: "OLED evo B3 Series",
      category: "TVs & Audio",
      price: "$1,799",
      image: tvOled1,
      description: "55\" Self-Lit Pixels 4K"
    },
    {
      id: 7,
      name: "Premium Soundbar",
      category: "TVs & Audio",
      price: "$799",
      image: soundbar,
      description: "7.1.2ch Dolby Atmos Sound"
    },
    {
      id: 8,
      name: "Wireless Soundbar",
      category: "TVs & Audio",
      price: "$599",
      image: soundbar,
      description: "5.1ch with Subwoofer"
    },
    {
      id: 9,
      name: "Compact Soundbar",
      category: "TVs & Audio",
      price: "$299",
      image: soundbar,
      description: "2.1ch with Bluetooth"
    },
    {
      id: 10,
      name: "OLED evo A3 Series",
      category: "TVs & Audio",
      price: "$1,599",
      image: tvProduct,
      description: "48\" Gaming TV 120Hz"
    },

    // Refrigerators (10 products)
    {
      id: 11,
      name: "InstaView Refrigerator",
      category: "Refrigerators",
      price: "$3,499",
      image: fridgeProduct,
      description: "French Door with Craft Ice™"
    },
    {
      id: 12,
      name: "Smart Refrigerator",
      category: "Refrigerators",
      price: "$2,899",
      image: fridgeProduct,
      description: "4-Door with InstaView™"
    },
    {
      id: 13,
      name: "Door-in-Door Fridge",
      category: "Refrigerators",
      price: "$2,599",
      image: fridgeProduct,
      description: "French Door 27 cu. ft."
    },
    {
      id: 14,
      name: "Counter-Depth Fridge",
      category: "Refrigerators",
      price: "$3,199",
      image: fridgeProduct,
      description: "French Door with Ice Maker"
    },
    {
      id: 15,
      name: "Side-by-Side Fridge",
      category: "Refrigerators",
      price: "$1,999",
      image: fridgeProduct,
      description: "26 cu. ft. with Water Dispenser"
    },
    {
      id: 16,
      name: "Smart InstaView",
      category: "Refrigerators",
      price: "$4,299",
      image: fridgeProduct,
      description: "French Door with ThinQ™"
    },
    {
      id: 17,
      name: "Bottom Freezer",
      category: "Refrigerators",
      price: "$1,499",
      image: fridgeProduct,
      description: "24 cu. ft. Energy Star"
    },
    {
      id: 18,
      name: "4-Door Flex",
      category: "Refrigerators",
      price: "$3,799",
      image: fridgeProduct,
      description: "Convertible with Craft Ice"
    },
    {
      id: 19,
      name: "Top Freezer Fridge",
      category: "Refrigerators",
      price: "$999",
      image: fridgeProduct,
      description: "20 cu. ft. Classic Design"
    },
    {
      id: 20,
      name: "Studio Refrigerator",
      category: "Refrigerators",
      price: "$5,499",
      image: fridgeProduct,
      description: "Premium French Door 30 cu. ft."
    },

    // Laundry (10 products)
    {
      id: 21,
      name: "WashTower™",
      category: "Laundry",
      price: "$2,299",
      image: washerProduct,
      description: "All-in-One Washer & Dryer"
    },
    {
      id: 22,
      name: "AI DD™ Washer",
      category: "Laundry",
      price: "$1,299",
      image: washerProduct,
      description: "Front Load with Steam"
    },
    {
      id: 23,
      name: "TurboWash™ 360",
      category: "Laundry",
      price: "$1,599",
      image: washerProduct,
      description: "5.0 cu. ft. Ultra Large"
    },
    {
      id: 24,
      name: "Smart Dryer",
      category: "Laundry",
      price: "$1,199",
      image: dryer,
      description: "9.0 cu. ft. with AI Sensor"
    },
    {
      id: 25,
      name: "WashCombo™",
      category: "Laundry",
      price: "$1,899",
      image: washerProduct,
      description: "All-in-One Ventless"
    },
    {
      id: 26,
      name: "Top Load Washer",
      category: "Laundry",
      price: "$899",
      image: washerProduct,
      description: "5.5 cu. ft. TurboDrum™"
    },
    {
      id: 27,
      name: "Heat Pump Dryer",
      category: "Laundry",
      price: "$1,499",
      image: dryer,
      description: "Dual Inverter Heat Pump"
    },
    {
      id: 28,
      name: "Styler Steam Closet",
      category: "Laundry",
      price: "$1,999",
      image: washerProduct,
      description: "Clothing Care System"
    },
    {
      id: 29,
      name: "Portable Washer",
      category: "Laundry",
      price: "$599",
      image: washerProduct,
      description: "Compact for Small Spaces"
    },
    {
      id: 30,
      name: "WashTower™ Pro",
      category: "Laundry",
      price: "$2,799",
      image: washerProduct,
      description: "Premium with AI Control"
    },

    // Monitors (10 products)
    {
      id: 31,
      name: "UltraGear Gaming",
      category: "Monitors",
      price: "$799",
      image: monitorGaming,
      description: "32\" 4K 144Hz Curved"
    },
    {
      id: 32,
      name: "UltraWide Monitor",
      category: "Monitors",
      price: "$1,299",
      image: monitorUhd,
      description: "38\" WQHD+ IPS Display"
    },
    {
      id: 33,
      name: "4K UHD Monitor",
      category: "Monitors",
      price: "$599",
      image: monitorUhd,
      description: "27\" HDR10 USB-C"
    },
    {
      id: 34,
      name: "Gaming Monitor",
      category: "Monitors",
      price: "$499",
      image: monitorGaming,
      description: "27\" FHD 240Hz 1ms"
    },
    {
      id: 35,
      name: "UltraFine 5K",
      category: "Monitors",
      price: "$1,499",
      image: monitorUhd,
      description: "27\" 5K IPS Thunderbolt"
    },
    {
      id: 36,
      name: "Curved Gaming",
      category: "Monitors",
      price: "$899",
      image: monitorGaming,
      description: "34\" UWQHD 160Hz"
    },
    {
      id: 37,
      name: "Professional 4K",
      category: "Monitors",
      price: "$699",
      image: monitorUhd,
      description: "32\" Color Calibrated"
    },
    {
      id: 38,
      name: "Portable Monitor",
      category: "Monitors",
      price: "$299",
      image: monitorUhd,
      description: "15.6\" FHD USB-C"
    },
    {
      id: 39,
      name: "UltraWide Curved",
      category: "Monitors",
      price: "$1,099",
      image: monitorGaming,
      description: "34\" QHD 144Hz Gaming"
    },
    {
      id: 40,
      name: "OLED Gaming",
      category: "Monitors",
      price: "$1,799",
      image: monitorGaming,
      description: "27\" 4K OLED 240Hz"
    },

    // Mobile (10 products)
    {
      id: 41,
      name: "Velvet 5G",
      category: "Mobile",
      price: "$699",
      image: smartphone1,
      description: "6.8\" OLED 128GB"
    },
    {
      id: 42,
      name: "Wing Dual Screen",
      category: "Mobile",
      price: "$999",
      image: smartphone1,
      description: "Swivel Display Innovation"
    },
    {
      id: 43,
      name: "V60 ThinQ 5G",
      category: "Mobile",
      price: "$799",
      image: smartphone1,
      description: "6.8\" with Dual Screen"
    },
    {
      id: 44,
      name: "G8 ThinQ",
      category: "Mobile",
      price: "$599",
      image: smartphone1,
      description: "6.1\" Triple Camera"
    },
    {
      id: 45,
      name: "Stylo 6",
      category: "Mobile",
      price: "$299",
      image: smartphone1,
      description: "6.8\" with Built-in Stylus"
    },
    {
      id: 46,
      name: "K92 5G",
      category: "Mobile",
      price: "$399",
      image: smartphone1,
      description: "6.7\" Quad Camera"
    },
    {
      id: 47,
      name: "Q92 5G",
      category: "Mobile",
      price: "$449",
      image: smartphone1,
      description: "6.7\" 128GB Storage"
    },
    {
      id: 48,
      name: "V50 ThinQ 5G",
      category: "Mobile",
      price: "$699",
      image: smartphone1,
      description: "6.4\" Triple Lens"
    },
    {
      id: 49,
      name: "G7 ThinQ",
      category: "Mobile",
      price: "$499",
      image: smartphone1,
      description: "6.1\" AI Camera"
    },
    {
      id: 50,
      name: "Velvet 2 Pro",
      category: "Mobile",
      price: "$899",
      image: smartphone1,
      description: "6.8\" OLED 256GB Premium"
    },

    // Smart Home (10 products)
    {
      id: 51,
      name: "ThinQ Speaker",
      category: "Smart Home",
      price: "$199",
      image: smartSpeaker,
      description: "AI Voice Assistant"
    },
    {
      id: 52,
      name: "Smart Security Cam",
      category: "Smart Home",
      price: "$149",
      image: securityCamera,
      description: "1080p with Night Vision"
    },
    {
      id: 53,
      name: "CordZero Vacuum",
      category: "Smart Home",
      price: "$699",
      image: robotVacuum,
      description: "Robot with Auto-Empty"
    },
    {
      id: 54,
      name: "PuriCare Air Purifier",
      category: "Smart Home",
      price: "$799",
      image: airPurifier,
      description: "360° with ThinQ"
    },
    {
      id: 55,
      name: "Smart Doorbell",
      category: "Smart Home",
      price: "$179",
      image: securityCamera,
      description: "HD Video with Motion Detection"
    },
    {
      id: 56,
      name: "ThinQ Hub",
      category: "Smart Home",
      price: "$99",
      image: smartSpeaker,
      description: "Central Home Control"
    },
    {
      id: 57,
      name: "Smart Light Panel",
      category: "Smart Home",
      price: "$249",
      image: smartSpeaker,
      description: "RGB with Voice Control"
    },
    {
      id: 58,
      name: "Robot Vacuum Pro",
      category: "Smart Home",
      price: "$899",
      image: robotVacuum,
      description: "Lidar Navigation & Mop"
    },
    {
      id: 59,
      name: "Indoor Camera",
      category: "Smart Home",
      price: "$99",
      image: securityCamera,
      description: "360° Pan/Tilt 1080p"
    },
    {
      id: 60,
      name: "PuriCare Mini",
      category: "Smart Home",
      price: "$399",
      image: airPurifier,
      description: "Portable Air Quality Monitor"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our complete range of innovative electronics and home appliances
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.name} className="p-6 text-center cursor-pointer hover:shadow-lg transition-all group">
                <Icon className="w-12 h-12 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} products</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">All Products</h2>
          <div className="text-muted-foreground">{products.length} products</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden group cursor-pointer transition-all hover:shadow-lg">
              <div className="aspect-square overflow-hidden bg-secondary">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{product.category}</p>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{product.price}</span>
                  <Button>View Details</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
