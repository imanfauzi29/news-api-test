import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <>
      <div className="not-found-container">
        <div>
          <h1>404</h1>
          <p>
            Page not found <Link to={"/"}>Kembali ke halaman</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage
