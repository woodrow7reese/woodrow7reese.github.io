import { Link } from "react-router-dom"
const Home = () => {
    return (
        <div>
            lorem ipsum ...

            <div className="flex">
                <button>
                    sign in 
                </button>

                <button>
                    <Link to='/roadmap'>
                         view progress
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Home 