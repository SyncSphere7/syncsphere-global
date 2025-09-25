import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const form = formidable({
      uploadDir: '/tmp',
      keepExtensions: true,
      maxFileSize: 10 * 1024 * 1024, // 10MB limit
    });

    const [fields, files] = await form.parse(req);
    const file = Array.isArray(files.document) ? files.document[0] : files.document;

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Read file content
    const filePath = file.filepath;
    const fileName = file.originalFilename || 'unknown';
    const fileExtension = path.extname(fileName).toLowerCase();

    let content = '';
    let documentType = 'Unknown';

    // Basic file type detection and content extraction
    if (fileExtension === '.txt') {
      content = fs.readFileSync(filePath, 'utf8');
      documentType = 'Text Document';
    } else if (fileExtension === '.pdf') {
      // For now, we'll simulate PDF analysis
      // In production, you'd use pdf-parse or similar
      content = 'PDF content analysis would go here';
      documentType = 'PDF Document';
    } else if (['.doc', '.docx'].includes(fileExtension)) {
      // For now, we'll simulate Word doc analysis
      // In production, you'd use mammoth or similar
      content = 'Word document content analysis would go here';
      documentType = 'Word Document';
    } else {
      return res.status(400).json({ error: 'Unsupported file type' });
    }

    // Simple analysis (in production, you'd use AI for this)
    const analysis = {
      type: documentType,
      fileName: fileName,
      size: file.size,
      summary: generateSummary(content, fileName),
      keyPoints: extractKeyPoints(content, fileName),
      recommendations: generateRecommendations(content, fileName, documentType),
      wordCount: content.split(/\s+/).length,
      timestamp: new Date().toISOString()
    };

    // Clean up uploaded file
    fs.unlinkSync(filePath);

    res.status(200).json({
      success: true,
      analysis
    });

  } catch (error) {
    console.error('Document analysis error:', error);
    res.status(500).json({ 
      error: 'Document analysis failed',
      details: error.message 
    });
  }
}

function generateSummary(content, fileName) {
  // Simple summary generation based on content and filename
  if (fileName.toLowerCase().includes('business') || fileName.toLowerCase().includes('plan')) {
    return 'This appears to be a business-related document. I can help analyze business strategies, market opportunities, and implementation approaches based on the content.';
  }
  
  if (fileName.toLowerCase().includes('financial') || fileName.toLowerCase().includes('budget')) {
    return 'This appears to be a financial document. I can provide insights on financial planning, budget optimization, and investment strategies.';
  }
  
  if (fileName.toLowerCase().includes('technical') || fileName.toLowerCase().includes('spec')) {
    return 'This appears to be a technical document. I can help with technical analysis, architecture recommendations, and implementation guidance.';
  }
  
  return `Document analyzed successfully. Contains approximately ${content.split(/\s+/).length} words. I can provide detailed insights and recommendations based on the content.`;
}

function extractKeyPoints(content, fileName) {
  // Simple key point extraction
  const points = [];
  
  if (fileName.toLowerCase().includes('business')) {
    points.push('Business strategy analysis', 'Market opportunity assessment', 'Implementation roadmap');
  } else if (fileName.toLowerCase().includes('financial')) {
    points.push('Financial projections', 'Budget allocation', 'ROI analysis');
  } else if (fileName.toLowerCase().includes('technical')) {
    points.push('Technical requirements', 'System architecture', 'Implementation approach');
  } else {
    points.push('Content analysis', 'Strategic insights', 'Action items');
  }
  
  return points;
}

function generateRecommendations(content, fileName, documentType) {
  // Generate contextual recommendations
  if (fileName.toLowerCase().includes('business') || fileName.toLowerCase().includes('plan')) {
    return 'Consider implementing AI automation to streamline the processes outlined in your business plan. Our £1,500 pilot program can help validate your approach with a working prototype.';
  }
  
  if (fileName.toLowerCase().includes('financial')) {
    return 'Based on your financial planning, consider how AI automation can reduce operational costs and improve efficiency. We can provide ROI projections for AI implementation.';
  }
  
  if (fileName.toLowerCase().includes('technical')) {
    return 'Your technical specifications could benefit from AI integration. Our technical team can provide architecture recommendations and feasibility assessments.';
  }
  
  return 'This document contains valuable insights that could be enhanced with AI automation. Let\'s discuss how SyncSphere can help implement intelligent solutions based on your requirements.';
}