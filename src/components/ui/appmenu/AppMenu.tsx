"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";

export default function AppMenu() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-green-600 px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
         <Image src="/reactjs.svg" alt="React Logo" width={30} height={30} />
         <span className="text-white text-lg font-semibold">Next JS</span>      
        </div>
        <div className="flex-1 flex justify-center overflow-x-auto">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6">
              {/* Home */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="text-white px-3 py-2 rounded hover:bg-emerald-50">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* About */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about" className="text-white px-3 py-2 rounded hover:bg-emerald-50">
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Contact */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/contact" className="text-white px-3 py-2 rounded hover:bg-emerald-50">
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/auth/login" className="text-white px-3 py-2 rounded hover:bg-emerald-50">
                    Login
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/auth/register" className="text-white px-3 py-2 rounded hover:bg-emerald-50">
                  Register
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>          
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}
