import { ArrowDownToLine, Loader } from "lucide-react";
import type React from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from 'react-pdf';
import './PdfViewer.css'
import { LinkButton } from "./LinkButton";
import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export interface PdfViewerProps {
  pdfPath: string,
  downloadButton?: boolean
}

export const PdfViewer: React.FC<PdfViewerProps> = ({
  pdfPath,
  downloadButton
}) => {
  const [loading, setLoading] = useState(true)
  
  return (
    <>
      <div className="pdf-container">
      <Document 
        className="rounded-3xl"
        file={pdfPath} 
        renderMode="canvas" 
        loading={<Loader className="m-2 animate-spin"/>}
        onLoadStart={() => setLoading(true)}
        onLoadError={() => setLoading(false)}
        onLoadSuccess={() => setLoading(false)}
      >
          <Page
            scale={1.2}
            pageNumber={1} 
            renderTextLayer={false} 
            renderAnnotationLayer={false} 
          />
      </Document>
      </div>
      {
        downloadButton && !loading &&
        <LinkButton href={pdfPath} className="gap-1 mb-6">
          <ArrowDownToLine size={16}/>
          Download
        </LinkButton>
      }
    </>
  );
}
