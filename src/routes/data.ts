import { Router, Request, Response } from 'express';
import path from 'path';
import xlsx from 'xlsx';

const router = Router();

router.get('/data', (req: Request, res: Response) => {
    const filePath = path.join(__dirname, 'data', 'survey_dummy_data.xlsx');
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(worksheet);
    res.json(jsonData);
  });


router.get('/download', (req: Request, res: Response) => {
    const filePath = path.join(__dirname, 'data', 'survey_dummy_data.xlsx');
    res.download(filePath, 'survey_data.xlsx', (err) => {
      if (err) {
        console.error('Error downloading file:', err);
        res.status(500).send('Error downloading file');
      }
    });
});


export default router;