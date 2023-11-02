
interface Props {
 name: string;
}
const HomePage = ({name}:Props) => {
  return (
    <>
    <h1>Home {name} 
        </h1>
   </>
  )
}

export default HomePage