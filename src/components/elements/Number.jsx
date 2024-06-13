/* eslint-disable react/prop-types */
const Number = ({isActive, number, onClick}) => {
    return (
        <>
            <button 
                type="button"
                className={`${isActive ? 'bg-[linear-gradient(#E65895, #BC6BE8)]' : 'bg-[#393F6E]'} px-5 py-2 text-white font-semibold text-lg m-2 rounded-full`} 
                onClick={onClick}
            >
                {number}
            </button>
        </>
    )
}
export default Number