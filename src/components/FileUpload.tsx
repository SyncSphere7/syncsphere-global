import React, { useCallback, useState } from 'react';
import { Upload, X, File, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { sanitizeForLog, sanitizeHtml } from '@/lib/security';

interface FileUploadProps {
  onFileSelect: (files: File[]) => void;
  maxFiles?: number;
  acceptedTypes?: string[];
  maxSizeBytes?: number;
}

interface UploadedFile {
  file: File;
  id: string;
  preview?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  onFileSelect,
  maxFiles = 5,
  acceptedTypes = ['image/*', 'application/pdf', '.doc', '.docx', '.txt'],
  maxSizeBytes = 10 * 1024 * 1024 // 10MB default
}) => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);

  const processFiles = useCallback((files: FileList) => {
    const fileArray = Array.from(files);
    const validFiles: UploadedFile[] = [];

    fileArray.forEach((file) => {
      // Check file size
      if (file.size > maxSizeBytes) {
        console.warn(`File ${sanitizeForLog(file.name)} is too large (${(file.size / 1024 / 1024).toFixed(2)}MB). Max size is ${(maxSizeBytes / 1024 / 1024).toFixed(2)}MB`);
        return;
      }

      // Check file type
      const isValidType = acceptedTypes.some(type => {
        if (type.includes('*')) {
          return file.type.startsWith(type.replace('*', ''));
        }
        return file.name.toLowerCase().endsWith(type) || file.type === type;
      });

      if (!isValidType) {
        console.warn(`File ${sanitizeForLog(file.name)} is not an accepted type`);
        return;
      }

      const uploadedFile: UploadedFile = {
        file,
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9)
      };

      // Create preview for images
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          uploadedFile.preview = e.target?.result as string;
          setUploadedFiles(prev => 
            prev.map(f => f.id === uploadedFile.id ? uploadedFile : f)
          );
        };
        reader.readAsDataURL(file);
      }

      validFiles.push(uploadedFile);
    });

    if (validFiles.length > 0) {
      setUploadedFiles(prev => {
        const newFiles = [...prev, ...validFiles].slice(0, maxFiles);
        onFileSelect(newFiles.map(f => f.file));
        return newFiles;
      });
    }
  }, [maxFiles, acceptedTypes, maxSizeBytes, onFileSelect]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    if (e.dataTransfer.files) {
      processFiles(e.dataTransfer.files);
    }
  }, [processFiles]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      processFiles(e.target.files);
    }
  }, [processFiles]);

  const removeFile = useCallback((fileId: string) => {
    setUploadedFiles(prev => {
      const newFiles = prev.filter(f => f.id !== fileId);
      onFileSelect(newFiles.map(f => f.file));
      return newFiles;
    });
  }, [onFileSelect]);

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) {
      return <Image size={20} className="text-blue-500" />;
    }
    return <File size={20} className="text-gray-500" />;
  };

  return (
    <div className="space-y-4">
      {/* Upload Area */}
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
          isDragOver
            ? 'border-primary bg-primary/10'
            : 'border-white/20 hover:border-white/40'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <Upload size={48} className="mx-auto mb-4 text-white/50" />
        <p className="text-white/70 mb-2">
          Drag and drop files here, or{' '}
          <label className="text-primary cursor-pointer hover:underline">
            browse files
            <input
              type="file"
              multiple
              accept={acceptedTypes.join(',')}
              onChange={handleFileInput}
              className="hidden"
            />
          </label>
        </p>
        <p className="text-xs text-white/50">
          Supports images, PDFs, Word docs, and text files (max {(maxSizeBytes / 1024 / 1024).toFixed(0)}MB each)
        </p>
      </div>

      {/* Uploaded Files */}
      {uploadedFiles.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm text-white/70">Uploaded Files ({uploadedFiles.length}/{maxFiles})</p>
          {uploadedFiles.map((uploadedFile) => (
            <Card key={uploadedFile.id} className="bg-white/5 border-white/10">
              <CardContent className="p-3">
                <div className="flex items-center gap-3">
                  {uploadedFile.preview ? (
                    <img
                      src={uploadedFile.preview}
                      alt={sanitizeHtml(uploadedFile.file.name)}
                      className="w-12 h-12 object-cover rounded"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center">
                      {getFileIcon(uploadedFile.file)}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white truncate">{sanitizeHtml(uploadedFile.file.name)}</p>
                    <p className="text-xs text-white/50">
                      {(uploadedFile.file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile(uploadedFile.id)}
                    className="text-white/50 hover:text-red-400 p-1"
                  >
                    <X size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
