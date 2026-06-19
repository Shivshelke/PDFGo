export interface FAQ {
  question: string;
  answer: string;
}

export interface PDFTool {
  id: string;
  name: string;
  path: string;
  icon: string;
  category: 'organize' | 'optimize' | 'convert' | 'security' | 'image';
  shortDesc: string;
  seoTitle: string;
  seoDesc: string;
  longDesc: string;
  features: string[];
  steps: string[];
  faqs: FAQ[];
}

export const toolsData: PDFTool[] = [
  {
    id: "merge-pdf",
    name: "Merge PDF",
    path: "/merge-pdf",
    icon: "FileMerge",
    category: "organize",
    shortDesc: "Combine multiple PDF files into a single document in seconds.",
    seoTitle: "Merge PDF Online - Combine PDF Files Free - PDFGo",
    seoDesc: "Merge PDF files online easily and for free. Combine multiple PDF documents into one PDF file in seconds. No registration or installation required.",
    longDesc: "Combine multiple PDF files into one clean document. Drag and drop your PDFs, arrange their order, and merge them with high-fidelity formatting preserved.",
    features: [
      "Arrange and reorder files with an intuitive drag-and-drop workspace",
      "Combine files of any size without losing formatting quality",
      "Privacy-first: All processing happens secure & automatically deletes files",
      "Works perfectly on mobile, tablet, and desktop browsers"
    ],
    steps: [
      "Select or drag & drop multiple PDF files into the upload box.",
      "Drag and drop the file cards to arrange them in your preferred order.",
      "Click the 'Merge PDF' button to start combining your documents.",
      "Download your combined PDF instantly or share it securely."
    ],
    faqs: [
      {
        question: "Is there a limit on the number of PDFs I can merge?",
        answer: "With PDFGo, you can merge up to 50 PDF files at once for free. Premium accounts can combine up to 200 files simultaneously."
      },
      {
        question: "Will my merged PDF lose layout or image quality?",
        answer: "No. PDFGo utilizes an advanced combining engine that merges documents exactly as they are without compression, preserving all fonts, layouts, and high-resolution images."
      },
      {
        question: "Is it safe to upload my confidential documents?",
        answer: "Yes, security is our top priority. All files are encrypted using 256-bit SSL during transfer and are automatically deleted from our secure servers within 1 hour."
      }
    ]
  },
  {
    id: "split-pdf",
    name: "Split PDF",
    path: "/split-pdf",
    icon: "Scissors",
    category: "organize",
    shortDesc: "Extract specific page ranges or split each page into a separate PDF.",
    seoTitle: "Split PDF Online - Extract Pages from PDF Free - PDFGo",
    seoDesc: "Split PDF files online free. Extract specific page ranges or save all PDF pages as separate PDF documents. Fast, secure, and easy to use.",
    longDesc: "Separate your PDF pages with high precision. Choose exact page ranges to extract, or split the entire document into individual pages instantly.",
    features: [
      "Flexible split options: Extract custom ranges or separate all pages",
      "Visual page selector to select exactly which parts to keep",
      "Lightning-fast client-side page division",
      "No quality loss on text, vectors, or graphics"
    ],
    steps: [
      "Drag and drop your PDF file into the upload field.",
      "Choose to 'Split by Range' or 'Extract All Pages'.",
      "Define your custom page ranges (e.g. 1-3, 5, 8-10).",
      "Click 'Split PDF' and download your resulting files as a ZIP archive."
    ],
    faqs: [
      {
        question: "How do I split only odd or even pages?",
        answer: "You can specify custom page ranges such as '1,3,5,7' for odd pages or '2,4,6,8' for even pages in our custom split parameters input."
      },
      {
        question: "Can I split password-protected PDFs?",
        answer: "Yes, you will just need to input the password first to unlock the PDF before splitting the pages."
      }
    ]
  },
  {
    id: "compress-pdf",
    name: "Compress PDF",
    path: "/compress-pdf",
    icon: "FileDown",
    category: "optimize",
    shortDesc: "Reduce PDF file size without sacrificing document quality.",
    seoTitle: "Compress PDF Online - Reduce PDF File Size Free - PDFGo",
    seoDesc: "Compress PDF files online to reduce file size without losing quality. Optimize images, shrink fonts, and compress structures instantly for free.",
    longDesc: "Optimize and shrink your PDF files to meet email attachment and portal size limits. Choose between Extreme, Recommended, or Less compression ratios.",
    features: [
      "Three compression levels: Extreme (low quality), Recommended (high quality), Less compression",
      "Visual display of file size reduction details",
      "Intelligent downsampling of images and vector data optimization",
      "Works fully in-browser for complete privacy"
    ],
    steps: [
      "Select your PDF file from your device or drag it into the box.",
      "Select your desired compression level (Recommended is pre-selected).",
      "Click the 'Compress PDF' button to start the optimization process.",
      "See how much space you saved and download your optimized PDF."
    ],
    faqs: [
      {
        question: "What is the difference between recommended and extreme compression?",
        answer: "Recommended compression balances optimal file size reduction with excellent visual quality. Extreme compression reduces the file size as much as possible by lowering image resolution, which might make high-res pictures look slightly pixelated but is great for text-heavy documents."
      },
      {
        question: "Is PDF compression free?",
        answer: "Yes, you can compress as many documents as you want without any hidden charges or watermarks."
      }
    ]
  },
  {
    id: "pdf-to-word",
    name: "PDF to Word",
    path: "/pdf-to-word",
    icon: "FileText",
    category: "convert",
    shortDesc: "Convert PDFs into editable Microsoft Word DOCX files seamlessly.",
    seoTitle: "Convert PDF to Word Online Free - PDFGo",
    seoDesc: "Convert PDF to Word DOCX documents online free with PDFGo. Extremely accurate conversion preserves original formatting, layouts, and tables.",
    longDesc: "Turn your static PDF files into editable Microsoft Word (.docx) documents. Our highly advanced parser extracts text, tables, and styles perfectly.",
    features: [
      "Highly accurate optical layout analysis preserves paragraphs and tables",
      "Converts PDF into a completely editable DOCX structure",
      "No registration, fast downloads, clean fonts",
      "Safe and secure conversion pipeline"
    ],
    steps: [
      "Upload your PDF document.",
      "Wait a few seconds while our smart engine parses and converts the layout.",
      "Click 'Download Word Document' to save the editable DOCX file."
    ],
    faqs: [
      {
        question: "Will the formatting of my original PDF change in Word?",
        answer: "Our parser is designed to match layouts, spacing, and styles with over 98% accuracy, keeping your document formatting highly consistent."
      },
      {
        question: "Can I convert scanned PDFs to Word?",
        answer: "Yes! If you have a scanned PDF, we recommend using our OCR PDF tool, which converts images of text into fully editable Word documents."
      }
    ]
  },
  {
    id: "word-to-pdf",
    name: "Word to PDF",
    path: "/word-to-pdf",
    icon: "FileCode",
    category: "convert",
    shortDesc: "Convert DOCX and DOC files to high-quality PDF format.",
    seoTitle: "Convert Word to PDF Online - DOCX to PDF Free - PDFGo",
    seoDesc: "Convert Microsoft Word DOC and DOCX files to professional PDF format online. Keep layouts, margins, and standard typography intact.",
    longDesc: "Create professional-grade PDF documents from your Microsoft Word files. Keep all headers, footers, fonts, and inline styles exactly as they look in Word.",
    features: [
      "Flawless DOC/DOCX rendering with exact margins",
      "Embedded fonts for high-quality cross-platform printing",
      "Instant conversion to PDF/A compliant standards",
      "Secure client file isolation"
    ],
    steps: [
      "Drag and drop your DOC or DOCX file to the tool area.",
      "Press 'Convert to PDF' and wait for our renderer to compile.",
      "Download your secure, highly aligned PDF document."
    ],
    faqs: [
      {
        question: "Can I convert standard DOC files as well as DOCX?",
        answer: "Yes, PDFGo supports both legacy Word (.doc) and modern Word XML (.docx) file formats seamlessly."
      }
    ]
  },
  {
    id: "jpg-to-pdf",
    name: "JPG to PDF",
    path: "/jpg-to-pdf",
    icon: "Image",
    category: "convert",
    shortDesc: "Convert JPG, PNG, GIF images into a PDF document easily.",
    seoTitle: "Convert JPG to PDF Online - Images to PDF Free - PDFGo",
    seoDesc: "Convert JPG, PNG, and standard images to PDF online for free. Customize layout parameters like orientation, page size, and margins.",
    longDesc: "Transform one or multiple images into a professional, cleanly aligned PDF document. Tailor orientation, borders, margins, and page layouts instantly.",
    features: [
      "Supports JPG, JPEG, PNG, GIF, BMP and TIFF formats",
      "Customize page orientation (Portrait/Landscape) and page size (A4/Letter)",
      "Set custom page margins (No margin, small margin, large margin)",
      "Drag and drop to rearrange order of images before generating PDF"
    ],
    steps: [
      "Upload or drag & drop one or multiple images into the converter.",
      "Adjust layout parameters (orientation, page size, margin).",
      "Reorder the images as you like.",
      "Click 'Convert to PDF' and get your high-quality PDF in seconds."
    ],
    faqs: [
      {
        question: "Can I combine multiple pictures into a single PDF document?",
        answer: "Absolutely! You can upload as many pictures as you want. They will be ordered sequentially inside a single PDF file."
      },
      {
        question: "Will my images be compressed?",
        answer: "You can choose whether to keep images at original resolution or compress them slightly to produce a smaller PDF size."
      }
    ]
  },
  {
    id: "pdf-to-jpg",
    name: "PDF to JPG",
    path: "/pdf-to-jpg",
    icon: "ImageIcon",
    category: "convert",
    shortDesc: "Extract all images or convert each PDF page into high-quality JPGs.",
    seoTitle: "Convert PDF to JPG Online - Save PDF Pages as Images - PDFGo",
    seoDesc: "Convert PDF to JPG online free. Save entire PDF pages as high-resolution JPEG/PNG images or extract all embedded images inside the PDF.",
    longDesc: "Turn PDF pages into beautiful image assets. Extract standalone embedded vector images, or render full pages into high-resolution JPG or PNG formats.",
    features: [
      "Convert pages to image formats (JPG, PNG)",
      "Extract only embedded graphics in their native sizes",
      "Choose output image resolution (e.g. 150 DPI, 300 DPI)",
      "Fast package generation with ZIP download option"
    ],
    steps: [
      "Select your source PDF file from your device.",
      "Select either 'Convert Entire Pages' or 'Extract Embedded Images'.",
      "Click 'Convert to JPG' to render the output frames.",
      "Download all images individually or as a single compiled ZIP file."
    ],
    faqs: [
      {
        question: "What image formats are supported for output?",
        answer: "We support high-quality JPG and lossless PNG formats for page rendering."
      }
    ]
  },
  {
    id: "protect-pdf",
    name: "Protect PDF",
    path: "/protect-pdf",
    icon: "Lock",
    category: "security",
    shortDesc: "Encrypt your PDF with a strong password to secure sensitive data.",
    seoTitle: "Protect PDF Online - Encrypt PDF with Password - PDFGo",
    seoDesc: "Secure and encrypt your PDF files with a highly strong password online. Protect your PDF documents from unauthorized copying, printing, or reading.",
    longDesc: "Prevent unauthorized access to your intellectual property. Add military-grade password encryption and define permission levels for editing or printing.",
    features: [
      "Military-grade 128-bit / 256-bit AES encryption standard",
      "Add custom password to open and view the document",
      "Prevent editing, printing, or content copying actions",
      "Secure in-browser encryption safeguards files from network leakage"
    ],
    steps: [
      "Upload the PDF document you want to secure.",
      "Type in your secure password (twice to verify).",
      "Click 'Protect PDF' to apply the strong encryption.",
      "Download your secure password-locked PDF document."
    ],
    faqs: [
      {
        question: "What encryption strength does PDFGo use?",
        answer: "We use standard high-security 128-bit and 256-bit AES encryption to lock the files, ensuring they cannot be cracked by unauthorized tools."
      },
      {
        question: "Can I remove the password later?",
        answer: "Yes, you can use our Unlock PDF tool to decrypt the file if you know the password."
      }
    ]
  },
  {
    id: "unlock-pdf",
    name: "Unlock PDF",
    path: "/unlock-pdf",
    icon: "Unlock",
    category: "security",
    shortDesc: "Remove password security and encryption from your PDF documents.",
    seoTitle: "Unlock PDF Online - Remove Password Security Free - PDFGo",
    seoDesc: "Remove password encryption from your PDF files online free. Instantly decrypt and unlock secure PDFs to copy, print, or edit content.",
    longDesc: "Remove password prompts and permission blockades from your PDF documents. Save a decrypted version to read, print, edit, and share freely.",
    features: [
      "Instantly decrypt and clear 'owner' password restrictions",
      "Clear reading limits when 'user' password is provided",
      "Fast decryption engine operates fully client-side",
      "Restore edit, copy, and print actions to disabled documents"
    ],
    steps: [
      "Select your locked PDF file to upload.",
      "If required, enter the correct user password to authorize unlock.",
      "Click the 'Unlock PDF' button to clear restrictions.",
      "Download your decrypted, fully editable PDF file."
    ],
    faqs: [
      {
        question: "Can I unlock a PDF without knowing the password?",
        answer: "If the PDF only has print or copy permissions disabled (owner passwords), our tool can unlock it instantly without a password. However, if the PDF is fully encrypted with an open password, you must supply the correct password to unlock it."
      }
    ]
  },
  {
    id: "ocr-pdf",
    name: "OCR PDF",
    path: "/ocr-pdf",
    icon: "ScanText",
    category: "convert",
    shortDesc: "Convert scanned PDFs and images into searchable, selectable documents.",
    seoTitle: "OCR PDF Online - Convert Scanned PDF to Selectable Text - PDFGo",
    seoDesc: "Convert scanned PDFs and images into searchable, selectable documents online for free. Highly accurate OCR text extraction in multiple languages.",
    longDesc: "Add a text layer to your scanned documents. Easily search terms, copy paragraphs, and index your papers with state-of-the-art Optical Character Recognition.",
    features: [
      "Premium optical character recognition (OCR) scans images of letters",
      "Extracts text paragraphs into searchable PDFs or raw text sheets",
      "Multi-lingual character recognition supported",
      "Clean visual layer overlay for text selection"
    ],
    steps: [
      "Select or drag your scanned PDF file into the upload pane.",
      "Choose the primary language of the text inside the document.",
      "Click 'Run OCR PDF' to perform character recognition.",
      "Download the searchable, selectable PDF or export text to TXT."
    ],
    faqs: [
      {
        question: "What languages does the OCR tool support?",
        answer: "PDFGo OCR supports English, Spanish, German, French, Italian, Portuguese, and over 15 other international languages."
      },
      {
        question: "Does this affect the original layout of the scanned paper?",
        answer: "No, our OCR engine embeds an invisible, fully aligned selectable text layer directly on top of the original images, keeping the exact layout perfect."
      }
    ]
  },
  {
    id: "compress-image",
    name: "Compress Image",
    path: "/compress-image",
    icon: "FileDown",
    category: "image",
    shortDesc: "Reduce the file size of your JPG, PNG, or WEBP images instantly.",
    seoTitle: "Compress Image Online - Reduce Image File Size Free - PDFGo",
    seoDesc: "Compress JPEG, PNG, and WEBP images online for free. Adjust compression levels with our smart slider to shrink file size while preserving high visual quality.",
    longDesc: "Optimize and shrink your images directly in your browser. Choose your compression level to reduce file size significantly for faster web sharing and storage.",
    features: [
      "Supports popular formats: JPG, JPEG, PNG, and WEBP",
      "Interactive compression level slider with real-time size estimation",
      "Process completely offline: Your photos never leave your device",
      "Visual display of original size, compressed size, and percentage savings"
    ],
    steps: [
      "Upload or drag & drop your image (JPG, PNG, WEBP) into the workspace.",
      "Adjust the compression quality slider to choose your balance.",
      "See the estimated compressed file size and percentage reduction.",
      "Click 'Compress Image' and download your optimized image instantly."
    ],
    faqs: [
      {
        question: "Does image compression affect visual quality?",
        answer: "Our intelligent compression algorithm downsamples details that are less visible to the human eye first. Recommended settings (70-80% quality) can reduce file size by up to 70% with virtually no visible difference."
      },
      {
        question: "Can I compress PNG images with transparent backgrounds?",
        answer: "Yes, our browser compressor fully supports transparent PNG and WEBP file formats, maintaining background transparency after optimization."
      }
    ]
  },
  {
    id: "resize-image",
    name: "Resize Image",
    path: "/resize-image",
    icon: "Scissors",
    category: "image",
    shortDesc: "Change image dimensions by custom width, height or standard presets.",
    seoTitle: "Resize Image Online - Change Image Dimensions Free - PDFGo",
    seoDesc: "Resize images online free. Customize width and height, toggle aspect ratio lock, or select popular preset dimensions with a real-time preview.",
    longDesc: "Adjust your image dimensions dynamically. Enter exact width and height pixels, lock aspect ratio for perfect proportions, or choose from standard presets.",
    features: [
      "Resize image by custom width and height dimensions in pixels",
      "Maintain aspect ratio toggle prevents image stretching",
      "Standard preset dimensions (HD, FullHD, Square, Portrait)",
      "Instant real-time preview of the resized graphic before download"
    ],
    steps: [
      "Select or drag & drop your image into the resize workspace.",
      "Specify your target width and height in pixels or select a preset.",
      "Toggle the 'Maintain Aspect Ratio' option if needed.",
      "Click 'Resize Image' to download your custom proportioned graphic."
    ],
    faqs: [
      {
        question: "What is the aspect ratio lock feature?",
        answer: "When 'Maintain Aspect Ratio' is enabled, changing the width will automatically calculate and update the height (and vice-versa) based on the original photo's proportions, ensuring it doesn't look stretched or distorted."
      },
      {
        question: "Are there pre-configured preset sizes available?",
        answer: "Yes! We provide easy-to-use presets including HD (1280x720), FullHD (1920x1080), Social Square (1080x1080), and standard profile dimensions."
      }
    ]
  },
  {
    id: "jpg-to-png",
    name: "JPG to PNG",
    path: "/jpg-to-png",
    icon: "ImageIcon",
    category: "image",
    shortDesc: "Convert JPG and JPEG images to high-quality lossless PNG format.",
    seoTitle: "Convert JPG to PNG Online Free - PDFGo",
    seoDesc: "Convert JPG and JPEG images to high-quality lossless PNG format online. Supports batch uploads for instant conversion and ZIP file downloads.",
    longDesc: "Transform standard lossy JPEG files into high-quality, transparent-compatible PNG formats. Perfect for editing layouts and preserving clean graphics.",
    features: [
      "Convert JPG and JPEG files to high-fidelity PNG format",
      "Supports batch conversions for multiple images at once",
      "High quality rendering retains clear text and sharp vector outlines",
      "Direct browser processing keeps your photos 100% private"
    ],
    steps: [
      "Select or drag & drop one or multiple JPG files to convert.",
      "Review your uploaded images in the workspace.",
      "Click 'Convert to PNG' to initiate lossless compilation.",
      "Download your converted PNG file or a compiled ZIP folder for batch results."
    ],
    faqs: [
      {
        question: "Why should I convert JPG to PNG?",
        answer: "PNG is a lossless image format. Converting JPG to PNG allows you to save graphics without introducing additional compression artifacts, which is ideal if you plan to edit or design with the image further."
      },
      {
        question: "Is batch conversion supported?",
        answer: "Yes, you can upload up to 30 JPG files simultaneously and convert them all to PNGs. They will be wrapped in a single, convenient ZIP file for download."
      }
    ]
  },
  {
    id: "png-to-jpg",
    name: "PNG to JPG",
    path: "/png-to-jpg",
    icon: "Image",
    category: "image",
    shortDesc: "Convert PNG images to highly compressed, web-ready JPG files.",
    seoTitle: "Convert PNG to JPG Online Free - PDFGo",
    seoDesc: "Convert PNG images to JPG online for free. Adjust target output quality and opt to fill transparent backgrounds with a clean solid white layer.",
    longDesc: "Convert lossless PNG files to light, web-friendly JPG images. Control quality ratios and automatically replace transparent layers with white space.",
    features: [
      "Convert lossless PNG graphics to web-ready JPEG formats",
      "Quality control slider to adjust output compression and file sizes",
      "White background option automatically handles alpha transparent layers",
      "Batch uploads let you convert multiple files with one tap"
    ],
    steps: [
      "Select or drag your PNG images into the converter.",
      "Adjust the JPG output quality factor (Recommended is 85%).",
      "Enable 'White Background' if your PNG contains transparent pixels.",
      "Click 'Convert to JPG' and save your light-weight JPEG output."
    ],
    faqs: [
      {
        question: "What happens to transparent pixels when converting to JPG?",
        answer: "Since the JPG format does not support transparency (alpha channels), transparent pixels will turn black by default. Our tool provides a 'White Background' option that automatically fills transparent areas with a clean white color instead."
      },
      {
        question: "Can I batch convert multiple PNGs?",
        answer: "Yes! Upload multiple PNGs to compile them all to JPGs in one go. Batch items are downloaded in a neat ZIP archive."
      }
    ]
  },
  {
    id: "image-size-checker",
    name: "Image Size Checker",
    path: "/image-size-checker",
    icon: "Eye",
    category: "image",
    shortDesc: "Check image dimensions, resolution, format and aspect ratios.",
    seoTitle: "Image Size Checker - Check Image Dimensions Online Free - PDFGo",
    seoDesc: "Inspect image sizes and dimensions online free. Instantly display file size, pixel width, height, resolution, format, and aspect ratio safely in-browser.",
    longDesc: "Perform instant visual and technical inspection of your graphics. Check image formats, exact width and height pixels, file size, and proportions.",
    features: [
      "Displays file size, pixel width, height, resolution, format, and aspect ratio",
      "Generates a live rendering preview of the uploaded photo",
      "100% on-device local analysis ensures your pictures are never uploaded",
      "Supports JPG, JPEG, PNG, WEBP, and GIF inspection"
    ],
    steps: [
      "Select or drag & drop any image into the inspector zone.",
      "Instantly view the high-definition picture preview frame.",
      "Read the metadata table containing complete dimension and file details.",
      "Your file is checked locally with absolutely zero server storage."
    ],
    faqs: [
      {
        question: "Does PDFGo store my checked images?",
        answer: "Absolutely not. All metadata parsing and image rendering is performed strictly on your local device inside your browser. No files are ever sent to our servers."
      },
      {
        question: "What image formats are supported for size checking?",
        answer: "Our size checker supports JPG, JPEG, PNG, WEBP, and standard GIF graphics."
      }
    ]
  },
  {
    id: "rotate-pdf",
    name: "Rotate PDF",
    path: "/rotate-pdf",
    icon: "RefreshCw",
    category: "organize",
    shortDesc: "Rotate PDF pages clockwise (90, 180, or 270 degrees) and save.",
    seoTitle: "Rotate PDF Online - Rotate PDF Pages Free - PDFGo",
    seoDesc: "Rotate PDF pages online free. Rotate specific pages or the entire PDF document clockwise by 90, 180, or 270 degrees easily in your browser.",
    longDesc: "Rotate individual pages or all pages of your PDF document clockwise. Choose between 90, 180, or 270 degrees rotation with instant preview and download.",
    features: [
      "Rotate pages by 90, 180, or 270 degrees clockwise",
      "Option to rotate all pages or only specific pages",
      "Processes locally in browser using high-performance pdf-lib",
      "No quality loss on text, fonts, layout, or graphics"
    ],
    steps: [
      "Select or drag & drop your PDF file into the workspace.",
      "Choose your desired rotation angle (90, 180, or 270 degrees).",
      "Click 'Rotate PDF' to perform the rotation locally.",
      "Download your beautifully rotated PDF document."
    ],
    faqs: [
      {
        question: "Can I rotate only a specific page in the PDF?",
        answer: "Yes, our tool allows you to specify a page range or single page number to rotate, leaving the rest of the document untouched."
      },
      {
        question: "Will my rotated PDF lose any visual quality?",
        answer: "No. The structural page rotation is applied directly to the document metadata and page structure using pdf-lib, meaning no compression or rasterization occurs."
      }
    ]
  },
  {
    id: "delete-pages",
    name: "Delete Pages",
    path: "/delete-pages",
    icon: "Trash2",
    category: "organize",
    shortDesc: "Delete unwanted pages from your PDF file and download the rest.",
    seoTitle: "Delete PDF Pages Online - Remove Pages from PDF - PDFGo",
    seoDesc: "Delete pages from PDF documents online free. Remove specific page numbers or page ranges from your PDF securely in your browser.",
    longDesc: "Remove unwanted, redundant, or sensitive pages from your PDF document easily. Specify page numbers or ranges to delete and save a clean output.",
    features: [
      "Specify exact page numbers (e.g. 2, 4) or ranges (e.g. 5-8) to remove",
      "Extracts and preserves remaining pages with high layout fidelity",
      "100% on-device local execution for total document safety",
      "Instant processing and download of cleaned PDF"
    ],
    steps: [
      "Upload or drag & drop your PDF file to the workspace.",
      "Type the page numbers or ranges you wish to delete (e.g., 1, 3, 5-7).",
      "Click 'Delete Pages' to securely slice the document locally.",
      "Save and download the updated PDF file instantly."
    ],
    faqs: [
      {
        question: "How do I specify which pages to delete?",
        answer: "You can enter single pages separated by commas (e.g. 1, 3) or page ranges using a hyphen (e.g. 5-8), or combine them like: 1, 3, 5-8."
      },
      {
        question: "Can I undo a page deletion?",
        answer: "Once the PDF is downloaded, the pages are permanently removed from that file. However, your original uploaded file remains completely untouched on your device, so you can always upload it again."
      }
    ]
  },
  {
    id: "reorder-pages",
    name: "Reorder Pages",
    path: "/reorder-pages",
    icon: "Layers",
    category: "organize",
    shortDesc: "Rearrange the page sequence of your PDF file as you want.",
    seoTitle: "Reorder PDF Pages Online - Rearrange PDF Pages Free - PDFGo",
    seoDesc: "Reorder PDF pages online free. Drag and drop page cards or enter a custom page index sequence to rearrange pages in seconds.",
    longDesc: "Rearrange the page order of your PDF document easily. Enter your desired custom sequence or arrange pages dynamically to suit your presentation.",
    features: [
      "Change the page order of any PDF document in seconds",
      "Enter a custom page index sequence (e.g., 3, 1, 2, 4)",
      "Instant browser-based compilation without server processing",
      "Preserves all bookmarks, forms, annotations, and layouts"
    ],
    steps: [
      "Select and upload the PDF file you want to rearrange.",
      "Enter the new custom order of pages separated by commas (e.g. 3, 1, 2, 4).",
      "Click 'Reorder Pages' to compile the pages in the new sequence.",
      "Download your rearranged PDF document immediately."
    ],
    faqs: [
      {
        question: "What happens if I omit some page numbers in the new sequence?",
        answer: "If you omit any pages in your reordered list, those omitted pages will not be included in the final output file, which acts as a quick page extraction!"
      },
      {
        question: "Is there a limit on the number of pages I can reorder?",
        answer: "No, PDFGo can process documents of any page count completely within your local browser's memory."
      }
    ]
  }
];
