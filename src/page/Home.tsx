import FrontLayout from "../components/layouts/FrontLayout"

function Home() {
    return (
        <div><FrontLayout>
            <h1 className="text-3xl font-bold text-center">Home page</h1>
            <p className="text-center">This is the home page</p>
        </FrontLayout></div>
    )
}
export default Home