import { Header,Hero,Experties,Works,Portfolio, People } from "./files";
export default function App() {
  return (
    // className="bg-primary"
    <div className="app">
    <Header/>
    <Hero/>
    <Experties/>
    <Works/>
    <Portfolio/>
    <People/>
  </div>
  );
}
