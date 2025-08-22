import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (code: string) => void;
  languages: Language[];
  translate: (key: string, params?: Record<string, any>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ht', name: 'Kreyòl', flag: '🇭🇹' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'zh', name: '中文', flag: '🇨🇳' }
];

const translations: Record<string, Record<string, string>> = {
  en: {
    uploadImages: 'Upload Satellite Images',
    dragDropImages: 'Drag & drop images here',
    supportedFormats: 'Supports JPEG, PNG, TIFF formats',
    selectFiles: 'Select Files',
    useSampleData: 'Use Sample Data',
    availableSamples: 'Available Sample Data',
    uploadImagesFirst: 'Upload images to begin GAN enhancement',
    ganEnhancement: 'GAN Image Enhancement',
    originalImage: 'Original Satellite Image',
    enhancedImage: 'GAN Enhanced Image',
    damageOverlay: 'Damage Overlay',
    startEnhancement: 'Start Enhancement',
    processing: 'Processing with GAN...',
    enhancementComplete: 'Enhancement Complete!',
    damageAreasDetected: 'Detected {{count}} damage areas',
    downloadEnhanced: 'Download Enhanced',
    damageSummary: 'AI Damage Summary',
    generateSummaryPrompt: 'Generate AI-powered damage assessment',
    generateSummary: 'Generate Summary',
    analyzingDamage: 'Analyzing damage patterns...',
    overallAssessment: 'Overall Assessment',
    severity: 'Severity',
    affectedArea: 'Affected Area',
    damageLevel: 'Damage Level',
    infrastructurePriority: 'Infrastructure Priority',
    units: 'units',
    damaged: 'damaged',
    priority: 'Priority',
    populationImpact: 'Population Impact',
    affected: 'Affected',
    displaced: 'Displaced',
    vulnerable: 'Vulnerable',
    vulnerabilityMap: 'Population Vulnerability Map',
    layers: 'Layers',
    riskLevel: 'Risk Level',
    high: 'High',
    medium: 'Medium',
    low: 'Low',
    highRiskZones: 'High Risk',
    mediumRiskZones: 'Medium Risk',
    lowRiskZones: 'Low Risk',
    coverage: 'Coverage',
    aiAssistant: 'GPT Multilingual Assistant',
    welcomeMessage: 'Hello! I can help you with disaster response operations. Ask me about evacuation routes, shelter locations, or resource allocation.',
    quickQuestions: 'Quick Questions',
    quickQuestion1: 'Evacuation routes?',
    quickQuestion2: 'Nearest shelter?',
    quickQuestion3: 'Medical facilities?',
    quickQuestion4: 'Supply distribution?',
    typeMessage: 'Type your message...',
    botEvacuationResponse: 'Based on current damage assessment, I recommend using Highway 9 north and Route 15 east as primary evacuation corridors. Avoid downtown area due to debris.',
    botShelterResponse: 'The nearest operational shelter is at Central High School (3.2km north). Capacity: 500 people. Contact: +1-555-0123',
    botMedicalResponse: 'Memorial Hospital (2.1km) is operational with emergency services. For urgent cases, helicopter landing zone is available at City Park.',
    botSupplyResponse: 'Supply distribution points: 1) Fire Station #3 (food, water) 2) Community Center (medical supplies) 3) School parking lot (emergency kits)',
    botDefaultResponse: 'I can help with evacuation routes, shelter information, medical facilities, supply distribution, and operational coordination. What specific information do you need?',
    downloadReports: 'Generate Reports',
    disasterReport: 'Haiti Earthquake Assessment',
    completed: 'Completed',
    selectFormats: 'Select Export Formats',
    itemsSelected: 'items selected',
    totalSize: 'Total size',
    generating: 'Generating...',
    download: 'Download Package',
    share: 'Share Report',
    downloadHelp: 'Reports include damage assessment, population impact analysis, and operational recommendations for field teams.',
    downloadStarted: 'Download started! Files will be saved to your downloads folder.'
  },
  es: {
    uploadImages: 'Subir Imágenes Satelitales',
    dragDropImages: 'Arrastra y suelta imágenes aquí',
    supportedFormats: 'Soporta formatos JPEG, PNG, TIFF',
    selectFiles: 'Seleccionar Archivos',
    useSampleData: 'Usar Datos de Muestra',
    availableSamples: 'Datos de Muestra Disponibles',
    uploadImagesFirst: 'Sube imágenes para comenzar mejora GAN',
    ganEnhancement: 'Mejora de Imagen GAN',
    originalImage: 'Imagen Satelital Original',
    enhancedImage: 'Imagen Mejorada con GAN',
    damageOverlay: 'Superposición de Daños',
    startEnhancement: 'Iniciar Mejora',
    processing: 'Procesando con GAN...',
    enhancementComplete: '¡Mejora Completada!',
    downloadEnhanced: 'Descargar Mejorada',
    damageSummary: 'Resumen de Daños IA',
    generateSummaryPrompt: 'Generar evaluación de daños con IA',
    generateSummary: 'Generar Resumen',
    analyzingDamage: 'Analizando patrones de daño...',
    overallAssessment: 'Evaluación General',
    severity: 'Severidad',
    affectedArea: 'Área Afectada',
    damageLevel: 'Nivel de Daño',
    infrastructurePriority: 'Prioridad de Infraestructura',
    units: 'unidades',
    damaged: 'dañado',
    priority: 'Prioridad',
    populationImpact: 'Impacto Poblacional',
    affected: 'Afectados',
    displaced: 'Desplazados',
    vulnerable: 'Vulnerables',
    vulnerabilityMap: 'Mapa de Vulnerabilidad Poblacional',
    layers: 'Capas',
    riskLevel: 'Nivel de Riesgo',
    high: 'Alto',
    medium: 'Medio',
    low: 'Bajo',
    highRiskZones: 'Riesgo Alto',
    mediumRiskZones: 'Riesgo Medio',
    lowRiskZones: 'Riesgo Bajo',
    coverage: 'Cobertura',
    aiAssistant: 'Asistente Multilingüe GPT',
    welcomeMessage: '¡Hola! Puedo ayudarte con operaciones de respuesta a desastres. Pregúntame sobre rutas de evacuación, ubicaciones de refugios o asignación de recursos.',
    quickQuestions: 'Preguntas Rápidas',
    quickQuestion1: '¿Rutas de evacuación?',
    quickQuestion2: '¿Refugio más cercano?',
    quickQuestion3: '¿Instalaciones médicas?',
    quickQuestion4: '¿Distribución de suministros?',
    typeMessage: 'Escribe tu mensaje...',
    downloadReports: 'Generar Reportes',
    disasterReport: 'Evaluación Terremoto Haití',
    completed: 'Completado',
    selectFormats: 'Seleccionar Formatos de Exportación',
    download: 'Descargar Paquete',
    share: 'Compartir Reporte'
  },
  fr: {
    uploadImages: 'Télécharger Images Satellitaires',
    dragDropImages: 'Glissez et déposez les images ici',
    supportedFormats: 'Supporte les formats JPEG, PNG, TIFF',
    selectFiles: 'Sélectionner Fichiers',
    useSampleData: 'Utiliser Données Échantillon',
    availableSamples: 'Données Échantillon Disponibles',
    ganEnhancement: 'Amélioration Image GAN',
    aiAssistant: 'Assistant Multilingue GPT',
    welcomeMessage: 'Bonjour! Je peux vous aider avec les opérations de réponse aux catastrophes.',
    downloadReports: 'Générer Rapports',
    download: 'Télécharger Package',
    share: 'Partager Rapport'
  },
  ht: {
    uploadImages: 'Uploade Imaj Satelit yo',
    dragDropImages: 'Deplase ak lage imaj yo isit la',
    useSampleData: 'Sèvi ak Done Egzanp',
    ganEnhancement: 'Amelyorasyon Imaj GAN',
    aiAssistant: 'Asistan Multilingue GPT',
    welcomeMessage: 'Bonjou! Mwen ka ede w ak operasyon reponn nan katastwòf yo.',
    downloadReports: 'Jenere Rapò yo',
    download: 'Telechaje Package',
    share: 'Pataje Rapò'
  },
  ar: {
    uploadImages: 'تحميل صور الأقمار الصناعية',
    dragDropImages: 'اسحب وأفلت الصور هنا',
    useSampleData: 'استخدام بيانات عينة',
    ganEnhancement: 'تحسين صورة GAN',
    aiAssistant: 'مساعد GPT متعدد اللغات',
    welcomeMessage: 'مرحباً! يمكنني مساعدتك في عمليات الاستجابة للكوارث.',
    downloadReports: 'إنشاء التقارير',
    download: 'تحميل الحزمة',
    share: 'مشاركة التقرير'
  },
  zh: {
    uploadImages: '上传卫星图像',
    dragDropImages: '拖拽图片到这里',
    supportedFormats: '支持 JPEG、PNG、TIFF 格式',
    selectFiles: '选择文件',
    useSampleData: '使用示例数据',
    availableSamples: '可用示例数据',
    uploadImagesFirst: '请先上传图像以开始 GAN 增强',
    ganEnhancement: 'GAN 图像增强',
    originalImage: '原始卫星图像',
    enhancedImage: 'GAN 增强图像',
    damageOverlay: '损坏叠加层',
    startEnhancement: '开始增强',
    processing: '正在使用 GAN 处理...',
    enhancementComplete: '增强完成！',
    damageAreasDetected: '检测到 {{count}} 个损坏区域',
    downloadEnhanced: '下载增强图像',
    damageSummary: 'AI 损坏摘要',
    generateSummaryPrompt: '生成基于 AI 的损坏评估',
    generateSummary: '生成摘要',
    analyzingDamage: '正在分析损坏模式...',
    overallAssessment: '总体评估',
    severity: '严重程度',
    affectedArea: '受影响区域',
    damageLevel: '损坏等级',
    infrastructurePriority: '基础设施优先级',
    units: '单位',
    damaged: '受损',
    priority: '优先级',
    populationImpact: '人口影响',
    affected: '受影响',
    displaced: '流离失所',
    vulnerable: '弱势群体',
    vulnerabilityMap: '人口脆弱性地图',
    layers: '图层',
    riskLevel: '风险等级',
    high: '高',
    medium: '中',
    low: '低',
    highRiskZones: '高风险区',
    mediumRiskZones: '中风险区',
    lowRiskZones: '低风险区',
    coverage: '覆盖范围',
    aiAssistant: 'GPT 多语言助手',
    welcomeMessage: '您好！我可以帮助您进行灾害响应操作。您可以询问撤离路线、避难所位置或资源分配。',
    quickQuestions: '快速提问',
    quickQuestion1: '撤离路线？',
    quickQuestion2: '最近的避难所？',
    quickQuestion3: '医疗设施？',
    quickQuestion4: '物资分发点？',
    typeMessage: '请输入您的消息...',
    botEvacuationResponse: '根据当前损坏评估，建议使用北部的 9 号公路和东部的 15 号公路作为主要撤离走廊。请避免前往市中心区域，因有大量废墟。',
    botShelterResponse: '最近的可用避难所位于中央高中（向北 3.2 公里）。容量：500 人。联系方式：+1-555-0123',
    botMedicalResponse: '纪念医院（2.1 公里）正在运营并提供紧急服务。危急情况下，可使用市政公园的直升机停机坪。',
    botSupplyResponse: '物资分发点：1）3 号消防站（食品、水） 2）社区中心（医疗物资） 3）学校停车场（应急包）',
    botDefaultResponse: '我可以为您提供撤离路线、避难所信息、医疗设施、物资分发和行动协调的帮助。您需要了解哪方面的具体信息？',
    downloadReports: '生成报告',
    disasterReport: '飓风佛罗伦斯评估',
    completed: '已完成',
    selectFormats: '选择导出格式',
    itemsSelected: '已选择项目',
    totalSize: '总大小',
    generating: '正在生成...',
    download: '下载包',
    share: '分享报告',
    downloadHelp: '报告包括损坏评估、人口影响分析以及面向现场团队的行动建议。',
    downloadStarted: '下载已开始！文件将保存到您的下载文件夹。'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const setLanguage = (code: string) => {
    setCurrentLanguage(code);
  };

  const translate = (key: string, params?: Record<string, any>): string => {
    let text = translations[currentLanguage]?.[key] || translations.en[key] || key;
    
    if (params) {
      Object.keys(params).forEach(param => {
        text = text.replace(`{{${param}}}`, String(params[param]));
      });
    }
    
    return text;
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      setLanguage,
      languages,
      translate
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};