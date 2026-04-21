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
    const activeSearch = searchParams.get('search');
    const location = useLocation();

    // sets the respective categories and any active search query in the search params
    const setCategoryAndSearch = (category: string, parent: string, search: any) => {
        if (category === parent) {
            if (search === null) {
                setSearchParams({ category: category });
            }
            else {
                setSearchParams({ category: category, search: search });
            }
        }
        else {
            if (search === null) {
                setSearchParams({ category: category, parent: parent });
            }
            else {
                setSearchParams({ category: category, parent: parent, search: search });
            }
        }
    };

    return (
        <div id='filterDiv'>
            <p id='filter'>Filter</p>

            {location.pathname === "/admin/productsUploaded" ?
                (<p 
                    onClick={() => setCategoryAndSearch("allProducts", "allProducts", activeSearch)}
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
                        onClick={() => setCategoryAndSearch(category.name, category.parent, activeSearch)}
                        className={
                            `${activeCategory === category.name ? 'active-filter-link' : 'inactive-filter-link'}
                            ${category.name === category.parent ? '' : 'shift-right'}`
                        }
                    >
                    {category.name}
                </p>
                )))) 
                : 
                (<p id='noCategoriesFound'>
                    No categories found
                </p>)
            }
        </div>
    );
}

export default Filter;
