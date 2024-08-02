import express from 'express';
import cors from 'cors';
import path from 'path';
import xlsx from 'xlsx';

const app = express();
const port = 4000;

app.use(cors());

app.get('/data', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'survey_dummy_data.xlsx');
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const jsonData = xlsx.utils.sheet_to_json(worksheet);
  res.json(jsonData);
});

app.get('/download', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'survey_dummy_data.xlsx');
  res.download(filePath, 'survey_data.xlsx', (err) => {
    if (err) {
      console.error('Error downloading file:', err);
      res.status(500).send('Error downloading file');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
