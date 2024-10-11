import { Nexios } from "nexios-http";
import { cookies } from "next/headers";

const base = `${process.env.NEXT_PUBLIC_API_URL}`


const defaultConfig = {
    baseURL: base,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    timeout: 10000,
};

const api = new Nexios(defaultConfig);

api.interceptors.request.use((config) => {
    const accessToken = cookies().get("user-blog-token");
  
    if (accessToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken.value}`,
      };
    }
  
    return config;
  });

  api.interceptors.response.use((response) => {
    return response;
  });
  
  export default api;