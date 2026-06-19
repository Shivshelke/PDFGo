// Client-side analytics simulator for PDFGo Admin Panel
export interface AnalyticsData {
  totalConversions: number;
  totalFilesProcessed: number;
  totalBytesSaved: number;
  activeUsers: number;
  toolUsage: { [toolId: string]: number };
  recentActivities: {
    id: string;
    toolId: string;
    timestamp: string;
    fileName: string;
    fileSize: string;
    status: 'success' | 'failed';
  }[];
}

const DEFAULT_ANALYTICS: AnalyticsData = {
  totalConversions: 18452,
  totalFilesProcessed: 32910,
  totalBytesSaved: 42391082910, // ~39.4 GB
  activeUsers: 84,
  toolUsage: {
    "merge-pdf": 4510,
    "split-pdf": 2340,
    "compress-pdf": 5912,
    "pdf-to-word": 1823,
    "word-to-pdf": 1210,
    "jpg-to-pdf": 1540,
    "pdf-to-jpg": 923,
    "protect-pdf": 412,
    "unlock-pdf": 310,
    "ocr-pdf": 204
  },
  recentActivities: [
    { id: "act-1", toolId: "compress-pdf", timestamp: "Just now", fileName: "Q4_Financial_Report.pdf", fileSize: "12.4 MB", status: "success" },
    { id: "act-2", toolId: "merge-pdf", timestamp: "2 mins ago", fileName: "Merged_Contracts_2026.pdf", fileSize: "4.8 MB", status: "success" },
    { id: "act-3", toolId: "pdf-to-word", timestamp: "5 mins ago", fileName: "Resume_Draft.pdf", fileSize: "1.2 MB", status: "success" },
    { id: "act-4", toolId: "protect-pdf", timestamp: "12 mins ago", fileName: "Confidential_Agreement.pdf", fileSize: "840 KB", status: "success" },
    { id: "act-5", toolId: "jpg-to-pdf", timestamp: "18 mins ago", fileName: "Receipt_Scan_Compilation.pdf", fileSize: "24.1 MB", status: "success" }
  ]
};

export const getAnalytics = (): AnalyticsData => {
  if (typeof window === 'undefined') return DEFAULT_ANALYTICS;
  const stored = localStorage.getItem('pdfgo_analytics');
  if (!stored) {
    localStorage.setItem('pdfgo_analytics', JSON.stringify(DEFAULT_ANALYTICS));
    return DEFAULT_ANALYTICS;
  }
  try {
    return JSON.parse(stored);
  } catch {
    return DEFAULT_ANALYTICS;
  }
};

export const recordToolConversion = (toolId: string, fileName: string, fileSizeInBytes: number, bytesSaved: number = 0) => {
  if (typeof window === 'undefined') return;
  const current = getAnalytics();
  
  const updatedUsage = { ...current.toolUsage };
  updatedUsage[toolId] = (updatedUsage[toolId] || 0) + 1;

  const fileSizeStr = fileSizeInBytes > 1024 * 1024 
    ? `${(fileSizeInBytes / (1024 * 1024)).toFixed(1)} MB`
    : `${(fileSizeInBytes / 1024).toFixed(0)} KB`;

  const newActivity = {
    id: `act-${Date.now()}`,
    toolId,
    timestamp: "Just now",
    fileName,
    fileSize: fileSizeStr,
    status: 'success' as const
  };

  const updatedActivities = [newActivity, ...current.recentActivities.slice(0, 19)];

  const updated: AnalyticsData = {
    totalConversions: current.totalConversions + 1,
    totalFilesProcessed: current.totalFilesProcessed + 1,
    totalBytesSaved: current.totalBytesSaved + bytesSaved,
    activeUsers: Math.min(120, Math.max(30, current.activeUsers + (Math.random() > 0.5 ? 1 : -1))),
    toolUsage: updatedUsage,
    recentActivities: updatedActivities
  };

  localStorage.setItem('pdfgo_analytics', JSON.stringify(updated));
  // Dispatches custom event to notify components (like Admin page)
  window.dispatchEvent(new Event('pdfgo_analytics_update'));
};
