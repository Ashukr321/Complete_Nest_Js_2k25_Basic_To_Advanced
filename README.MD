# NestJS - Complete Guide

![NestJS Logo](https://nestjs.com/img/logo-small.svg)

## 🚀 What is NestJS?

NestJS is a progressive Node.js framework for building efficient and scalable server-side applications. It uses modern JavaScript, is built with TypeScript and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).

## 📚 Learning RoadMap

### Day 1 - NestJS Fundamentals
- **Why NestJS?** - Understanding the benefits and use cases
- **Nest App from Scratch** - Setting up your first NestJS application
- **Modules** - Understanding the modular architecture
- **Controllers** - Handling HTTP requests and responses
- **Providers** - Dependency injection and service management
- **Environment Configuration** - Managing app settings and secrets

### Day 2 - Middlewares in the Nest js 
- How to add middleware in the nest js 
- Ways to add middleware in the nest js 
- functional based approach 
- class based approach 


## 🎯 Problems NestJS Solves Over Express.js

| Feature | Express.js | NestJS |
|---------|------------|---------|
| **Architecture** | Minimalist, unopinionated | Opinionated, structured |
| **TypeScript Support** | Manual setup required | Built-in TypeScript support |
| **Dependency Injection** | Manual implementation | Built-in DI container |
| **Modular Architecture** | Manual organization | Built-in module system |
| **Testing** | Manual setup | Built-in testing utilities |
| **Code Organization** | Developer's choice | Enforced structure |
| **Scalability** | Requires careful planning | Built for enterprise apps |
| **Documentation** | Community-driven | Auto-generated OpenAPI/Swagger |




## 🏗️ Core Components of NestJS

### 1. **Modules** (`@Module()`)
- Basic building blocks of NestJS applications
- Organize related functionality
- Support for nested modules
- Command: `nest g mo moduleName`

### 2. **Controllers** (`@Controller()`)
- Handle incoming requests and return responses
- Define routes and endpoints
- Command: `nest g co controllerName`

### 3. **Services** (`@Injectable()`)
- Business logic and data access
- Can be injected into controllers or other services
- Command: `nest g s serviceName`

### 4. **Providers** (`@Injectable()`)
- Any class that can be injected as dependency
- Services, repositories, factories, helpers, etc.

### 5. **Guards** (`@Injectable()`)
- Determine whether request should be handled by route handler
- Authentication and authorization
- Command: `nest g gu guardName`

### 6. **Interceptors** (`@Injectable()`)
- Transform the result returned from a function
- Extend functionality before/after method execution
- Command: `nest g interceptor interceptorName`

### 7. **Pipes** (`@Injectable()`)
- Transform input data and validate it
- Data transformation and validation
- Command: `nest g pipe pipeName`

### 8. **Middleware** (`@Injectable()`)
- Functions executed before route handlers
- Access to request/response objects
- Command: `nest g middleware middlewareName`

## ✨ Key Features of NestJS

- 🔷 **Built with TypeScript** - Full TypeScript support out of the box
- 🏛️ **Modular Architecture** - Organize code into modules for better maintainability
- 💉 **Dependency Injection** - Built-in DI container for better testability
- 🛡️ **Guards & Interceptors** - Built-in authentication and request/response transformation
- 📚 **Auto Documentation** - Auto-generate OpenAPI/Swagger documentation
- 🧪 **Testing Support** - Built-in testing utilities and mocking
- 🚀 **Performance** - Built on Express.js or Fastify for high performance
- 📦 **Microservices Ready** - Built-in support for microservices architecture
- 🔌 **WebSocket Support** - Real-time applications with WebSocket support
- 🌐 **GraphQL Support** - Built-in GraphQL support with code-first approach

## 🛠️ Installation & Setup

### 1. Install NestJS CLI globally
```bash
npm i -g @nestjs/cli
```

### 2. Check NestJS version
```bash
nest --version
```

### 3. Create a new NestJS project
```bash
nest new app1
```
**Package Manager Options:**
- npm
- yarn  
- pnpm

## 📚 Important Concepts

### 1. **Modules** - Nested Module System
```typescript
// Create a module
nest g mo moduleName

// Example: User module
nest g mo users
```

**Module Structure:**
- Can create n-level nested modules
- Each module can import other modules
- Modules provide encapsulation and organization

### 2. **Controllers** - Handle HTTP Requests
```bash
nest g co controllerName
```

### 3. **Services** - Business Logic
```bash
nest g s serviceName
```

### 4. **Complete CRUD Generation**
```bash
# Generate complete CRUD module
nest g res resourceName

# Options available:
# REST API
# GraphQL (code first)
# GraphQL (schema first)
# Microservice (non-HTTP)
# WebSocket gateway
```

## ⚡ NestJS CLI Shortcuts & Commands

### 🏗️ Project Creation
```bash
# Create new NestJS project
nest new project-name

# Check NestJS CLI version
nest --version

# Get help with all available commands
nest --help
```

### 📦 Module Commands
```bash
# Create a new module
nest g mo module-name

# Example: Create users module
nest g mo users
```

### 🎮 Controller Commands
```bash
# Create a new controller
nest g co controller-name

# Example: Create users controller
nest g co users
```

### 🛠️ Service Commands
```bash
# Create a new service
nest g s service-name

# Example: Create users service
nest g s users
```
### 🚀 Complete Resource Generation
```bash
# Generate complete CRUD resource (module + controller + service)
nest g res resource-name

# Example: Generate complete users resource
nest g res users
```

### 🔧 Other Useful Commands
```bash
# Generate guard
nest g gu guard-name

# Generate interceptor
nest g interceptor interceptor-name

# Generate pipe
nest g pipe pipe-name

# Generate middleware
nest g middleware middleware-name

# Generate decorator
nest g decorator decorator-name

# Generate filter
nest g filter filter-name

# Generate gateway (WebSocket)
nest g gateway gateway-name
```











## 🚀 Quick Start Commands

```bash
# Create new project
nest new my-app

# Generate module
nest g mo feature-name

# Generate controller
nest g co feature-name

# Generate service
nest g s feature-name

# Generate complete resource
nest g res feature-name

# Start development server
npm run start:dev

# Build project
npm run build

# Run tests
npm run test
```

## 📁 Project Structure
```
src/
├── main.ts              # Application entry point
├── app.module.ts        # Root module
├── users/               # Feature module
│   ├── users.module.ts
│   ├── users.controller.ts
│   └── users.service.ts
└── ...
```

## 🤝 Contributors

- **Ashutosh Kumar** - *Full Stack Developer & Project Maintainer* - [GitHub](https://github.com/Ashukr321) | [Portfolio](https://ashukr321-ashutosh-kumars-projects-cb5d9ae8.vercel.app/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Useful Links

- [NestJS Official Documentation](https://docs.nestjs.com/)
- [NestJS GitHub Repository](https://github.com/nestjs/nest)
- [NestJS Examples](https://github.com/nestjs/nest/tree/master/sample)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

**Happy Coding with NestJS! 🎉** 