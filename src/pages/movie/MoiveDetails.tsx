import { useNavigate, useParams } from 'react-router-dom'
import styles from './MoiveDetails.module.scss'
import { useEffect, useState } from 'react'

interface Movie {
  Title: string
  Poster: string
  Runtime: string
}

function MoiveDetails() {
  const navigate = useNavigate()
  const { movieId } = useParams()
  const [movie, setMovie] = useState<Movie | null>(null)
  const fetchMovie = async () => {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&i=${movieId}`
    )
    const movie = await res.json()
    setMovie(movie)
  }
  console.log(movie)
  useEffect(() => {
    fetchMovie()
  }, [movieId])
  return (
    <div className={styles.modal}>
      <div
        className={styles.overlay}
        // onClick={}
      />
      <div className={styles.content}>
        {movie == null ? (
          <div>Loading...</div>
        ) : (
          <>
            <h2>{movie?.Title}</h2>
            <button
              type="button"
              onClick={() => navigate(-1)}>
              돌아가기
            </button>
            <p>{movie?.Runtime}</p>
            <img
              src={movie?.Poster}
              alt={movie?.Title}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default MoiveDetails
