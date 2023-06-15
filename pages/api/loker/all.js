import { prisma } from "../../../libs/prisma.lib";

export default async function handler(req, res) {
  try {
    if(req.method === 'GET') {
      await prisma.loker.findMany()
        .then((loker) => {
          if (loker.length == 0) {
            res.status(200).json({
              message: 'unavailable',
              data: loker
            })
          } else {
            res.status(200).json({
              message: 'available',
              data: loker
            })
          }
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