import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OData from 'react-odata';

const baseUrl = 'http://services.odata.org/V4/TripPinService/People';
const query = { filter: { FirstName: 'Javier' }  };

//http://services.odata.org/V4/TripPinService/People('russellwhyte')

class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Demo retrieving data from OData and React</h1>
        </header>
        <p className="App-intro">
                Temporary retrieving data from the following OData service: <code>http://services.odata.org/V4/TripPinService/People</code>
        </p>

      <div><span>Name</span> - <span>Number of emails</span></div>

      {/*query={query}*/}
       <OData baseUrl={baseUrl} >
       {({ loading, error, data }) => (

      <div>
            {loading && <span>Loading... (()=>{console.log(loading)}) </span>}
            {error && {/* handle error here */ }}
            {data && data.value.map((d, i) => <div key={i} id={i}>
                {d.FirstName} - 
                {d.Emails.length} 
                {console.log(d)}</div>)}
            </div>
        )}
        </OData>

    <hr></hr>
            <div>Filtering by Javier Name</div>
       <OData baseUrl={baseUrl} query={query} >
    {({ loading, error, data }) => (

    <div>
    {loading && <span>Loading... (()=>{console.log(loading)}) </span>}
{error && {/* handle error here */ }}
{data && data.value.map((d, i) => <div key={i} id={i}>
        {d.FirstName} -
        {d.Emails.length}
    {console.log(d)}</div>)}
</div>
)}
    </OData>


      </div>
    );
  }

/* Setup consistent fetch responses

    componentWillMount() {
    fetch(baseUrl)
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson.value[0].FirstName
        })
        .catch((error) => { console.error(error) });

}
    */

}

export default App;
