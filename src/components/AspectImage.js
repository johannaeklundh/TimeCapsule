

const AspectImage = ({ src, children, className }) => {
    return (
        <div className={className} style={{
            position: "relative", 
            width: "100%",
        }}>
            <img className="top" src={src} style={{width: "100%"}}>
            </img>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }}>
                {children}
            </div>
        </div>
    )
}

export default AspectImage