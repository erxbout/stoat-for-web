import localforage from "localforage";

export type Session = {
  _id: string;
  token: string;
  userId: string;
  valid: boolean;
};

export type TypeAuth = {
  /**
   * Session information
   */
  session?: Session;
};

export class ThinAuth {
  auth: TypeAuth;

  constructor() {
    this.auth = this.default();
  }

  default(): TypeAuth {
    return {
      session: undefined,
    };
  }

  async load() {
    const data: any = await localforage.getItem("auth");
    if (data.session) {
      this.auth = data;
    }
  }
}

export class ThinState {
  auth = new ThinAuth();

  async load() {
    await this.auth.load();
  }
}
