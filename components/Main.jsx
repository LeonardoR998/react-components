export default function Main() {
  return (
    <main className="flex-grow-1">
      <div className="container py-5">
        <div className="card mx-auto">
          <img
            src="/src/assets/img/images.png"
            className="card-img-top"
            alt="Img"
          />
          <div className="card-body">
            <h5 className="card-title">Titolo del Post</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              minima consequatur odit voluptate cupiditate nesciunt. Molestiae,
              sequi ipsa? Sint enim officiis delectus porro corporis, eveniet
              nesciunt sunt tempora impedit exercitationem!
            </p>
            <a href="#" className="btn btn-warning text-uppercase text-white">
              Leggi di più
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
