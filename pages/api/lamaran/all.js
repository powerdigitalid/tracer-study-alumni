import { prisma } from "../../../libs/prisma.lib"

export default async function handler(req, res) {
    if (req.method === "GET") {
        const lamaran = await prisma.lamaran.findMany({
            include: {
                alumnis: true,
                loker: true,
            },
        });
        return res.status(200).json({data: lamaran});
    }
}