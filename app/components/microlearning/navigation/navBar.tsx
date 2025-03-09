import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "~/components/ui/navigation-menu";

export default function NavBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-between items-center">
      {children}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <a href="/">Home</a>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Learning Paths</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Python</NavigationMenuLink>
              <NavigationMenuLink>Data Science</NavigationMenuLink>
              <NavigationMenuLink>Web Development</NavigationMenuLink>
              <NavigationMenuLink>DevOps & Infrastructure</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
