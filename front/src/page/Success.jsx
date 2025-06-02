const Success = () => (
    <div className="flex flex-col items-center  justify-center min-h-screen bg-[url('/image.png')] bg-cover bg-center">
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
            <svg
                className="w-16 h-16 text-green-500 mb-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                />
            </svg>
            <h1 className="text-2xl font-bold text-green-700 mb-2">Succès !</h1>
            <p className="text-gray-600 mb-4">
                Votre opération a été réalisée avec succès.
            </p>
            <a
                href="/"
                className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
                Retour à l'accueil
            </a>
        </div>
    </div>
);

export default Success;