import { useEffect, useState } from "react";
import Card from "../components/elements/Card";
import getCategories from "../services/categories.service";
import { useNavigate } from "react-router-dom";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [hoverIndex, setHoverIndex] = useState(null);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCategories();
                setCategories(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    const handleClickCategory = (category, apiCategory) => {
        setLoading(true)
        setTimeout(() => {
            navigate(`/quiz/${category}/${apiCategory}`);
        }, 2000)
    };

    const hoverBackground = {
        background: 'linear-gradient(#E65895, #BC6BE8)',
        cursor: 'pointer',
    };

    const defaultBackground = {
        background: '#393F6E',
    };

    return (
        <Card className="relative flex items-center justify-center min-h-screen">
            {loading ? (  
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="loading loading-spinner text-primary w-10 h-10"></span>
                </div> 
            ) : (
                <div>
                    <h1 className="text-white text-center font-semibold text-2xl italic mt-5 tracking-wide">Choose Category</h1>
                    <div className="grid grid-cols-2 gap-6 py-10 rounded-lg">
                        {Object.keys(categories).map((category, index) => (
                            <div
                                key={index}
                                className="p-4 rounded-lg shadow-md"
                                style={hoverIndex === index ? hoverBackground : defaultBackground}
                                onMouseOver={() => setHoverIndex(index)}
                                onMouseOut={() => setHoverIndex(null)}
                                onClick={() => handleClickCategory(category, categories[category][0])}
                            >
                                <h1 className="text-white text-sm text-center font-semibold">{category}</h1>
                            </div>
                        ))}
                    </div> 
                </div>
            )}
        </Card>
    );
};

export default Categories;
