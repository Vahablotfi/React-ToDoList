import PropTypes from 'prop-types'

function Buttons({text,color,onClick,backgroundColor}) {
  return (
      <>
          <button onClick={onClick}
              style={{ backgroundColor: backgroundColor, color:color , fontWeight: 'bold'}}
              className="btn">
              {text}
          </button>
      </>
  )
}
 
Buttons.defaultProps = {
    color: 'white',
    backgroundColor:'blue'
}
 
Buttons.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
   
}

export default Buttons