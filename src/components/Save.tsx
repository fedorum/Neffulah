import '../App.css';

interface Folder {
    id: number;
    name: string;
    parent: string;
}

interface Product {
    id: number;
    name: string;
    path: string;
    category: string;
}

interface Props {
    folders: Folder[];
    products: Product[];
}

function Save(props: Props) {
    // makes API call to database to save uploaded folders and images in state
    
    // folder objects are stored as id, name, parent

    // product objects are stored as id, name, path (to image), category
    // images are stored in a separate database

    const printState = (folders: Folder[], products: Product[]) => {
        console.log(folders);
        console.log(products);
    };

    return (
        <>
            <button className='adminButton' id='saveButton' onClick={() => printState(props.folders, props.products)}>Save</button>
        </>
    );
}

export default Save;
