/* eslint-disable react/prop-types */
const Number = ({isActive}) => {
    return (
        <>
            <button 
                type="button"
                className={`${isActive ? 'bg-[#linear-gradient(#E65895, #BC6BE8)]' : 'bg-[#393F6E]'} px-5 py-2 text-white font-semibold text-lg m-2 rounded-full`}>
                1
            </button>
        </>
    )
}
export default Number