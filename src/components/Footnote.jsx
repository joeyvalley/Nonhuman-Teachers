export default function Footer({ footnote, isOpen }) {
  const { number, content, type } = footnote;

  return (
    <div className={`footnote ${isOpen ? 'loaded' : ''}`}>
      {type === "text" ?
        <span className="footnote-text">[{number}] {content}</span>
        :
        <img src={content} alt="Footnote" />
      }
    </div>
  )
}