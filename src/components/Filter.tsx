import '../App.css';
import { NavLink, useSearchParams } from 'react-router-dom';

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
    const [searchParams] = useSearchParams();
    const activeCategory = searchParams.get('category');

    return (
        <div id='filterDiv'>
            <p id='filter'>Filter</p>

            {categories.map((category) => (
                <NavLink
                    key={category.id}
                    to={`/admin?category=${category.name}`}
                    className={
                        `${activeCategory === category.name ? 'active-filter-link' : 'inactive-filter-link'}
                         ${category.name === category.parent ? '' : 'shift-right'}`
                    }
                >
                    {category.name}
                </NavLink>
            ))}
        </div>
    );
}

export default Filter;
