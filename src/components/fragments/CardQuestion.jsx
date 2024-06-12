/* eslint-disable react/prop-types */


const CardQuest = ({children}) => {
    return (
        <div className="flex justify-center items-center py-12 min-h-screen">
            <div className="w-full max-w-4xl bg-[#343964] px-24 py-8 rounded-xl shadow-lg min-h-[450px]">
                {children}
            </div>
        </div>
    );
}

export default CardQuest;
