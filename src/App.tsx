import { AddBand, BandList } from "./components"

 const App = () => {
  return (
    <div className="container" >
      <div className="alert" >
        <p>Serice status <span className="text-success" >onLine</span></p>
        <p>Serice status <span className="text-danger" >offLine</span></p>
      </div>

      <h1>BandNames</h1>
      <hr />

      <div className="row" >
        <div className="col-8" >
        <BandList />
        </div>
        <div className="col-4" >
        <AddBand />
        </div>
      </div>
    </div>
  )
}


export default App
