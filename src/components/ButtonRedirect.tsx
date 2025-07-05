const ButtonRedirect = () => {
    const user = localStorage.getItem("user");
    const href = user ? "/dashboard" : "/login";
	return (
		<a href={href} className="inline-block px-8 py-4 bg-white text-gray-900 font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
			Continuar
		</a>
	);
};

export default ButtonRedirect;