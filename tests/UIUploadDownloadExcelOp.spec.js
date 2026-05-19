const {test , expect} = require('@playwright/test');
const ExcelJs = require('exceljs');

async function writeExcelTest(searchText, updateValue, change, filePath) {
  const workbook = new ExcelJs.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.getWorksheet('Sheet1');
  const output = readExcel(worksheet, searchText);

  const cell = worksheet.getCell(output.row, output.column + change.colChange);
  cell.value = updateValue;
  await workbook.xlsx.writeFile(filePath);
}

function readExcel(worksheet, searchText) {
  let output = {row: -1, column: -1};
  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      if (cell.value === searchText) {
        output = { row: rowNumber, column: colNumber };
      }
    });
  });
  return output;
}

test('Excel Download , Upload and Operation Test', async ({page})=>{
  await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");

  const DownloadPromis = page.waitForEvent('download');
  await page.locator("#downloadButton").click();
  const dl = await DownloadPromis;

  // ✅ minimal fix: valid path
  const filePath = "C:/Users/n38/Downloads/download.xlsx";

  await dl.saveAs(filePath); // ✅ minimal fix

  await writeExcelTest("Mango", 10000, { rowChange: 0, colChange: 2 }, filePath);

  await page.setInputFiles("#fileinput", filePath);
  
  // ✅ minimal, correct assertion
  
const row = page.locator("//div[@role ='row']", { hasText: "Mango" });
await expect(row.locator("#cell-4-undefined")).toHaveText("10000");


});