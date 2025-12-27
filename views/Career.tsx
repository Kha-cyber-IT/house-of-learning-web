import React, { useState, useRef } from 'react';
import { Upload, FileText, CheckCircle, AlertCircle, ArrowLeft, X } from 'lucide-react';
import { ViewState } from '../types';

interface CareerProps {
  setActiveView: (view: ViewState) => void;
}

export const Career: React.FC<CareerProps> = ({ setActiveView }) => {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Validate file type
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (validTypes.includes(file.type)) {
      setFile(file);
      setUploaded(false);
    } else {
      alert("Please upload a PDF or Word document.");
    }
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  const removeFile = () => {
    setFile(null);
    setUploaded(false);
  };

  const handleSubmit = () => {
    if (!file) return;

    setUploading(true);
    // Simulate upload delay
    setTimeout(() => {
      setUploading(false);
      setUploaded(true);
      setFile(null);
    }, 2000);
  };

  return (
    <div className="animate-fade-in max-w-4xl mx-auto pt-8 pb-12">
      <button
        onClick={() => setActiveView('services')}
        className="flex items-center text-slate-400 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
      </button>

      <div className="text-center mb-10">
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-4">
          Personal IT Career Intelligence
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Upload your CV to unlock job matching, mock interviews, and personalized career guidance.
        </p>
      </div>

      <div className="glass-card-lime p-8 md:p-12 rounded-2xl border border-lime-500/20">

        {uploaded ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-lime-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-lime-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">CV Uploaded Successfully!</h3>
            <p className="text-slate-300 mb-8">
              We are analyzing your profile. You will receive personalized job matches shortly.
            </p>
            <button
              onClick={() => setUploaded(false)}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors"
            >
              Upload Another CV
            </button>
          </div>
        ) : (
          <>
            <div
              className={`relative border-2 border-dashed rounded-xl p-10 text-center transition-all duration-300 ${
                dragActive
                  ? 'border-lime-500 bg-lime-500/10'
                  : 'border-slate-600 hover:border-lime-500/50 hover:bg-white/5'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                ref={inputRef}
                type="file"
                className="hidden"
                onChange={handleChange}
                accept=".pdf,.doc,.docx"
              />

              {!file ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4">
                    <Upload className="h-8 w-8 text-lime-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Upload your CV</h3>
                  <p className="text-slate-400 mb-6">Drag and drop or click to browse</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">
                    PDF, DOC, DOCX up to 10MB
                  </p>
                  <button
                    onClick={onButtonClick}
                    className="mt-6 px-6 py-2 bg-lime-600 hover:bg-lime-500 text-white rounded-lg font-medium transition-colors"
                  >
                    Select File
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="w-16 h-16 bg-lime-900/50 rounded-full flex items-center justify-center mb-4 relative">
                    <FileText className="h-8 w-8 text-lime-400" />
                    <button
                      onClick={(e) => { e.stopPropagation(); removeFile(); }}
                      className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{file.name}</h3>
                  <p className="text-sm text-slate-400 mb-6">{(file.size / 1024 / 1024).toFixed(2)} MB</p>

                  <div className="flex gap-4">
                     <button
                      onClick={(e) => { e.stopPropagation(); removeFile(); }}
                      className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors"
                    >
                      Change File
                    </button>
                  </div>
                </div>
              )}
            </div>

            {file && (
              <div className="mt-8 flex justify-center">
                <button
                  onClick={handleSubmit}
                  disabled={uploading}
                  className={`w-full max-w-xs py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all ${
                    uploading
                      ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                      : 'bg-lime-600 hover:bg-lime-500 text-white hover:scale-105'
                  }`}
                >
                  {uploading ? (
                    <>Processing...</>
                  ) : (
                    <>Analyze My Profile <ArrowRight className="h-5 w-5" /></>
                  )}
                </button>
              </div>
            )}

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                        <CheckCircle className="h-5 w-5 text-lime-400" />
                        <h4 className="font-bold text-white">Job Matching</h4>
                    </div>
                    <p className="text-sm text-slate-400">Get matched with roles that fit your skills and experience.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                        <CheckCircle className="h-5 w-5 text-lime-400" />
                        <h4 className="font-bold text-white">Mock Interviews</h4>
                    </div>
                    <p className="text-sm text-slate-400">Practice with AI-driven interview questions tailored to you.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                        <CheckCircle className="h-5 w-5 text-lime-400" />
                        <h4 className="font-bold text-white">Career Path</h4>
                    </div>
                    <p className="text-sm text-slate-400">Visualize your potential growth and necessary certifications.</p>
                </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
