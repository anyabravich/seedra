export const socialLinks = [
  {
    href: "https://www.instagram.com",
    iconName: "instagram" as const,
  },
  {
    href: "https://www.facebook.com",
    iconName: "facebook" as const,
  },
];

export const headerButtons = [
  {
    href: "/favorite",
    iconName: "favorite" as const,
    iconVariant: "green" as const,
    isCustomIcon: true,
  },
  {
    href: "/cart",
    iconName: "basket" as const,
    iconVariant: undefined,
    isCustomIcon: false,
  },
  {
    iconName: "menu" as const,
    className: "menuButton",
    iconVariant: undefined,
    isCustomIcon: false,
  },
];
