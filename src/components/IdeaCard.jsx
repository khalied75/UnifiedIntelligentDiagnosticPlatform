export default function IdeaCard({ description, number, title }) {
  return (
    <article className="idea-card">
      {number ? <span className="idea-card-number">{number}</span> : null}
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  )
}
