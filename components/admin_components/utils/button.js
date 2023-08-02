export default function Button({ title, caption, icon, background, state }) {
  return (
    <div className="d-flex justify-content-center mb-4">
      {/* <div className="inner">
        <h3>{title}</h3>
        <p>{caption}</p>
      </div> */}
      <a onClick={state} class="btn btn-primary btn-lg active" role="button" aria-pressed="true">{title}</a>
    </div>
  )
}