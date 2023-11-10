import Footer from "./Footer";

export default function Footnote({ footnote, isOpen }) {
  // Check if footnote is null
  if (!footnote) {
    // Optionally, return null or a placeholder
    return (
      <div className="footnote">
      </div>
    )
  }
  const { number, content, type, caption } = footnote;

  const createMarkup = (html) => {
    return { __html: html };
  };

  return (
    <>
      <div className={`footnote ${isOpen ? 'loaded' : ''}`}>
        {type === "text" ? (
          <>
            <span className="footnote-text" dangerouslySetInnerHTML={createMarkup(content)}></span>
          </>
        ) : (
          <>
            <img className="footnote-image" src={content} alt="Footnote" />
            {caption === "" ? "" : <span className="footnote-text" dangerouslySetInnerHTML={createMarkup(caption)}></span>}
          </>
        )}
      </div>
      {/* <Footer></Footer> */}
    </>
  );
}
