import  { useEffect, useState } from 'react';
import { apiRequest } from '../functions/auth';

const LDETable = () => {
  const [datos, setDatos] = useState<any>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const res = await apiRequest("mensaje.listar");
        setDatos(res);
      } catch (err) {
        console.error("Error:", err);
        setError("Error al cargar los datos");
      }
    };

    obtenerDatos();
  }, []);

  return (
    <div className="overflow-x-auto shadow rounded-lg bg-white p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Lista de LDEs</h2>
      {error && <p className="text-red-600">{error}</p>}
      <table className="min-w-full text-sm text-left text-gray-700">
        <thead className="bg-gray-100 text-xs uppercase text-gray-700">
          <tr>
            <th className="px-4 py-3 border-b">ID</th>
            <th className="px-4 py-3 border-b">Nombre</th>
            <th className="px-4 py-3 border-b">Correo</th>
            <th className="px-4 py-3 border-b">Mensaje</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {datos.map((item) => (
            <tr key={item.id}>
              <td className="px-4 py-2 border-b">{item.id}</td>
              <td className="px-4 py-2 border-b">{item.nombre}</td>
              <td className="px-4 py-2 border-b">{item.correo}</td>
              <td className="px-4 py-2 border-b">{item.mensaje}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LDETable;
