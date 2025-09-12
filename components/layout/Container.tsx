// components/layout/Container.tsx
type Props = { children: React.ReactNode; className?: string };

export default function Container({ children, className = "" }: Props) {
  // Not: min-h kaldırıldı; her bölüm kendi paddingini zaten sağlıyor. Küçük ekranlarda yatay taşma engellenir.
  return (
    <div className={`mx-auto w-full max-w-[1184px] px-4 sm:px-5 ${className}`}>
      {children}
    </div>
  );
}
