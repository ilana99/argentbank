import "./darkwrapper.css"

function Darkwrapper({children}) {
    return (
        <main className="main bg-dark">
            {children}
        </main>
    )
}

export default Darkwrapper