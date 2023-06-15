import { prisma } from "../../libs/prisma.lib"

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      let datacount = {
        alumnis: await prisma.alumnis.count(),
        tracered: await prisma.alumnis.count({
          where: {
            tracered: 'true'
          }
        }),
        untracered: await prisma.alumnis.count({
          where: {
            tracered: 'false'
          }
        }),
        alumnis19: await prisma.alumnis.count({
          where: {
            angkatan: '2019'
          }
        }),
        alumnis20: await prisma.alumnis.count({
          where: {
            angkatan: '2020'
          }
        }),
        alumnis21: await prisma.alumnis.count({
          where: {
            angkatan: '2021'
          }
        }),
        alumnis22: await prisma.alumnis.count({
          where: {
            angkatan: '2022'
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