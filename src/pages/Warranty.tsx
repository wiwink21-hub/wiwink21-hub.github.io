import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Check, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Warranty = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold">Warranty Information</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            Learn about our comprehensive warranty coverage and protection plans.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <Card className="p-8 hover:shadow-lg transition-all" data-testid="card-warranty-standard">
            <h3 className="text-2xl font-bold mb-4">Standard Warranty</h3>
            <p className="text-3xl font-bold text-primary mb-6">1 Year</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Parts and labor coverage</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Defects in materials and workmanship</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Free service and repairs</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">Included with all products</p>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-all border-2 border-primary" data-testid="card-warranty-extended">
            <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
              Popular
            </div>
            <h3 className="text-2xl font-bold mb-4">Extended Warranty</h3>
            <p className="text-3xl font-bold text-primary mb-6">3 Years</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>All standard warranty benefits</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Extended parts and labor coverage</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Priority service scheduling</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Annual maintenance check</span>
              </li>
            </ul>
            <Button className="w-full" data-testid="button-purchase-extended">Purchase Extended Warranty</Button>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-all" data-testid="card-warranty-premium">
            <h3 className="text-2xl font-bold mb-4">Premium Protection</h3>
            <p className="text-3xl font-bold text-primary mb-6">5 Years</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>All extended warranty benefits</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Accidental damage protection</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>24/7 priority support</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Free shipping for repairs</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Replacement guarantee</span>
              </li>
            </ul>
            <Button className="w-full" variant="outline" data-testid="button-purchase-premium">Purchase Premium Protection</Button>
          </Card>
        </div>

        <Card className="p-8 mb-8 bg-secondary/50">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Important Information</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Warranty coverage begins from the date of purchase</li>
                <li>• Product must be registered within 30 days of purchase to activate warranty</li>
                <li>• Proof of purchase required for all warranty claims</li>
                <li>• Warranty does not cover normal wear and tear or misuse</li>
                <li>• Extended warranties must be purchased within 90 days of product purchase</li>
              </ul>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-4">Need to Register Your Product?</h3>
            <p className="text-muted-foreground mb-4">
              Register your product to activate your warranty and receive important updates.
            </p>
            <Button asChild data-testid="button-register-product">
              <Link to="/product-registration">Register Now</Link>
            </Button>
          </Card>

          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-4">Have Questions?</h3>
            <p className="text-muted-foreground mb-4">
              Our customer service team is ready to help with any warranty questions.
            </p>
            <Button asChild variant="outline" data-testid="button-contact-support">
              <Link to="/customer-service">Contact Support</Link>
            </Button>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Warranty;
