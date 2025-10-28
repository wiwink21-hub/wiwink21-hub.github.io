import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const productCategories = [
    { path: "/tvs-audio", label: "TVs & Audio" },
    { path: "/home-appliances", label: "Home Appliances" },
    { path: "/computing", label: "Computing" },
  ];

  const supportLinks = [
    { path: "/customer-service", label: "Customer Service" },
    { path: "/product-registration", label: "Product Registration" },
    { path: "/warranty", label: "Warranty Info" },
  ];

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" data-testid="link-logo">
            TECHCO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                data-testid={`link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}

            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button 
                  className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground flex items-center gap-1"
                  data-testid="dropdown-products"
                >
                  Products <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/products" className="w-full" data-testid="link-all-products">All Products</Link>
                </DropdownMenuItem>
                {productCategories.map((category) => (
                  <DropdownMenuItem key={category.path} asChild>
                    <Link to={category.path} className="w-full" data-testid={`link-${category.label.toLowerCase().replace(/\s+/g, '-')}`}>
                      {category.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Support Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button 
                  className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground flex items-center gap-1"
                  data-testid="dropdown-support"
                >
                  Support <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/support" className="w-full" data-testid="link-support">Support Center</Link>
                </DropdownMenuItem>
                {supportLinks.map((link) => (
                  <DropdownMenuItem key={link.path} asChild>
                    <Link to={link.path} className="w-full" data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}>
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                data-testid={`mobile-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="py-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">Products</p>
              <Link to="/products" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary" data-testid="mobile-link-all-products">
                All Products
              </Link>
              {productCategories.map((category) => (
                <Link
                  key={category.path}
                  to={category.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                  data-testid={`mobile-link-${category.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {category.label}
                </Link>
              ))}
            </div>

            <div className="py-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">Support</p>
              <Link to="/support" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary" data-testid="mobile-link-support">
                Support Center
              </Link>
              {supportLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                  data-testid={`mobile-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
