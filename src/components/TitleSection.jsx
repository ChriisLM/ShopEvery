import '../assets/css/TitleSection.css'

export function TitleSection ({title}) {
  return (
    <section className="subtitle-section">
      <div className="subtitle-container">
        <div className="subtitle-form-1"></div>
        <div className="subtitle-form-2"></div>
        <h1 className="subtitle-products">{title}</h1>
      </div>
    </section>
  );
};