export default async function handler(req, res) {

  if (req.method === "POST") {

    // You can later process image here

    return res.status(200).json({
      prediction: "Real Note",
      confidence: "97%"
    });

  }

  res.status(405).json({ message: "Method not allowed" });
}