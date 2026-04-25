interface User {
  readonly id: number;
  name: string;
  email: string;
  age: number;
  isActive: boolean;
}

interface ProcessedUser {
  readonly id: number;
  name: string;
  email: string;
  summary: string;
}

