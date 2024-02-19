export interface Job {
  id: string;
  title: string;
  description: string;
  category: string;
  posted: Date;
  company: string;
  location: string;
  minSalary: number;
  maxSalary: number;
}
