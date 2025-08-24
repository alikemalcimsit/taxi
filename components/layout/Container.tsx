// components/layout/Container.tsx
type Props = { children: React.ReactNode; className?: string };

export default function Container({ children, className = "" }: Props) {
  return (
    <div className={`mx-auto w-full max-w-[1184px]  min-h-[60vh] px-5 ${className}`}>
      {children}
    </div>
  );
}
