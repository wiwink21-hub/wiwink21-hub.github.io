import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ClipboardCheck } from "lucide-react";
import { useState } from "react";

const ProductRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    productName: "",
    modelNumber: "",
    serialNumber: "",
    purchaseDate: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <ClipboardCheck className="h-10 w-10 text-primary" />
              <h1 className="text-4xl font-bold">Product Registration</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Register your product to activate your warranty and receive updates.
            </p>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    data-testid="input-firstname"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    data-testid="input-lastname"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  data-testid="input-email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  data-testid="input-phone"
                />
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Product Information</h3>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="productName">Product Name *</Label>
                    <Input
                      id="productName"
                      name="productName"
                      value={formData.productName}
                      onChange={handleChange}
                      required
                      data-testid="input-productname"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="modelNumber">Model Number *</Label>
                    <Input
                      id="modelNumber"
                      name="modelNumber"
                      value={formData.modelNumber}
                      onChange={handleChange}
                      required
                      data-testid="input-modelnumber"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="serialNumber">Serial Number *</Label>
                    <Input
                      id="serialNumber"
                      name="serialNumber"
                      value={formData.serialNumber}
                      onChange={handleChange}
                      required
                      data-testid="input-serialnumber"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="purchaseDate">Purchase Date *</Label>
                    <Input
                      id="purchaseDate"
                      name="purchaseDate"
                      type="date"
                      value={formData.purchaseDate}
                      onChange={handleChange}
                      required
                      data-testid="input-purchasedate"
                    />
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg" data-testid="button-submit-registration">
                Register Product
              </Button>
            </form>
          </Card>

          <div className="mt-8 p-6 bg-secondary rounded-lg">
            <h3 className="font-semibold mb-2">Why Register Your Product?</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Activate and track your warranty</li>
              <li>• Receive product updates and notifications</li>
              <li>• Get faster service and support</li>
              <li>• Access exclusive offers and promotions</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductRegistration;
