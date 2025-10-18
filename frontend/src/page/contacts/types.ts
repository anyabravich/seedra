import { IconName } from "@/components/Icons/types";

export interface ContactItem {
  id: string;
  icon: IconName;
  href: string;
  text: string;
  type: "phone" | "email";
}
