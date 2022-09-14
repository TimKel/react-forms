

const Box = ({id, handleRemove, width, height, backgroundColor = "red"}) => {

    const remove = () => handleRemove(id);

    return (
        <>
        <div>
            <div style={{
                width: `${width}em`, 
                height: `${height}em`,
                backgroundColor }} 
            />
            <button onClick={remove}>Remove Box</button>
        </div>
        </>
    )
}

export default Box;