import { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, Phone, MapPin, Clock, Home, ArrowLeft } from 'lucide-react';
import { CartDropdown } from '@/features/cart/components/CartDropdown';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/shop', label: 'Shop' },
    { href: '/service', label: 'Service' },
    { href: '/brands', label: 'Brands' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];
  
  const showBackButton = pathname !== '/';

  return (
    <>
      {/* Top bar */}
      <div className="bg-secondary text-white py-2 text-sm">
        <div className="container-main flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Mumbai, Maharashtra</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Mon-Sat: 9AM-8PM</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container-main">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Back Button & Logo */}
            <div className="flex items-center gap-3">
              {showBackButton && (
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => navigate(-1)}
                  className="text-secondary hover:text-primary"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              )}
              <Link to="/" className="flex items-center gap-3">
                <img 
                  src="/logo.png" 
                  alt="Kavita Cooler Logo" 
                  className="h-12 w-auto object-contain"
                />
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-secondary">Kavita Cooler</h1>
                  <p className="text-xs text-muted-foreground">Authorized Dealers & Service</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    className={cn(
                      'flex items-center gap-1.5 text-secondary font-medium hover:text-primary transition-colors duration-200',
                      isActive && 'text-primary font-semibold'
                    )}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    {item.label}
                  </NavLink>
                );
              })}
            </nav>

            {/* Search & Actions */}
            <div className="flex items-center gap-4">
              
              {/* Search */}
              <div className="hidden md:flex items-center gap-2">
                {isSearchOpen ? (
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="Search products..."
                        className="w-64 pr-10"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            const searchTerm = (e.target as HTMLInputElement).value;
                            if (searchTerm.trim()) {
                              window.location.href = `/shop?q=${encodeURIComponent(searchTerm)}`;
                            }
                          }
                        }}
                      />
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute right-0 top-0 h-full"
                        onClick={() => setIsSearchOpen(false)}
                      >
                        <Search className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Button 
                    size="icon" 
                    variant="ghost"
                    onClick={() => setIsSearchOpen(true)}
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                )}
              </div>

              {/* Cart Dropdown */}
              <div className="relative">
                <CartDropdown />
              </div>

              {/* Book Service Button */}
              <div className="hidden lg:block">
                <Button asChild>
                  <Link to="/service">Book Service</Link>
                </Button>
              </div>

              {/* Mobile menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="icon" variant="ghost" className="lg:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex flex-col gap-6 mt-8">
                    
                    {/* Mobile Search */}
                    <div className="flex items-center gap-2">
                      <Input 
                        placeholder="Search products..." 
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            const searchTerm = (e.target as HTMLInputElement).value;
                            if (searchTerm.trim()) {
                              window.location.href = `/shop?q=${encodeURIComponent(searchTerm)}`;
                            }
                          }
                        }}
                      />
                      <Button 
                        size="icon"
                        onClick={(e) => {
                          const input = e.currentTarget.parentElement?.querySelector('input');
                          const searchTerm = input?.value;
                          if (searchTerm?.trim()) {
                            window.location.href = `/shop?q=${encodeURIComponent(searchTerm)}`;
                          }
                        }}
                      >
                        <Search className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Mobile Navigation */}
                    <nav className="flex flex-col gap-2">
                      {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;
                        return (
                          <NavLink
                            key={item.href}
                            to={item.href}
                            className={cn(
                              'flex items-center gap-3 text-lg font-medium py-3 px-3 rounded-lg transition-colors duration-200',
                              isActive 
                                ? 'bg-primary/10 text-primary font-semibold'
                                : 'text-secondary hover:bg-accent/50'
                            )}
                          >
                            {Icon && <Icon className="h-5 w-5" />}
                            {item.label}
                          </NavLink>
                        );
                      })}
                    </nav>

                    {/* Contact Info */}
                    <div className="border-t pt-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <span className="font-medium">+91 98765 43210</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span className="text-sm">Mumbai, Maharashtra</span>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;