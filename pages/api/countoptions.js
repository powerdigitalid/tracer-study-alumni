import { prisma } from "../../libs/prisma.lib";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      let answerscount = {
        option1: await prisma.answers.count({
          where: {
            answer: 'Software Enginer',
            question_code: 'Q7'
          }
        }),
        option2: await prisma.answers.count({
          where: {
            answer: 'Web Designer',
            question_code: 'Q7'
          }
        }),
        option3: await prisma.answers.count({
          where: {
            answer: 'Data Analyst',
            question_code: 'Q7'
          }
        }),
        option4: await prisma.answers.count({
          where: {
            answer: 'Backend Developer',
            question_code: 'Q7'
          }
        }),
        option5: await prisma.answers.count({
          where: {
            answer: 'Frontend Developer',
            question_code: 'Q7'
          }
        }),
        options1: await prisma.answers.count({
          where: {
            answer: "Shopee",
            question_code: "Q3"
          }
        }),
        options2: await prisma.answers.count({
          where: {
            answer: "Aqua",
            question_code: "Q3"
          }
        }),
        options3: await prisma.answers.count({
          where: {
            answer: "Adira",
            question_code: "Q3"
          }
        }),
        options4: await prisma.answers.count({
          where: {
            answer: "Kominfo",
            question_code: "Q3"
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