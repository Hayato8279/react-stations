// @ts-check

/**
 * @type {() => JSX.Element}
 */

import { useState } from "react"
import DogImage from "./DogImage"

export const Description = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg')

  const handleClick = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random')
      const data = await response.json()
      setDogUrl(data.message)
    } catch (error) {
      console.error('画像の取得に失敗しました:', error)
    }
  }

  return (
    <div>
      <p>犬の画像を表示するサイトです</p>
      <DogImage imageUrl={dogUrl} />
      <br />
      <button onClick={handleClick}>更新</button>
    </div>
  )
}

export default Description
