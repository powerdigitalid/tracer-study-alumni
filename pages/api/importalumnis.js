// import { prisma } from "../../libs/prisma.lib"
import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      let data = req.body.alumnis.map((alumni) => {
        return {
          nim: alumni.nim,
          nik: alumni.no_ktp? alumni.no_ktp : '-',
          npwp: '-',
          nama: alumni.nama_mhs,
          gender: alumni.kelamin,
          angkatan: alumni.angkatan,
          lulus: alumni.thn_lulus,
          alamat: alumni.alamat,
          telepon: alumni.tlp_saya,
          email: alumni.email,
          password: alumni.nim
        }
      })
      data.pop();
      const prisma = new PrismaClient()
      const insert = await prisma.alumnis.createMany({ 
        data: data,
        skipDuplicates: true
      })
      res.status(201).json({message: 'success', data: insert})
    }
  } catch (error) {
    res.status(500).json({
      message: "Error occured, contact your Administrator for more information.",
      error: error.message
    })
  }
}