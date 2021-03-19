import './App.css'
import publicIp from 'public-ip'
import { useEffect, useState } from 'react'
import axios from 'axios'

let ipaddress, ipdatastore
function App() {
  const [ipdata, setIpData] = useState({})
  useEffect(() => {
    const getIpAddress = async () => {
      ipaddress = await publicIp.v4()
      ipdatastore = await axios.get(`http://ip-api.com/json/${ipaddress}`)
      setIpData(ipdatastore.data)
    }
    getIpAddress()
  }, [])

  return (
    <div className='App' style={{ fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>IP Finder</h1>
      <br />
      <div className='tableData'>
        <table>
          <tr>
            <td style={{ border: '1px solid', padding: '10px' }}>Country</td>
            <td style={{ border: '1px solid', padding: '10px' }}>
              {ipdata.country}
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid', padding: '10px' }}>
              Country Code
            </td>
            <td style={{ border: '1px solid', padding: '10px' }}>
              {ipdata.countryCode}
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid', padding: '10px' }}>Region</td>
            <td style={{ border: '1px solid', padding: '10px' }}>
              {ipdata.region}
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid', padding: '10px' }}>
              Region Name
            </td>
            <td style={{ border: '1px solid', padding: '10px' }}>
              {ipdata.regionName}
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid', padding: '10px' }}>City</td>
            <td style={{ border: '1px solid', padding: '10px' }}>
              {ipdata.city}
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid', padding: '10px' }}>Zip</td>
            <td style={{ border: '1px solid', padding: '10px' }}>
              {ipdata.zip}
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid', padding: '10px' }}>
              Country Code
            </td>
            <td style={{ border: '1px solid', padding: '10px' }}>
              {ipdata.countryCode}
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid', padding: '10px' }}>Lat</td>
            <td style={{ border: '1px solid', padding: '10px' }}>
              {ipdata.lat}
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid', padding: '10px' }}>Long</td>
            <td style={{ border: '1px solid', padding: '10px' }}>
              {ipdata.lon}
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid', padding: '10px' }}>TimeZone</td>
            <td style={{ border: '1px solid', padding: '10px' }}>
              {ipdata.timezone}
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid', padding: '10px' }}>ISP</td>
            <td style={{ border: '1px solid', padding: '10px' }}>
              {ipdata.isp}
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid', padding: '10px' }}>ORG</td>
            <td style={{ border: '1px solid', padding: '10px' }}>
              {ipdata.org}
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid', padding: '10px' }}>AS</td>
            <td style={{ border: '1px solid', padding: '10px' }}>
              {ipdata.as}
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default App
