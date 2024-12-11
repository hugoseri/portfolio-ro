import { Loader } from "lucide-react";
import type React from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from 'react-pdf';
import './PdfViewer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export interface PdfViewerProps {
  pdfPath: string,
}

export const PdfViewer: React.FC<PdfViewerProps> = ({
  pdfPath,
}) => {
    
    return (
      <div className="pdf-container">
      <Document 
        className="rounded-3xl"
        file={pdfPath} 
        renderMode="canvas" 
        loading={<Loader className="m-2 animate-spin"/>}
      >
          <Page
            scale={1.2}
            pageNumber={1} 
            renderTextLayer={false} 
            renderAnnotationLayer={false} 
          />
      </Document>
      </div>
    );
}
