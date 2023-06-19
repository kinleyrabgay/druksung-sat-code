import React from 'react';
import { PDFDocument, StandardFonts, PDFBytes } from 'pdf-lib';

async function generatePDFReport() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();

  const font = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const fontSize = 12;
  const temperature = 25;
  const humidity = 60;
  const windSpeed = 10;
  const currentDate = new Date().toLocaleDateString();

  const letterContent = `
  Dear Boss,                                                                                
  
  I am writing to inform you that I am feeling unwell and unable to come to work today. I am experiencing 
  symptoms of sickness, and I believe it is best for me to take a day off to rest and recover.

  The weather conditions today indicate the following:
  1. Temperature: ${temperature}°C
  2. Humidity: ${humidity}%
  3. Wind Speed: ${windSpeed} km/h

  Additionally, there has been a significant change in the Glacier Lake Outburst Flood (GLOF) situation, 
  and a potential landslide warning has been issued. It is essential for the authority personnel to be 
  alert and take necessary precautions.

  Please let me know if there is any additional information or documentation required.


  Thank you for your understanding.

  Sincerely,
  [Your Name]`;

  const marginX = 20; // Horizontal margin
  const marginY = 20; // Vertical margin

  // Calculate the available space for the content
  const contentWidth = page.getWidth() - 2 * marginX;
  const contentHeight = page.getHeight() - 2 * marginY;

  // Draw the content with margins
  page.drawText(letterContent, {
    x: marginX,
    y: page.getHeight() - marginY - fontSize,
    size: fontSize,
    font,
    maxWidth: contentWidth,
    maxHeight: contentHeight,
    lineHeight: fontSize + 4, // Adjust the line height as needed
  });

  // Add footer text
  const footerText = `Generated Data: ${currentDate}`;

  // Calculate the width of the footer text
  const footerTextWidth = font.widthOfTextAtSize(footerText, fontSize);

  // Set the position of the footer text
  const footerX = page.getWidth() / 2 - footerTextWidth / 2;
  const footerY = marginY - 20; // Adjust the value as needed

  // Draw the footer text
  page.drawText(footerText, {
    x: footerX,
    y: footerY,
    size: fontSize,
    font,
  });

  const pdfBytes = await pdfDoc.save();

  // Create a blob from the PDF bytes
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });

  // Create a download URL for the blob
  const url = URL.createObjectURL(blob);

  // Create a temporary link element
  const link = document.createElement('a');
  link.href = url;
  link.download = 'report.pdf'; // Set the desired filename for the download

  // Append the link to the document body
  document.body.appendChild(link);

  // Trigger the click event to start the download
  link.click();

  // Remove the link from the document body
  document.body.removeChild(link);
}

const Report = () => {
  return (
    <div>
      {/* Machine learning */}
      <div></div>

      {/* Report generation */}
      <div></div>
    </div>
  );
};

export default Report;
