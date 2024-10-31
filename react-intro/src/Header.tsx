
import reactLogo from './assets/react.svg' /*ath hvort sé rétt...*/


function Header(){
    const style ={
        color:'white',
        backgroundColor:'rgba(34,108,173,1',
        padding:'30px 20px',
        fontFamily:'sans-serif',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center' 
        
    }

   
   /*the header section can also be div or <></> just as long something is around it*/
   /*ég setti style á header, þá fóru öll elementin á header...*/
   return(
    <header style={style}> 
       
       <img src={reactLogo} alt="React logo" style={{height:"100px",width:"100px"}} />
       
            <nav className="navbar">
                <ul>
                    <li><a href="/">Heima</a></li>
                    <li><a href="/about">Um okkur</a></li>
                    <li><a href="/services">Þjónusta</a></li>
                    <li><a href="/contact">Hafa samband</a></li>
                </ul>
            </nav>
      

           
    </header>   

)
}

export default Header; /* you need to export it, to be able to import on another page/file*/
                       /*If you export something by default, you don't need curly brackets*/   