import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Search, Phone, Mail, MessageCircle, FileText, Wrench, HelpCircle } from "lucide-react";

const Support = () => {
  const supportOptions = [
    {
      icon: Phone,
      title: "Call Us",
      description: "1-800-123-4567",
      details: "Mon-Fri: 8AM - 8PM EST"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with support",
      details: "Average wait: 2 minutes"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "support@techco.com",
      details: "Response within 24 hours"
    },
  ];

  const resources = [
    {
      icon: FileText,
      title: "Product Manuals",
      description: "Download user guides and manuals"
    },
    {
      icon: Wrench,
      title: "Repair Service",
      description: "Schedule a repair appointment"
    },
    {
      icon: HelpCircle,
      title: "FAQs",
      description: "Find answers to common questions"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Support Center</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            We're here to help with any questions or issues you may have
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input 
                type="text" 
                placeholder="Search for help articles, guides, and more..." 
                className="pl-12 h-14 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {supportOptions.map((option) => {
            const Icon = option.icon;
            return (
              <Card key={option.title} className="p-8 text-center hover:shadow-lg transition-all cursor-pointer group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-lg font-medium text-primary mb-1">{option.description}</p>
                <p className="text-sm text-muted-foreground">{option.details}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Support Resources */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Support Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <Card key={resource.title} className="p-6 hover:shadow-lg transition-all cursor-pointer group">
                  <Icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={40} />
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                  <Button variant="link" className="p-0">Learn More →</Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Warranty Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Product Warranty</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            All TECHCO products come with a comprehensive warranty. Register your product to activate your warranty and receive important updates.
          </p>
          <Button size="lg">Register Product</Button>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">How do I register my product?</h3>
              <p className="text-muted-foreground">
                You can register your product online through our support portal using your product's model and serial number.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">What is the warranty period?</h3>
              <p className="text-muted-foreground">
                Most products come with a 1-year limited warranty. Extended warranty options are available at purchase.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-2">How do I schedule a repair?</h3>
              <p className="text-muted-foreground">
                Contact our support team via phone, chat, or email to schedule an in-home or service center repair appointment.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;
