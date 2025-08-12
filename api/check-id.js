export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido. Usa POST.' });
  }

  const { docNumber } = req.body;

  if (!cedula || typeof cedula !== 'string') {
    return res.status(400).json({ error: 'Número de documento inválido o ausente.' });
  }

  // Número aleatorio entre 600 y 1000
  const valor = Math.floor(Math.random() * (1000 - 600 + 1)) + 600;

  return res.status(200).json({
    docNumber,
    resultado: valor,
  });
}
