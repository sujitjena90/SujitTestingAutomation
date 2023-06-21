package com.UIAutomation.excelread;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;

import org.apache.poi.hssf.usermodel.HSSFFormulaEvaluator;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.FormulaEvaluator;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFFormulaEvaluator;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import com.Hcl.DirectCommerce.testBase.TestBase;
/**
 * 
 * @author sujit jena
 *
 */
public class Excel_Reader {
	
	
	
	public FileOutputStream fileOut = null;
	public String path;
	public static FileInputStream fis;
	public static XSSFWorkbook workbook;
	public static XSSFSheet sheet;
	public XSSFRow row;
	public XSSFCell cell;

	/**
	 * This Method will return full row value as per given test casename(rowname)
	 * parameter=sheet name,Excelpath,column name,row name 
	 * name=sujit jena
	 *  String value=getrowvalue(String sheetName,String
	 * path,columnname,rownames).get("key");
	 * 
	 * @return
	 * formula evaluator
	 */
	@SuppressWarnings("deprecation")
	public static Map<Object, Object> getrowvalue(String path, String sheetName, String testcasename) throws Exception {
		FileInputStream inputStream = new FileInputStream(path);
		@SuppressWarnings("resource")
		XSSFWorkbook workbook = new XSSFWorkbook(inputStream);
		DataFormatter objDefaultFormat = new DataFormatter();
		FormulaEvaluator objFormulaEvaluator = new XSSFFormulaEvaluator(workbook);
		XSSFSheet firstSheet = workbook.getSheet(sheetName);
		Row r = firstSheet.getRow(0);
		Iterator<?> itr = r.iterator();
		List<String> l = new ArrayList<String>();
		while (itr.hasNext()) {
			l.add(itr.next().toString());
			System.out.println(l);
		}
		Object rowNum = null;
		Exist: for (Row row : firstSheet) {
			for (Cell cell : row) {
				if (cell.getCellType() == Cell.CELL_TYPE_STRING) {
					System.out.println(cell.getRichStringCellValue().getString());
					if (cell.getRichStringCellValue().getString().trim().equalsIgnoreCase(testcasename)) {
						rowNum = row.getRowNum();
						break Exist;
					}
				}
			}
		}
		int rownum = (Integer) rowNum;
		Row rowvalue = firstSheet.getRow(rownum);
		int lastColumn = r.getLastCellNum();
		List<String> vallist = new ArrayList<String>();
		for (int i = 0; i < lastColumn; i++) {
	
			Cell c = rowvalue.getCell(i);
			objFormulaEvaluator.evaluate(c); // This will evaluate the cell, And any type of cell will return string value
		    String cellValueStr = objDefaultFormat.formatCellValue(c,objFormulaEvaluator);
			if (c == null) {
				vallist.add(null);
			} else {
				vallist.add(i, cellValueStr.toString());
			}
		}
		HashMap<Object, Object> keyvalue = new HashMap<Object, Object>();
		for (int i = 0; i < l.size(); i++) {
			keyvalue.put(l.get(i), vallist.get(i));
			System.out.println(keyvalue);
		}
		return keyvalue;

	}
	public static String Random_StringGenerator(int length) throws Exception {
		String Random = "";
		String abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

		for (int i = 0; i < length; i++) {
			double a = Math.random();
			int x = (int) (a * 100);

			if (x > 25 && x < 52) {
				x = x - 26;
			} else if (x > 51 && x < 78) {
				x = x - 52;
			} else if (x > 77 && x < 99) {
				x = x - 78;
			} else {
				x = 1;
			}

			char letter = abc.charAt(x);
			Random = Random + String.valueOf(letter);
		}
		System.out.println(Random);
		return Random;

	}
	
	public static String currentdate() {
		LocalDate currentDate = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd");
        String formattedDate = currentDate.format(formatter);
		return formattedDate;
		
	}
	public static void wait5Seconds(){
		long start = new Date().getTime();
		while(new Date().getTime() - start < 5000){

		}		
	}  
	public static String Random_NumberGenerator(int length) throws Exception {
		double number, value;
		int len;
		number = Math.random();
		StringBuffer s = new StringBuffer(length);
		s.append("1");
		for (int k = 0; k < length; k++) {
			s.append("0");
		}
		value = Double.parseDouble(s.toString());

		number = number * value;
		int random = (int) (number);
		String randomno = Integer.toString(random);
		len = randomno.length();

		if (len < length) {
			int diff = length - len;
			StringBuffer s1 = new StringBuffer(randomno);
			for (int k = 0; k < diff; k++) {
				s1.append("0");
			}
			randomno = s1.toString();
		}
		return randomno;
	}
	

}
