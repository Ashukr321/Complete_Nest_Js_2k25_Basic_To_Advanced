# NestJS - Interfaces and Services Implementation

This project demonstrates how to implement **Interfaces** and **Services** in NestJS applications, following best practices for type safety and code organization.

## 📁 Project Structure

```
src/
├── books/
│   ├── interfaces/
│   │   └── book.interface.ts    # Type definitions
│   ├── books.controllers.ts     # HTTP endpoints
│   ├── books.services.ts        # Business logic
│   └── books.module.ts          # Module configuration
├── app.module.ts                # Root module
└── main.ts                      # Application entry point
```

## 🔧 How to Add Interfaces

### 1. Create Interface Files

Create a dedicated `interfaces` folder within your feature module:

```typescript
// src/books/interfaces/book.interface.ts
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
```

### 2. Interface Benefits

- **Type Safety**: Ensures data consistency across your application
- **IntelliSense**: Better IDE support with autocomplete
- **Documentation**: Self-documenting code structure
- **Error Prevention**: Catches type mismatches at compile time

## 🛠️ How to Add Services

### 1. Create Service Class

```typescript
// src/books/books.services.ts
import { Injectable } from '@nestjs/common';
import { BookResponse } from './interfaces/book.interface';

@Injectable()
export class BookServices {
  findAllBooks(): BookResponse {
    return {
      message: 'wow!',
      success: true,
      data: [
        {
          id: 1,
          bookName: 'DATA STRUCTURE MADE EASY',
          price: 399,
          author: ['ashutosh', 'amit'],
        },
        {
          id: 2,
          bookName: 'harry potter',
          price: 399,
          author: ['ashutosh', 'Rahul'],
        },
      ],
    };
  }
}
```

### 2. Service Key Points

- **@Injectable()**: Decorator that marks the class as a provider
- **Dependency Injection**: Services can be injected into controllers
- **Business Logic**: Contains the core application logic
- **Reusable**: Can be used across multiple controllers

## 🎯 How to Use Services in Controllers

### 1. Inject Service into Controller

```typescript
// src/books/books.controllers.ts
import { Controller, Get } from '@nestjs/common';
import { BookServices } from './books.services';

@Controller('book')
export class BooksController {
  constructor(private BookServices: BookServices) {}
  
  @Get()
  findAllBooks() {
    return this.BookServices.findAllBooks();
  }
}
```

### 2. Controller Best Practices

- **Dependency Injection**: Inject services through constructor
- **Single Responsibility**: Controllers handle HTTP requests only
- **Delegation**: Delegate business logic to services

## 📦 Module Configuration

### 1. Register Services and Controllers

```typescript
// src/books/books.module.ts
import { Module } from '@nestjs/common';
import { BooksController } from './books.controllers';
import { BookServices } from './books.services';

@Module({
  imports: [],
  controllers: [BooksController],
  providers: [BookServices],
  exports: [],
})
export class BooksModule {
  constructor() {
    console.log('book module');
  }
}
```

### 2. Module Structure

- **controllers**: Array of controllers in this module
- **providers**: Array of services/providers in this module
- **imports**: Other modules this module depends on
- **exports**: Services this module makes available to other modules

## 🚀 Running the Application

```bash
# Install dependencies
npm install

# Start development server
npm run start:dev

# Build for production
npm run build

# Start production server
npm run start:prod
```

## 📋 API Endpoints

- **GET** `/book` - Returns all books with structured response

## 💡 Key Takeaways

1. **Interfaces** provide type safety and better developer experience
2. **Services** contain business logic and are injectable
3. **Controllers** handle HTTP requests and delegate to services
4. **Modules** organize and configure your application components
5. **Dependency Injection** makes your code more testable and maintainable

## 🔗 Related Concepts

- **Providers**: Any class that can be injected (services, repositories, etc.)
- **Dependency Injection**: NestJS's built-in IoC container
- **TypeScript**: Strong typing for better code quality
- **Modular Architecture**: Organizing code into feature modules 