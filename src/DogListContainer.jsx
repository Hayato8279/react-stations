// @ts-check

import { useEffect, useState } from "react"
import BreedsSelect from "./BreedsSelect"

/**
 * @type {() => JSX.Element}
 */

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('akita')
  const [images, setImages] = useState([])

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all')
        const data = await response.json()

        // 2階層目を無視して1階層目だけ抽出
        const breedNames = Object.keys(data.message)
        setBreeds(breedNames)
      } catch (error) {
        console.error('犬種の取得に失敗しました:', error)
      }
    }

    fetchBreeds()
  }, [])

  const handleChange = (event) => {
    setSelectedBreed(event.target.value)
  }

  const listclick = async () => {
    if (!selectedBreed) return // 犬種が未選択なら何もしない

    try{
        const res = await fetch(
        `https://dog.ceo/api/breed/${selectedBreed}/images/random/3`
      )
      const data = await res.json()
      setImages(data.message) // 画像リストを state にセット
    }catch{
      setImages([]) // 失敗したら空配列に
    }
  }  
  
  return (
    <div>
      <h2>犬種一覧</h2>
      <div className="select">
        <BreedsSelect
          breeds={breeds}
          selectedBreed={selectedBreed}
          onChange={handleChange}
        />
        <button onClick={listclick}>表示</button>
      </div>

      <p>選択中の犬種: {selectedBreed || 'なし'}</p>

      <div className="image">
        {images.map((url, index) => (
          <img className="dog-image"
            key={index}
            src={url}
            />
        ))}
      </div>
    </div>
  )
}

export default DogListContainer
