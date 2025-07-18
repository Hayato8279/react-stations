// @ts-check
/** 
  @param {{ imageUrl: string }} props
  @returns {JSX.Element}
 */

export const DogImage = ({imageUrl}) => {
  return (
    <img src={imageUrl} alt="犬の画像" width={300} />
  )
}

export default DogImage
