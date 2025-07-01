// Utility functions for handling file downloads

export const downloadFile = (content: string, filename: string, contentType: string = 'text/plain') => {
  const blob = new Blob([content], { type: contentType });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

export const downloadTemplate = async (templatePath: string, filename: string) => {
  try {
    const response = await fetch(templatePath);
    if (!response.ok) {
      throw new Error(`Failed to fetch template: ${response.statusText}`);
    }
    
    const content = await response.text();
    const contentType = response.headers.get('content-type') || 'text/plain';
    
    downloadFile(content, filename, contentType);
    return true;
  } catch (error) {
    console.error('Download failed:', error);
    alert('Download failed. Please try again.');
    return false;
  }
};

export const generateBusinessPlanTemplate = () => {
  return downloadTemplate('/templates/business-plan-template.md', 'How-to-Become-a-Founder-Business-Plan-Template.md');
};

export const generatePitchDeckTemplate = () => {
  return downloadTemplate('/templates/pitch-deck-template.json', 'How-to-Become-a-Founder-Pitch-Deck-Template.json');
};

export const generateFinancialModel = () => {
  return downloadTemplate('/templates/financial-model-template.csv', 'How-to-Become-a-Founder-Financial-Model-Template.csv');
};

export const generateLegalChecklist = () => {
  return downloadTemplate('/templates/legal-checklist.md', 'How-to-Become-a-Founder-Legal-Checklist.md');
};

export const generateMarketResearchTemplate = () => {
  // For market research, we'll download multiple files
  const downloadMultiple = async () => {
    try {
      await downloadTemplate('/templates/market-research-customer-interviews.csv', 'Customer-Interview-Template.csv');
      await downloadTemplate('/templates/market-research-competitor-analysis.csv', 'Competitor-Analysis-Template.csv');
      alert('Market research templates downloaded successfully!');
    } catch (error) {
      console.error('Failed to download market research templates:', error);
    }
  };
  
  downloadMultiple();
};

export const generateMVPPlanningKit = () => {
  return downloadTemplate('/templates/mvp-planning-kit.md', 'MVP-Planning-Kit.md');
};