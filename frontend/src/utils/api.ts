import { errors } from "./errors";

/**
 * Class that simplifies data fetching through the methods, get, post, put and delete.
 *
 * @example
 * // Import the instance.
 * const {---InstanceName---} from '---ROUTE---'
 *
 * // Realizar una solicitud GET para obtener un solo post.
 * const post = await InstanceName.get('/post/1');
 * console.log("Título del post:", post.title);
 *
 * // Realizar una solicitud GET para obtener todos los posts.
 * const allPosts = await InstanceName.get('/posts');
 * console.log("Lista de posts:", allPosts);
 */
class API {
  BASE_URL: string;

  constructor(baseURL: string) {
    this.BASE_URL = baseURL;
  }

  // TODO remove "any" and add an union type (or proper typing) once we know the possible data we're getting from the API. ALSO we can implement client-side DTO's to make the data more type-safe and predictable.
  private async request(
    path: string,
    method: string,
    body?: object
  ): Promise<any> {
    try {
      const response = await fetch(`${this.BASE_URL}${path}`, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : undefined,
      });

      if (!response.ok) {
        throw new errors.ApiError(
          `API request failed with status ${response.status}`,
          response.status
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof TypeError) {
        throw new errors.NetworkError(
          "Network error: Unable to connect to the API"
        );
      } else {
        throw error;
      }
    }
  }

  async get(path: string): Promise<any> {
    return this.request(path, "GET");
  }

  async post(path: string, body: object): Promise<any> {
    return this.request(path, "POST", body);
  }

  async put(path: string, body: object): Promise<any> {
    return this.request(path, "PUT", body);
  }

  async delete(path: string): Promise<any> {
    return this.request(path, "DELETE");
  }
}

// An instance (also an example) of the API class. We can replace this instance with our own API data and extend the methods, customize error handling and so on. Also we can use Axios or TanStack Query if we want to automatize and get further fetching control options.

// We can create all the instances we want depending on the different BASE_URLs we may have:
export const randomAPI  = new API("https://jsonplaceholder.typicode.com");
export const randomAPI2 = new API("https://other-api-url2.com");
export const randomAPI3 = new API("https://other-api-url3.com");

//* USAGE EXAMPLE IN A COMPONENT:
/*

import { randomAPI } from "@/utils/api";

--- comp start {

const post = randomApi.get('/post/1')
const allPosts = randomApi.get('/posts')

return (<div>{post.title}</div>)

} --- comp end

*/
