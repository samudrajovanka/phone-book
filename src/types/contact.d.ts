export type Phone = {
  number: string;
}

export type Contact = {
  id: string;
  first_name: string;  
  last_name: string;
  phones: Phone[];
  created_at: string;
  updated_at: string;
};
