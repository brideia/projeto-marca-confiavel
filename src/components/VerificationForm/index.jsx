import { useState } from 'react';
import { FiUpload, FiFile, FiTrash2, FiCheck } from 'react-icons/fi';
import { Button } from '../Button';
import {
  FormContainer,
  FormSection,
  DocumentUpload,
  DocumentList,
  DocumentItem,
  ProgressBar,
  StepIndicator,
  Step
} from './styles';

const REQUIRED_DOCUMENTS = [
  { id: 'cnpj', name: 'CNPJ', description: 'Comprovante de CNPJ ativo' },
  { id: 'address', name: 'Endereço', description: 'Comprovante de endereço' },
  { id: 'license', name: 'Licença', description: 'Licença de funcionamento' }
];

export const VerificationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [documents, setDocuments] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (e) => {
    const files = Array.from(e.target.files);
    setUploading(true);

    try {
      // Simulate file upload
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newDocuments = files.map(file => ({
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        type: file.type,
        status: 'pending'
      }));

      setDocuments(prev => [...prev, ...newDocuments]);
    } finally {
      setUploading(false);
    }
  };

  const handleRemoveDocument = (id) => {
    setDocuments(prev => prev.filter(doc => doc.id !== id));
  };

  const getProgress = () => {
    return (documents.length / REQUIRED_DOCUMENTS.length) * 100;
  };

  return (
    <FormContainer>
      <StepIndicator>
        <Step active={currentStep >= 1}>
          <span className="number">1</span>
          <span>Upload de Documentos</span>
        </Step>
        <Step active={currentStep >= 2}>
          <span className="number">2</span>
          <span>Revisão</span>
        </Step>
        <Step active={currentStep >= 3}>
          <span className="number">3</span>
          <span>Verificação</span>
        </Step>
      </StepIndicator>

      <ProgressBar progress={getProgress()} />

      <FormSection>
        <h3>Documentos Necessários</h3>
        
        <DocumentUpload as="label" htmlFor="fileUpload">
          <input
            type="file"
            id="fileUpload"
            multiple
            onChange={handleFileUpload}
            style={{ display: 'none' }}
          />
          <div className="icon">
            <FiUpload />
          </div>
          <p>Arraste os arquivos ou clique para fazer upload</p>
          <span>PDF, JPG ou PNG até 10MB</span>
        </DocumentUpload>

        <DocumentList>
          {REQUIRED_DOCUMENTS.map(doc => {
            const uploadedDoc = documents.find(d => d.name.includes(doc.id));
            
            return (
              <DocumentItem key={doc.id}>
                <div className="info">
                  <FiFile className="icon" />
                  <div>
                    <strong>{doc.name}</strong>
                    <p>{doc.description}</p>
                  </div>
                </div>
                <div className="actions">
                  {uploadedDoc ? (
                    <>
                      <FiCheck color="#00C853" />
                      <button onClick={() => handleRemoveDocument(uploadedDoc.id)}>
                        <FiTrash2 color="#FF3D00" />
                      </button>
                    </>
                  ) : (
                    <Button variant="outline" size="small">
                      Upload
                    </Button>
                  )}
                </div>
              </DocumentItem>
            );
          })}
        </DocumentList>
      </FormSection>

      <Button 
        disabled={documents.length < REQUIRED_DOCUMENTS.length || uploading}
        onClick={() => setCurrentStep(prev => prev + 1)}
      >
        {uploading ? 'Enviando...' : 'Continuar'}
      </Button>
    </FormContainer>
  );
};
