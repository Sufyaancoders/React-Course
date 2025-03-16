import './App.css'
import Navbar from './Component/navbar'
import Filter from './Component/filter'
import Cards from './Component/cards'
import { apiurl, data } from './Component/data'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiurl)
        const apiData = await response.json()
        console.log('Fetched data:', apiData)
        setProducts(apiData) // Remove .data as the API returns an array directly
      } catch (error) {
        console.error('Fetch error:', error)
        toast.error(`Error fetching data: ${error.message}`)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      <Navbar/>
      <Filter filterdata={data}/>
      <Cards products={products}/>
      {/* <ToastContainer position="bottom-right" autoClose={3000} /> */}
    </div>
  )
}

export default App
