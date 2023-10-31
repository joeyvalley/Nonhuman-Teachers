export default function Footer({ footnote, isOpen }) {
  const { content, type } = footnote;

  return (
    <div className={`footnote ${isOpen ? 'loaded' : ''}`}>
      {type === "text" ?
        <span className="footnote-text">{content}</span>
        :
        <img src={content} alt="Footnote" />
      }
    </div>
  )
}