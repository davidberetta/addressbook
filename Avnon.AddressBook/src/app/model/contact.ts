import { Tag } from "./tag";

export class Contact {
  contactId: number;
  firstName: string;
  lastName: string;
  jobTitle: string;
  company: string;
  phone: string;
  email: string;
  linkedin: string;
  skype: string;
  tags: Tag[];
}