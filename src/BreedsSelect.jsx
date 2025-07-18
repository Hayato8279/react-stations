// @ts-check
/** 
  @param {{ breeds: string[], selectedBreed: string, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void }} props
  @returns {JSX.Element}
 */
export const BreedsSelect = ({breeds, selectedBreed, onChange}) => {

  return (
    <select value={selectedBreed} onChange={onChange}>
      <option value="">犬種を選択してください</option>
      {breeds.map((breed) => (
        <option key={breed} value={breed}>
          {breed}
        </option>
      ))}
    </select>
  )
}

export default BreedsSelect
