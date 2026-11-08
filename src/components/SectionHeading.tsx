type SectionHeadingProps = {
  index: string;
  kicker: string;
  title: string;
  note?: string;
  action?: { label: string; href: string };
};

export function SectionHeading({ index, kicker, title, note, action }: SectionHeadingProps) {
  return (
    <div className="section-head">
      <div>
        <p className="section-kicker">
          <span>{index}</span> / {kicker}
        </p>
        <h2 className="section-title">{title}</h2>
      </div>

      {(note || action) && (
        <div className="section-side">
          {note && <p className="section-note">{note}</p>}
          {action && (
            <a
              className="link-more"
              href={action.href}
              target={action.href.startsWith("http") ? "_blank" : undefined}
              rel={action.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {action.label} <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}
