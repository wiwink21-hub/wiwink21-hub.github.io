import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Pioneering technology that transforms everyday life"
    },
    {
      icon: Eye,
      title: "Vision",
      description: "Creating a smarter, more connected future for all"
    },
    {
      icon: Award,
      title: "Quality",
      description: "Uncompromising excellence in every product we make"
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Putting your needs at the heart of everything we do"
    },
  ];

  const milestones = [
    { year: "1958", event: "Company Founded" },
    { year: "1995", event: "First Digital TV" },
    { year: "2010", event: "Smart Home Innovation" },
    { year: "2020", event: "AI Technology Leader" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About TECHCO</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over 65 years, we've been dedicated to creating innovative technology that enhances lives around the world
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="p-12 text-center bg-gradient-to-br from-primary/5 to-accent/5 border-2">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To be a globally trusted company that brings innovation to life through exceptional products and services that create genuine value for our customers, partners, and communities worldwide.
            </p>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-primary" size={40} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="text-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border" />
                    )}
                  </div>
                  <p className="font-semibold">{milestone.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">65+</div>
            <p className="text-muted-foreground">Years of Innovation</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">150+</div>
            <p className="text-muted-foreground">Countries Worldwide</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">75K+</div>
            <p className="text-muted-foreground">Global Employees</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">500+</div>
            <p className="text-muted-foreground">Patents Awarded</p>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Commitment to Sustainability</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We're dedicated to creating products that are not only innovative but also environmentally responsible. Our goal is to achieve carbon neutrality by 2030.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Renewable Energy</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">50%</div>
              <p className="text-sm text-muted-foreground">Recycled Materials</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">Zero</div>
              <p className="text-sm text-muted-foreground">Waste to Landfill</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
