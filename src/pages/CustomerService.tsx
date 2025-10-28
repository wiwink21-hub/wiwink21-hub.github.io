import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Headphones, MessageCircle, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const CustomerService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Headphones className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold">Customer Service</h1>
          </div>
          <p className="text-xl text-muted-foreground">
            We're here to help you with any questions or concerns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 hover:shadow-lg transition-all" data-testid="card-contact-phone">
            <Phone className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
            <p className="text-muted-foreground mb-4">
              Speak with our support team
            </p>
            <p className="text-lg font-semibold mb-2">1-800-TECHCO</p>
            <p className="text-sm text-muted-foreground">Mon-Fri: 8AM - 8PM EST</p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all" data-testid="card-contact-email">
            <Mail className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Support</h3>
            <p className="text-muted-foreground mb-4">
              Send us your questions
            </p>
            <p className="text-lg font-semibold mb-2">support@techco.com</p>
            <p className="text-sm text-muted-foreground">Response within 24 hours</p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all" data-testid="card-contact-chat">
            <MessageCircle className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
            <p className="text-muted-foreground mb-4">
              Chat with us in real-time
            </p>
            <Button className="w-full" data-testid="button-start-chat">Start Chat</Button>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/support" className="block text-primary hover:underline" data-testid="link-support">
                Product Support & FAQs
              </Link>
              <Link to="/product-registration" className="block text-primary hover:underline" data-testid="link-registration">
                Product Registration
              </Link>
              <Link to="/warranty" className="block text-primary hover:underline" data-testid="link-warranty">
                Warranty Information
              </Link>
              <Link to="/contact" className="block text-primary hover:underline" data-testid="link-contact">
                Contact Form
              </Link>
            </div>
          </Card>

          <Card className="p-8">
            <Clock className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Service Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Monday - Friday:</span>
                <span className="text-muted-foreground">8:00 AM - 8:00 PM EST</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Saturday:</span>
                <span className="text-muted-foreground">9:00 AM - 6:00 PM EST</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Sunday:</span>
                <span className="text-muted-foreground">10:00 AM - 5:00 PM EST</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CustomerService;
