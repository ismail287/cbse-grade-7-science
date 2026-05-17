"use client";

import { usePathname } from "next/navigation";
import { BookOpen, Home, Settings, Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";

export function Sidebar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { href: "/", label: "Dashboard", icon: Home },
    // We will list quick links to subjects or just main areas
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-card border-r border-border p-4 w-64 shadow-sm">
      <div className="flex items-center gap-2 mb-8 px-2">
        <div className="bg-primary-500 p-2 rounded-lg text-white">
          <BookOpen size={24} />
        </div>
        <span className="font-bold text-lg tracking-tight">Science 7</span>
      </div>

      <nav className="flex-1 space-y-2">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                isActive
                  ? "bg-primary-50 text-primary-600 dark:bg-primary-900/50 dark:text-primary-100"
                  : "text-foreground/70 hover:bg-secondary-50 hover:text-foreground dark:hover:bg-slate-800"
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="pt-4 border-t border-border mt-auto">
        {mounted && (
          <button
            onClick={toggleTheme}
            className="flex items-center gap-3 px-3 py-2 w-full rounded-md text-foreground/70 hover:bg-secondary-50 hover:text-foreground transition-colors dark:hover:bg-slate-800"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            <span className="font-medium">
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-card border-b border-border z-50 p-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <div className="bg-primary-500 p-1.5 rounded-md text-white">
            <BookOpen size={20} />
          </div>
          <span className="font-bold text-lg">Science 7</span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 -mr-2 text-foreground"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarContent />
      </aside>
    </>
  );
}
