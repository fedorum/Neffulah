import '../App.css';
import { useLocation, useSearchParams } from 'react-router-dom';

interface Folder {
    id: number;
    name: string;
    parent: string;
}

interface Props {
    folders: Folder[];
}

function Filter(props: Props) {
    const categories = props.folders;
    const [searchParams, setSearchParams] = useSearchParams();
    const activeCategory = searchParams.get('category');
    const location = useLocation();

    // sets the search params for the respective categories when clicked on
    const setURLCategory = (category: string, parent: string) => {
        if (category === parent) {
            setSearchParams({ category: category });
        }
        else {
            setSearchParams({ category: category, parent: parent });
        }
    };

    return (
        <div id='filterDiv'>
            <p id='filter'>Filter</p>

            {location.pathname === "/admin/productsUploaded" ?
                (<p 
                    onClick={() => setURLCategory("allProducts", "allProducts")}
                    className={
                        `${activeCategory === "allProducts" ? 'active-filter-link' : 'inactive-filter-link'}`
                    }
                 >
                    All products
                </p>)
                :
                (null)
            }

            {location.pathname === "/admin/productsUploaded" ? 
                ((categories.map((category) => (
                    <p 
                        key={category.id}
                        onClick={() => setURLCategory(category.name, category.parent)}
                        className={
                            `${activeCategory === category.name ? 'active-filter-link' : 'inactive-filter-link'}
                            ${category.name === category.parent ? '' : 'shift-right'}`
                        }
                    >
                    {category.name}
                </p>
                )))) 
                : 
                (null)
            }
        </div>
    );
}

export default Filter;
