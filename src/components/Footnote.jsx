import { useEffect, useState } from "react";


export default function Footnote({ footnote, isOpen }) {
  const { content, type, caption } = footnote;
  const [imageLoaded, setImageLoaded] = useState(false);
  const createMarkup = (html) => { return { __html: html }; };

  useEffect(() => {
    if (!isOpen) {
      setImageLoaded(false);
    }
  }, [isOpen])


  return (
    <>
      <div className={`footnote ${isOpen ? 'loaded' : ''}`}>
        {type === "text" ? (
          <>
            <span className="footnote-text" dangerouslySetInnerHTML={createMarkup(content)}></span>
          </>
        ) : (
          <>
            <img className={`footnote-image ${imageLoaded ? 'show' : ''}`} src={content} alt="Footnote" onLoad={() => { setImageLoaded(true) }} />
            {caption === "" ? "" : <span className="footnote-text" dangerouslySetInnerHTML={createMarkup(caption)}></span>}
          </>
        )}
      </div>
    </>
  );
}
