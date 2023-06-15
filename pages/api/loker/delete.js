import { prisma } from "../../../libs/prisma.lib";

export default async function handler(req, res) {
  try {
    if(req.method === 'DELETE'){
      const { id } = req.query;
      await prisma.loker.delete({
        where: {
          id: id
        }
      })
        .then((loker) => {
          res.status(204).json({
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