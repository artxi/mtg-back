export {};

declare global {
  type SetParams = {
    code?: string;
  };

  type ScryfallSetParams = {
    format?: string;
    pretty?: boolean;
  };
}
