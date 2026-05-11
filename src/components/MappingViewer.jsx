const mapLayers = [
  {
    title: 'Location',
    description:
      'The system highlights the suspected anatomical area so doctors can focus their review quickly.',
  },
  {
    title: 'Layer',
    description:
      'The model separates body layers visually, such as surface, tissue, organ, bone, or internal region.',
  },
  {
    title: 'Damage Type',
    description:
      'The output can label the simulated case as fracture, mass, inflammation, or abnormal pattern.',
  },
]

export default function MappingViewer() {
  return (
    <div className="mapping-workspace">
      <div className="body-map-viewer" aria-label="Animated 3D anatomical mapping prototype">
        <span className="body-map-layer body-map-surface" />
        <span className="body-map-layer body-map-tissue" />
        <span className="body-map-layer body-map-organ" />
        <span className="body-map-layer body-map-bone" />
        <span className="body-map-highlight" />
        <span className="body-map-axis" />
        <span className="body-map-scanline" />
      </div>

      <div className="map-layer-grid">
        {mapLayers.map((layer) => (
          <article className="map-layer-card" key={layer.title}>
            <h2>{layer.title}</h2>
            <p>{layer.description}</p>
          </article>
        ))}
      </div>

      <div className="mapping-warning">
        Important: this website is a prototype simulation for presentation. Real
        medical use requires certified datasets, clinical testing, regulatory
        approval, and physician supervision.
      </div>
    </div>
  )
}
