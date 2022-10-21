export enum AllowedAuthProvider {
  Google,
}

export type MessageType = {
  text: string;
  createdAt: Date;
  uid: number;
};
