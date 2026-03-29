interface SectionTagProps {
  children: React.ReactNode;
}

export function SectionTag({ children }: SectionTagProps) {
  return (
    <div className="font-mono text-[0.62rem] tracking-[0.42em] text-primary uppercase mb-4 flex items-center gap-4">
      {children}
      <span className="flex-1 h-px bg-primary-dark" />
    </div>
  );
}
