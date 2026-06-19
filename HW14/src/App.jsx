import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import LiveTracker from './Components/LiveTracker'


const citiesData = [
  { id: 1, name: "თბილისი", temp: 25, condition: "მზიანი" },
  { id: 2, name: "ბათუმი", temp: 22, condition: "წვიმიანი" },
  { id: 3, name: "ქუთაისი", temp: 24, condition: "ღრუბლიანი" }
];


function App() {

  const [activeCity, setActiveCity] = useState(citiesData[0])
  const [isLive, setIsLive] = useState(false)

  useEffect(() => {
    console.log("ამინდის აპლიკაცია წარმატებით ჩაიტვირთა")
  }, [])


  useEffect(() => {
    document.title = `ამინდი: ${activeCity.name}`
  }, [activeCity]);

  return (
    <>
    <div className='Weather'>
      <h1>ამინდის პროგნოზი</h1>

      <div className="cities">
        {citiesData.map((city) => (
          <button key={city.id} onClick={() => setActiveCity(city)}>
            {city.name}
          </button>
        ))}
      </div>
      
      <div>
        <h2 className="cityName">{activeCity.name}</h2>
        <p>ტემპერატურა: {activeCity.temp}°C</p>
        <p>ამინდი: {activeCity.condition}</p>
      </div>

  <button onClick={() => setIsLive(!isLive)}>
    {isLive ? "გათიშე Live რეჟიმი" : "ჩართე Live რეჟიმი"}
  </button>

      {isLive ? <LiveTracker /> : null}
    </div>
    </>
  )
}

export default App
