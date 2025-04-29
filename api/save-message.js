let messages = [];

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, content } = req.body;
    if (!name || !content) {
      return res.status(400).json({ error: 'Missing name or content' });
    }
    messages.push({ name, content });
    return res.status(200).json({ message: 'Saved' });
  }
  return res.status(405).json({ error: 'Method Not Allowed' });
}
