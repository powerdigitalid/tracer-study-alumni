import { prisma } from "../../../libs/prisma.lib"

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query
    await prisma.users.findUnique({
      where: {
        username: id.split('-')[0],
      }
    })
      .then((user) => {
        if(user != null && user.password === id.split('-')[1]){
          res.status(200).json({
            message: 'success',
            data: user
          })
        } else {
          res.status(401).json({
            message: 'not found',
            data: null
          })
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message
        })
      })
  }
}