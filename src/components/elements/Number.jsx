/* eslint-disable react/prop-types */
const Number = ({isActive, number, onClick}) => {

    const setActiveColor = () => {
        if(isActive){
            return {
                background: "linear-gradient(#E65895, #BC6BE8)"
            }
        }else{
            return {
                backgroundColor: '#393F6E'
            }
        }
    }
    
    return (
        <>
            <button 
                type="button"
                className="px-4 py-2 text-white font-semibold text-lg m-2 rounded-full"
                style={setActiveColor()}
                onClick={onClick}
            >
                {number}
            </button>
        </>
    )
}
export default Number