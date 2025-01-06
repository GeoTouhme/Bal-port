export interface BaseResponseInterface<T> {
  message?: string;
  data?: T;
  error?: any;
  responseCode?: number;
  success?: boolean;
}

export class BaseResponse<T> {
  public message?: string;
  public data?: T;
  public error?: any;
  public responseCode?: number;
  public success?: boolean;

  constructor(object?: BaseResponseInterface<T>) {
    if (!object) {
      return this;
    }

    Object.entries(object).forEach(([key, value]) => {
      (this as any)[key] = value; // Cast this to any to allow dynamic assignment
    });

    return this;
  }
}
