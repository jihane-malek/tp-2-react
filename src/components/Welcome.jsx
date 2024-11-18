import { useNavigate } from "react-router-dom";

function WelcomePage() {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate("/booklist");
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#310B0B] via-[#9C3D54] to-[#E2703A]">
            {/* Content Container */}
            <div className="relative text-left p-6 max-w-md mx-auto text-white ml-20">
                <h1 className="text-4xl font-bold text-[#EEB76B] mb-4">
                    Bienvenue à la Bibliothèque!
                </h1>
                <p className="text-lg text-gray-300 mb-6">
                    Découvrez notre collection de livres en quelques clics.
                </p>
                <button
                    onClick={handleNavigation}
                    className="bg-[#EEB76B] text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-[#E2703A] hover:scale-105 transition-transform duration-300"
                >
                    Consulter la Bibliothèque
                </button>
            </div>
        </div>
    );
}

export default WelcomePage;
