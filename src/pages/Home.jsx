import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="container py-5">
        <img
          src="./ilpadrino.jpeg"
          className="d-block w-100"
          alt="..."
        />
        <h1 className="text-center mb-4">Welcome to the Movie App</h1>
        <p className="text-center">Explore a wide range of movies and find your favorites!</p>
      </section>
      <section className="container py-5">
        <h2 className="text-center">Consulta il nostro catalogo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          suscipit quod saepe ullam impedit enim omnis asperiores dicta
          consequatur odit, iste recusandae beatae adipisci aperiam atque modi
          nisi quidem mollitia?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
          laborum minus animi impedit, nostrum aliquid voluptates dicta, velit
          esse explicabo accusamus repellendus repellat iure necessitatibus
          reiciendis quia mollitia voluptate. Excepturi.
        </p>
        <Link className="btn btn-warning" to="/Movies">
          Vedi tutti i nostri film
        </Link>
      </section>
    </main>
  )
}

export default Home;