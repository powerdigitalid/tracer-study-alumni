import { prisma } from "../../../libs/prisma.lib"

export default async function handler(req, res) {
    // if (req.method === "GET") {
    //     const lamaran = await prisma.lamaran.findMany({
    //         include: {
    //             alumnis: true,
    //             loker: true,
    //         },
    //     });
    //     return res.status(200).json({data: lamaran});
    // }

    try {
      const { lokerId } = req.query;
      if(req.method === 'GET') {
        if (lokerId) {
          await prisma.lamaran.findMany({
            where: {
              lokerId: parseInt(lokerId)
            },
            select: {
              berkas: true
            }
          })
            .then((lamaran) => {
              if (lamaran.length == 0) {
                res.status(200).json({
                  message: 'unavailable',
                  data: lamaran
                })
              } else {
                res.status(200).json({
                  message: 'available',
                  data: lamaran
                })
              }
            });
        } else {
          await prisma.lamaran.findMany({})
            .then((lamaran) => {
              if (lamaran.length == 0) {
                res.status(200).json({
                  message: 'unavailable',
                  data: lamaran
                })
              } else {
                res.status(200).json({
                  message: 'available',
                  data: lamaran
                })
              }
            });
        }
      } else {
        res.status(400).json({message: 'Bad Request'});
      }
    } catch (error) {
      console.error(error)
      res.status(500).json({
        message: error.message
      });
    }
}