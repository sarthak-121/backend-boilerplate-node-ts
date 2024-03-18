type ISignupPayload =
  | {
      googleToken: string;
    }
  | {
      name: string;
      email: string;
      password: string;
    };

export { ISignupPayload };
