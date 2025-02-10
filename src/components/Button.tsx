interface IButtonProps {
  text: string;
  onClick: () => void;
}

export default function Button({ text, onClick }: IButtonProps) {
  return <button onClick={onClick}>{text}</button>;
}
