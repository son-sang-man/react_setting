export interface ButtonProps {
  /**
   * 버튼 내부 콘텐츠
   */
  children: React.ReactNode;
  /**
   * 버튼 스타일 타입
   */
  variant?: 'primary' | 'secondary';
}

export default function Button({ children, variant = 'primary' }: ButtonProps) {
  return <button className={`btn btn-${variant}`}>{children}</button>;
}
