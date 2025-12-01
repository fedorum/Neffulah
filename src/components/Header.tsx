interface Props {
    display: 'flex';
    justifyContent: string;
    margin: string;
}

function Header(props: Props) {
    const style = {
        display: props.display,
        justifyContent: props.justifyContent,
        margin: props.margin
    };

    return (
        <div style={style}>
            <h1>Neffulah</h1>
        </div>
    );
}

export default Header;
