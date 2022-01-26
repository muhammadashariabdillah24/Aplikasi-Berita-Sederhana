import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Loading from "../components/Loading";
import Error from "../components/Error";
import NewList from "../components/NewList";
import SearchInput from "../components/Input";

import { getNews } from "../services/getNews";

function App() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [value, setValue] = useState('')
  
  const handleSubmit = () => {
    value.preventDefault() // method ini digunakan untuk mencegah default behavior dari submit berupa browser refresh

    if (!value) {
      return null
    }

    setValue(value)
  }
  

  const { id } = useParams()
  const DEFAULT_SEARCH_QUERY = 'microsoft'

  useEffect(() => {

    const fetchTechNews = async () => {
      setLoading(true)

      const res = await getNews({
        searchQuery: id || DEFAULT_SEARCH_QUERY
      })

      if (!res) {
        setLoading(false)
        setError(true)

        return
      }

      setLoading(false)
      setArticles(res.articles)
    }
    
    fetchTechNews()

    // React Hook useEffect has a missing dependency: 'id'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
    
    // akan terjadi error jika depedencies array dibawah ini tidak diisi oleh { id } = useParams()
    // karena id tersebut melakukan perubahan maka dari itu wajib disi

  }, [id]) // Jika id dihilangkan maka akan terjadi error


  return (
    <>
      <Navbar />
        <Container>

          <SearchInput 
            onSubmit={handleSubmit}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          {/* Jika Loading maka baris kode ini akan dijalankan */}
          {loading && <Loading />}

          {/* Jika Error maka baris kode ini akan dijalankan */}
          {error && <Error />}

          {/*
            Jika tidak loading dan articles ada datanya atau panjang dari array lebih dari 0
            maka jalankan baris kode ini
           */}
          {(!loading && articles.length > 0) && (
            <NewList articles={articles} />
          )}
        </Container>
    </>
  );
}

export default App;
