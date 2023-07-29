import { prisma } from "../../libs/prisma.lib";

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
        alumnis17: await prisma.alumnis.count({
          where: {
            lulus: '2017'
          }
        }),
        alumnis18: await prisma.alumnis.count({
          where: {
            lulus: '2018'
          }
        }),
        alumnis19: await prisma.alumnis.count({
          where: {
            lulus: '2019'
          }
        }),
        alumnis20: await prisma.alumnis.count({
          where: {
            lulus: '2020'
          }
        }),
        alumnis21: await prisma.alumnis.count({
          where: {
            lulus: '2021'
          }
        }),
        alumnis22: await prisma.alumnis.count({
          where: {
            lulus: '2022'
          }
        }),
        bekerja: await prisma.answers.count({
          where: {
            answer: 'YA',
            question_code: 'Q3'
          }
        }),
        tidakBekerja: await prisma.answers.count({
          where: {
            answer: '',
            question_code: 'Q3'
          }
        }),
        // softwareenginer: await prisma.answers.count({
        //   where: {
        //     // answer: 'Software Enginer',
        //     question_code: 'Q7'
        //   }
        // }),
        // webdesigner: await prisma.answers.count({
        //   where: {
        //     // answer: 'Web Designer',
        //     question_code: 'Q7'
        //   }
        // }),
        // dataanalyst: await prisma.answers.count({
        //   where: {
        //     // answer: 'Data Analyst',
        //     question_code: 'Q7'
        //   }
        // }),
        // backenddeveloper: await prisma.answers.count({
        //   // answer: 'Backend Developer',
        //   question_code: 'Q7'
        // }),
        // frontenddeveloper: await prisma.answers.count({
        //   // answer: 'Frontend Developer',
        //   question_code: 'Q7'
        // }),
        // notselected: await prisma.answers.count({
        //   answer: '',
        //   question_code: 'Q7'
        // })
      }
      const rataTunggu = await prisma.answers.findMany({
        where: {
          question_code: 'Q1',
          answer: {
            contains: 'sesudah'
          }
        }
      });

      let total = 0;
      let count = 0;

      for (let i = 0; i < rataTunggu.length; i++) {
        const answer = rataTunggu[i].answer;
        const index = answer.indexOf('sesudah');

        if (index !== -1) {
          const numbers = answer.substring(0, index).split(';');
          for (let j = 0; j < numbers.length; j++) {
            const number = parseInt(numbers[j]);
            if (!isNaN(number)) {
              total += number;
              count++;
            }
          }
        }
      }
      const jumlahAlumni = datacount.alumnis;
      const rataTungguRataRata = count > 0 ? total / count : 0 / jumlahAlumni;
      datacount.rataTungguRataRata = rataTungguRataRata;


      res.status(200).json({
        message: 'available',
        data: datacount
      });
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  }
}