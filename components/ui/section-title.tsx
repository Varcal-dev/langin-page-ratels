interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="font-display text-[clamp(2.6rem,5.5vw,5rem)] leading-[0.9] tracking-[0.03em] mb-2 [&>em]:not-italic [&>em]:text-primary">
      {children}
    </h2>
  );
}
