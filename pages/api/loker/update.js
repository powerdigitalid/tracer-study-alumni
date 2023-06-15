import { prisma } from "../../../libs/prisma.lib";

export default async function handler(req, res) {
  try {
    if(req.method === 'PUT'){
      const { id, namaInstansi, persyaratan, image } = req.body;
      await prisma.loker.update({
        where: {
          id: id
        },
        data: {
          nama: namaInstansi,
          persyaratan: persyaratan,
          image: image
        }
      })
        .then((loker) => {
          res.status(200).json({
            message: 'success',
            data: loker
          });
        })
        .catch((err) => {
          res.status(500).json({
            message: err.message
          });
        });
    } else {
      res.status(400).json({message: 'Bad Request'});
    }
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
}