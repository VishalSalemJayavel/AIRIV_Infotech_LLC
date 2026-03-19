interface SectionHeaderProps {
  overline: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({ overline, title, subtitle, align = "left" }: SectionHeaderProps) {
  const alignClass = align === "center" ? "section-header-center" : "section-header-left";
  return (
    <div className={`section-header ${alignClass}`}>
      <div className="section-header-overline">
        <span className="section-header-line" />
        <span className="section-header-label">{overline}</span>
      </div>
      <h2 className="section-header-title">{title}</h2>
      {subtitle && (
        <p className="section-header-subtitle">{subtitle}</p>
      )}
    </div>
  );
}
