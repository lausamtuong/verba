"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/NavigationMenu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const PLATFORM_MODELS_ITEMS = [
  {
    title: "TEXT TO SPEECH",
    icon: <div>icon</div>,
  },
  {
    title: "SPEECH TO TEXT",
    icon: <div>icon</div>,
  },
  {
    title: "VOICE CHANGER",
    icon: <div>icon</div>,
  },
  {
    title: "TEXT TO SOUND EFFECTS",
    icon: <div>icon</div>,
  },
  {
    title: "VOICE CLONING",
    icon: <div>icon</div>,
  },
  {
    title: "VOICE ISOLATOR",
    icon: <div>icon</div>,
  },
];

const PLATFORM_PRODUCTS_ITEMS = [
  {
    title: "CONVERSATIONAL AL",
    icon: <div>icon</div>,
    description: "Deploy interactive voice agents",
  },
  {
    title: "STUDIO",
    icon: <div>icon</div>,
    description: "Generate and edit long-form audio with precision",
  },
  {
    title: "DUBBLING",
    icon: <div>icon</div>,
    description: "Localize content across 20+ languages with AI dubbing",
  },
  {
    title: "VOICE LIBRARY",
    icon: <div>icon</div>,
    description: "Find a voice for any character or content",
  },
  {
    title: "ELEVENREADER",
    icon: <div>icon</div>,
    description: "Listent to any text content on the go",
  },
];

export function MidHeader() {
  return (
    <NavigationMenu
      viewport={false}
      className="w-full max-w-full flex justify-center"
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>PLATFORM</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-2 w-[700px] grid-cols-3">
              <div className="flex flex-col gap-2">
                <p className="text-gray-400">Models</p>
                {PLATFORM_MODELS_ITEMS.map((item, idx) => (
                  <ListItem
                    key={idx}
                    href="/docs/primitives/typography"
                    className="[&_>a>div]:font-semibold cursor-pointer [&_>a>div]:hover:font-bold"
                    title={item.title}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-400">Products</p>
                {PLATFORM_PRODUCTS_ITEMS.map((item, idx) => (
                  <ListItem
                    key={idx}
                    href="/docs/primitives/typography"
                    className="[&_>a>div]:font-semibold cursor-pointer [&_>a>div]:group-hover:font-bold"
                    title={item.title}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </div>
              <div className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Beautifully designed components built with Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>SOLUTIONS</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-2 w-[700px] grid-cols-3">
              <div className="flex flex-col gap-2">
                <p className="text-gray-400">Models</p>
                {PLATFORM_MODELS_ITEMS.map((item) => (
                  <ListItem
                    href="/docs/primitives/typography"
                    className="[&_>a>div]:font-semibold cursor-pointer [&_>a>div]:hover:font-bold"
                    title={item.title}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-400">Products</p>
                {PLATFORM_PRODUCTS_ITEMS.map((item) => (
                  <ListItem
                    href="/docs/primitives/typography"
                    className="[&_>a>div]:font-semibold cursor-pointer [&_>a>div]:group-hover:font-bold"
                    title={item.title}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </div>
              <div className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Beautifully designed components built with Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>API</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-2 w-[700px] grid-cols-3">
              <div className="flex flex-col gap-2">
                <p className="text-gray-400">Models</p>
                {PLATFORM_MODELS_ITEMS.map((item) => (
                  <ListItem
                    href="/docs/primitives/typography"
                    className="[&_>a>div]:font-semibold cursor-pointer [&_>a>div]:hover:font-bold"
                    title={item.title}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-400">Products</p>
                {PLATFORM_PRODUCTS_ITEMS.map((item) => (
                  <ListItem
                    href="/docs/primitives/typography"
                    className="[&_>a>div]:font-semibold cursor-pointer [&_>a>div]:group-hover:font-bold"
                    title={item.title}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </div>
              <div className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Beautifully designed components built with Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>RESOURCES</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-2 w-[700px] grid-cols-3">
              <div className="flex flex-col gap-2">
                <p className="text-gray-400">Models</p>
                {PLATFORM_MODELS_ITEMS.map((item) => (
                  <ListItem
                    href="/docs/primitives/typography"
                    className="[&_>a>div]:font-semibold cursor-pointer [&_>a>div]:hover:font-bold"
                    title={item.title}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-400">Products</p>
                {PLATFORM_PRODUCTS_ITEMS.map((item) => (
                  <ListItem
                    href="/docs/primitives/typography"
                    className="[&_>a>div]:font-semibold cursor-pointer [&_>a>div]:group-hover:font-bold"
                    title={item.title}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </div>
              <div className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Beautifully designed components built with Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>RESOURCES</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-2 w-[700px] grid-cols-3">
              <div className="flex flex-col gap-2">
                <p className="text-gray-400">Models</p>
                {PLATFORM_MODELS_ITEMS.map((item) => (
                  <ListItem
                    href="/docs/primitives/typography"
                    className="[&_>a>div]:font-semibold cursor-pointer [&_>a>div]:hover:font-bold"
                    title={item.title}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-400">Products</p>
                {PLATFORM_PRODUCTS_ITEMS.map((item) => (
                  <ListItem
                    href="/docs/primitives/typography"
                    className="[&_>a>div]:font-semibold cursor-pointer [&_>a>div]:group-hover:font-bold"
                    title={item.title}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </div>
              <div className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Beautifully designed components built with Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>DOCS</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-2 w-[700px] grid-cols-3">
              <div className="flex flex-col gap-2">
                <p className="text-gray-400">Models</p>
                {PLATFORM_MODELS_ITEMS.map((item) => (
                  <ListItem
                    href="/docs/primitives/typography"
                    className="[&_>a>div]:font-semibold cursor-pointer [&_>a>div]:hover:font-bold"
                    title={item.title}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-400">Products</p>
                {PLATFORM_PRODUCTS_ITEMS.map((item) => (
                  <ListItem
                    href="/docs/primitives/typography"
                    className="[&_>a>div]:font-semibold cursor-pointer [&_>a>div]:group-hover:font-bold"
                    title={item.title}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </div>
              <div className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Beautifully designed components built with Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>ENTERPRISE</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-2 w-[700px] grid-cols-3">
              <div className="flex flex-col gap-2">
                <p className="text-gray-400">Models</p>
                {PLATFORM_MODELS_ITEMS.map((item) => (
                  <ListItem
                    href="/docs/primitives/typography"
                    className="[&_>a>div]:font-semibold cursor-pointer [&_>a>div]:hover:font-bold"
                    title={item.title}
                  />
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-gray-400">Products</p>
                {PLATFORM_PRODUCTS_ITEMS.map((item) => (
                  <ListItem
                    href="/docs/primitives/typography"
                    className="[&_>a>div]:font-semibold cursor-pointer [&_>a>div]:group-hover:font-bold"
                    title={item.title}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </div>
              <div className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Beautifully designed components built with Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
