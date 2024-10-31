/*the App.tsx is the base for componments...? */
import Header from './Header' /*without curly brackets because it has already been exported*/
import './navbar.css'; /*hér er bara importað skjalinu, ekki stuff from*/

/*function returns HTML*/
function App() {
  
/*the function Header, becomes a HTML tag in return section, because we imported it*/

  return (
    <>
      
      <Header/> 
        
     
         
      
      
      
    </>
  )
}

export default App

