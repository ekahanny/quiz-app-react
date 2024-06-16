// Categories.jsx
import { useEffect, useState } from "react";
import CardQuestion from "../fragments/CardQuestion";
import getCategories from "../../services/categories.service";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [hoverIndex, setHoverIndex] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCategories()
                setCategories(data)
            }catch(err){
                console.log(err)
            }
        }
        fetchData()
    }, [])

    const hoverBackground = {
        background: 'linear-gradient(#E65895, #BC6BE8)',
        cursor: 'pointer'
    };

    const defaultBackground = {
        background: '#393F6E',
    };

    return (
        <CardQuestion>
            <h1 className="text-white text-center font-semibold text-2xl italic mt-5 tracking-wide">Choose Category</h1>
            <div className="grid grid-cols-2 gap-6 py-10 rounded-lg">
                {Object.keys(categories).map((category, index) => (
                    <div 
                        key={index} 
                        className="p-4 rounded-lg shadow-md"
                        style={hoverIndex === index ? hoverBackground : defaultBackground}
                        onMouseOver={() => setHoverIndex(index)}
                        onMouseOut={() => setHoverIndex(null)}
                        >
                        <h1 className="text-white text-sm text-center font-semibold">{category}</h1>
                    </div>
                ))}
            </div>
        </CardQuestion>
    );
};

export default Categories;
