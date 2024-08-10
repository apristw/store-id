import React, { act } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const NavItem = () => {
  const navItems = [
    {
      label: "On Sale",
      href: "/",
      active: true,
    },
    {
      label: "New Arrival",
      href: "/",
    },
    {
      label: "Brands",
      href: "/",
    },
  ];

  return (
    <div className="">
      <NavigationMenu>
        <NavigationMenuList className="space-x-5">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-col p-3 gap-3">
              <NavigationMenuLink className="cursor-pointer hover:text-muted-foreground">
                Shop1
              </NavigationMenuLink>
              <NavigationMenuLink className="cursor-pointer hover:text-muted-foreground">
                Shop2
              </NavigationMenuLink>
              <NavigationMenuLink className="cursor-pointer hover:text-muted-foreground">
                Shop3
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {navItems.map((item) => {
            return (
              <NavigationMenuItem key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavItem;
