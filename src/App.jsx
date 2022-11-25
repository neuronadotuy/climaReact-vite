import Footer from "./components/Footer";
import Formulario from "./components/Formulario"
import Resultado from "./components/Resultado"
import Spinner from "./components/Spinner";
import useClima from "./hooks/useClima";

function App() {

  const { result, loading } = useClima();

  return (
    <>
      <header>
        <h1>Sky Guru</h1>
      </header>
      <main>
        <Formulario />
        <div className="result">
          {Object.keys(result).length !== 0 && <Resultado />}
          {loading && <Spinner />}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
