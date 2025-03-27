declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_URL: string;
      HOME_BILLBOARD_ID: string;
    }
  }
}

export {};
