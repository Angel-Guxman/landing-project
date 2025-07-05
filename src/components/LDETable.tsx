import { useEffect, useState } from 'react';
import { apiRequest } from '../functions/auth';

const LDETable = () => {
  const [datos, setDatos] = useState<any>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const res = await apiRequest("mensaje.listar");
        setDatos(res);
      } catch (err) {
        console.error("Error:", err);
        setError("Error al cargar los datos");
      } finally {
        setIsLoading(false);
      }
    };

    obtenerDatos();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64 bg-gradient-to-br from-zinc-900 via-gray-900 to-zinc-900 rounded-xl">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-zinc-900 via-gray-900 to-zinc-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-800">
      <div className="px-6 py-4 border-b border-gray-800">
        <h2 className="text-2xl font-bold text-white flex items-center">
          <svg className="w-6 h-6 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 inline-block text-transparent bg-clip-text">
            Lista de LDEs
          </span>
        </h2>
      </div>
      
      {error ? (
        <div className="p-6">
          <div className="bg-red-900/30 border-l-4 border-red-500 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-300">{error}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-800">
            <thead className="bg-gray-800/50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">ID</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Nombre</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Correo</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Mensaje</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {datos?.length > 0 ? (
                datos.map((item) => (
                  <tr key={item?.id} className="transition-colors duration-150 hover:bg-gray-800/30">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200">{item?.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item?.nombre}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <a href={`mailto:${item?.correo}`} className="text-blue-400 hover:text-blue-300 hover:underline">
                        {item?.correo}
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400 max-w-xs truncate" title={item?.mensaje}>
                      {item?.mensaje}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-400">
                    No hay datos disponibles
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
      
      {datos?.length > 0 && (
        <div className="px-6 py-3 flex items-center justify-between border-t border-gray-800 bg-gray-800/50 text-xs text-gray-400">
          <div>
            Mostrando <span className="font-medium text-white">1</span> a <span className="font-medium text-white">{datos.length}</span> de <span className="font-medium text-white">{datos.length}</span> resultados
          </div>
          <div className="flex space-x-2">
            <button disabled className="px-3 py-1 rounded border border-gray-700 bg-gray-800 text-gray-500 cursor-not-allowed">
              Anterior
            </button>
            <button className="px-3 py-1 rounded border border-purple-500 bg-purple-600 text-white hover:bg-purple-700 transition-colors">
              1
            </button>
            <button disabled className="px-3 py-1 rounded border border-gray-700 bg-gray-800 text-gray-500 cursor-not-allowed">
              Siguiente
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LDETable;
