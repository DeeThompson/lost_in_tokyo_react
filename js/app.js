const Intro = () =>(
    <div className="m-auto-ns f4 f3-m f2-1 tc w-80-1 normal">
        <div className="mb3 mb4-ns">

 <div>Lost in Tokyo is a directory of fun places to see, play in and explore, in Tokyo, Japan. <div/>
    
    <div>rom museums and galleries,
     to Robot Restaurants and kitten cafes, Tokyo is the gift that keeps on giving. Dattebayo! </div>;

     </div>
     </div>.
     </div>
     
     
)
const App = () => (
    <div>
      <div className="min-vh-100 ph4 flex flex-column">
        {/* our navigation component */}
        <Intro />
        {/* our intro text component */}
      </div>
      <div className="flex flex-wrap container">{/* our attractions list component */}</div>
    </div>
  )
  
  ReactDOM.render(<App />, document.getElementById("root"));