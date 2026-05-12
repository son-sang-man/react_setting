type Props = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
};

export default function Button({
  children,
  variant = 'primary',
}: Props) {
  return (
    <button className={`btn btn-${variant}`}>
      {children}
    </button>
  );
}