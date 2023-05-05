import './Footer.css'

export function Footer({filters}) {
    return (
    <footer className='footer'>
        {JSON.stringify(filters, null, 2)}
     { /*<h4>Aprendiendo React</h4>
      <span>Abraham Morales</span>
    <h5>Shooping Cart con useContext & useReducer</h5> */}
    </footer>
  )

}