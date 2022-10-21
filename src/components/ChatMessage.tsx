import { MessageType } from "../types";

type ChatMessageProps = {
  message: MessageType;
};

const ChatMessage = ({ message }: ChatMessageProps) => {
  const { text, uid } = message;

  return <p>{text}</p>;
};

export default ChatMessage;
