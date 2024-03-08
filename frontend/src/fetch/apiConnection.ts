class API_CONNECTION {
  private BASE_URL = "";

  constructor(BASE_URL: string) {
    this.BASE_URL = BASE_URL;
  }

  // Función auxiliar para configurar las cabeceras comunes
  private getCommonHeaders(): HeadersInit {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  }

  async get(endpoint: string): Promise<any> {
    const url = `${this.BASE_URL}${endpoint}`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: this.getCommonHeaders(),
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      console.error("Error during GET request:", error);
      throw error;
    }
  }

  async post(endpoint: string, formData: FormData): Promise<any> {
    const url = `${this.BASE_URL}${endpoint}`;
  
    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
  
/*       if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      } */
  
      return response.json();
    } catch (error) {
      console.error("Error during POST request:", error);
      throw error;
    }
  }

  async put(endpoint: string, data: any): Promise<any> {
    const url = `${this.BASE_URL}${endpoint}`;

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: this.getCommonHeaders(),
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      console.error("Error during PUT request:", error);
      throw error;
    }
  }

  async delete(endpoint: string): Promise<any> {
    const url = `${this.BASE_URL}${endpoint}`;

    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: this.getCommonHeaders(),
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      console.error("Error during DELETE request:", error);
      throw error;
    }
  }
}

export const API = new API_CONNECTION(
  "https://s1319mpython.pythonanywhere.com/api"
);
