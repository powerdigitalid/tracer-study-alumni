import { prisma } from "../../libs/prisma.lib";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      let answerscount = {
        softwareenginer: await prisma.answers.count({
          where: {
            answer: 'Software Enginer',
            question_code: 'Q7'
          }
        }),
        webdesigner: await prisma.answers.count({
          where: {
            answer: 'Web Designer',
            question_code: 'Q7'
          }
        }),
        dataanalyst: await prisma.answers.count({
          where: {
            answer: 'Data Analyst',
            question_code: 'Q7'
          }
        }),
        backenddeveloper: await prisma.answers.count({
          where: {
            answer: 'Backend Developer',
            question_code: 'Q7'
          }
        }),
        frontenddeveloper: await prisma.answers.count({
          where: {
            answer: 'Frontend Developer',
            question_code: 'Q7'
          }
        })
      }
      res.status(200).json({
        message: 'available',
        data: answerscount
      });
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  }
}