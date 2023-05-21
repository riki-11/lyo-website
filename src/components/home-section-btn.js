export function GreenHomeSectionBtn({text, transparentColor, hoverTextColor}) {
  const CLASSES = `${transparentColor} text-lyo-darkgreen hover:bg-lyo-darkgreen hover:text-lyo-cream lg:self-start border-4 
                    border-lyo-darkgreen font-body text-lyo-cream rounded-lg p-5 text-2xl`;
  return (
    <button className={CLASSES}>{text}</button>
  );
}
