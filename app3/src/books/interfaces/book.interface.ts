export interface Book {
  id: number;
  bookName: string;
  price: number;
  author: string[];
}
export interface BookResponse {
  message: string;
  success: boolean;
  data: Book[];
}
