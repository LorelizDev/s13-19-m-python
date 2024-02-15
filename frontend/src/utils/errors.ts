// Custom errors for error handling. This is just an idea and can be either substituted by TanStack (React Query) or axios or any other tool we want that handle this for us. 


// Basic error clases that should be modified in order to reflect the behavior we want 

class ApiError extends Error {
  constructor(message: string, public status: number) {
    super(message);
    this.name = 'ApiError';
  }
}

class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NetworkError';
  }
}

// The extendable export object to handle error within the app.
export const errors = {
  ApiError,
  NetworkError,
}