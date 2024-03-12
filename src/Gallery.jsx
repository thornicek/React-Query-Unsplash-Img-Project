import { useGlobalContext } from "./context"

const Gallery = () => {
    const greeting = useGlobalContext()
    console.log(greeting)
  return (
    <h2>Gallery</h2>
  )
}
export default Gallery