export default function Footer({ footnote, isOpen }) {
  const { number, content, type } = footnote;

  const createMarkup = (html) => {
    return { __html: html };
  };

  return (
    <div className={`footnote ${isOpen ? 'loaded' : ''}`}>
      {type === "text" ? (
        <>
          <span className="footnote-text" dangerouslySetInnerHTML={createMarkup(content)}></span>
        </>
      )
        :
        <img src={content} alt="Footnote" />
      }
    </div>
  )
}