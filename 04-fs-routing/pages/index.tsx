import { renderToReadableStream } from "react-dom/server";

interface Props {
 name: string;
}
const HomePage = ({name}:Props) => {
  return (
    <>
    <h1>Home Page {name} 
        </h1>
   </>
  )
}
 await renderToReadableStream(
  <HomePage name="Hello from server!" />,
);

export default HomePage;

