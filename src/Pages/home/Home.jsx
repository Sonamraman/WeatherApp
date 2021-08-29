import React ,{useState,useEffect} from 'react'
import "../CSS/style.css"

const Home = () => {

    const [city, setCity] = useState(null)
    const [search, setSearch] = useState("Karnal")

    useEffect(() => {
        const fetchApi = async()=>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=afd70268620b66d2f46ef7b5010a372c`
            const response = await fetch(url)
            const resJson = await response.json()
            // console.log(response)
            setCity(resJson.main)
        }

        fetchApi();
    }, [search])

    return (
        <>
        <div className="box">
                <div className="inputData">
                    <input type="search" className="inputFeild"
                     value={search}
                     onChange={(event)=>{setSearch(event.target.value)}}/>
                </div>
            
            {!city ? (<p className="errorMsg">No Data Found</p>):(
                <div>
                <div className="info">
                <h2 className="location">
                <i className="fas fa-street-view"></i> {search}
                </h2>
                <h1 className="temps">
                    {city.temp}
                </h1>
                <h3 className="tempin_max">Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel</h3>
                </div>

                <div className="wave_one"></div>
                <div className="wave_two"></div>
                <div className="wave_three"></div>
                </div>
            )}
            

        </div>
        </>
    )
}

export default Home
