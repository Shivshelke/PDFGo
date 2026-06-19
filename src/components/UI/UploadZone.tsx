"use client";
import React, { useRef, useState } from 'react';
import { UploadCloud, File, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { useToast } from './Toast';

interface UploadZoneProps {
  onFilesSelected: (files: File[]) => void;
  acceptedTypes: string; // e.g. ".pdf", ".docx", ".jpg,.png"
  maxFiles?: number;
  label?: string;
  subLabel?: string;
}

export default function UploadZone({
  onFilesSelected,
  acceptedTypes,
  maxFiles = 10,
  label = "Select PDF files",
  subLabel = "or drag and drop them here"
}: UploadZoneProps) {
  const [isDragActive, setIsDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { showToast } = useToast();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const validateFiles = (fileList: FileList): File[] => {
    const validFiles: File[] = [];
    const allowedExtensions = acceptedTypes.split(',').map(ext => ext.trim().toLowerCase());

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const fileExt = '.' + file.name.split('.').pop()?.toLowerCase();
      
      // Basic check
      const isAllowed = allowedExtensions.some(allowedExt => {
        if (allowedExt === '*') return true;
        if (allowedExt === '.jpg' && (fileExt === '.jpeg' || fileExt === '.jpg')) return true;
        return allowedExt === fileExt;
      });

      if (!isAllowed) {
        showToast(`File type not allowed: ${file.name}. Expected ${acceptedTypes}`, 'error');
        continue;
      }

      if (file.size > 50 * 1024 * 1024) { // 50MB
        showToast(`File is too large: ${file.name}. Max size is 50MB.`, 'error');
        continue;
      }

      validFiles.push(file);
    }

    return validFiles.slice(0, maxFiles);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = validateFiles(e.dataTransfer.files);
      if (files.length > 0) {
        onFilesSelected(files);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const files = validateFiles(e.target.files);
      if (files.length > 0) {
        onFilesSelected(files);
      }
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}
      className={`relative flex flex-col items-center justify-center rounded-3xl border-2 border-dashed p-12 text-center transition duration-300 ${
        isDragActive
          ? "border-indigo-500 bg-indigo-50/50 scale-[1.01]"
          : "border-slate-200 bg-slate-50 hover:bg-slate-100/50 hover:border-slate-300"
      }`}
    >
      <input
        ref={fileInputRef}
        type="file"
        multiple={maxFiles > 1}
        accept={acceptedTypes}
        onChange={handleChange}
        className="hidden"
      />

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md text-indigo-500 mb-6 group-hover:scale-110 transition duration-200">
        <UploadCloud className="h-8 w-8 animate-pulse-ring" />
      </div>

      <button
        onClick={handleButtonClick}
        className="rounded-2xl bg-indigo-600 px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-indigo-100 hover:bg-indigo-500 hover:scale-102 transition duration-200"
      >
        {label}
      </button>

      <p className="text-sm font-semibold text-slate-500 mt-4">
        {subLabel}
      </p>

      <div className="flex items-center gap-1.5 justify-center mt-6 text-xs text-slate-400 font-medium">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
        <span>Secure offline-ready client processing</span>
      </div>
    </div>
  );
}
