import { prisma } from "../../libs/prisma.lib"

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      let datacount = {
        mitras: await prisma.users.count({
            where:{
                role: 'mitra'
            }
        }),
      }
      res.status(200).json({
        message: 'available',
        data: datacount
      })
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  }
}