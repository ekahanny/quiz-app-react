// Categories.jsx
import { useEffect, useState } from "react";
import CardQuestion from "../fragments/CardQuestion";
import getCategories from "../../services/categories.service";

const Categories = () => {
    const [categories, setCategories] = useState([]);

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

    return (
        <CardQuestion>
            <div className="grid grid-cols-2 gap-6 py-10 rounded-lg">
                {Object.keys(categories).map((category, index) => (
                    <div key={index} className="bg-[#393F6E] p-4 rounded-lg shadow-md">
                        <h1 className="text-white text-sm text-center font-semibold">{category}</h1>
                    </div>
                ))}
            </div>
        </CardQuestion>
    );
};

export default Categories;
