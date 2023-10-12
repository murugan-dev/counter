
import "./BoxShadow.scss"
const BoxShadow = ({src_url, name, known, id, style}) =>{
    return(
       <>
       <div className="box" > 
       <div className="skill-box-container" >

       <img src={src_url} alt="name" className="skill-image" style={style} />
       <p className="skill-p1 skill-p1-name1">{name}</p>
       <p className="skill-p1 skill-p1-name2">{known}</p>            
       </div>        
       </div>
       </>
    )
}
export default BoxShadow;