import { useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import {
  ResponseContainer,
  ResponseHeader,
  ResponseForm,
  FormField,
  FileUpload
} from './styles';
import { Button } from '../Button';

export const BrandResponse = () => {
  const [files, setFiles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement response submission logic
  };

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  return (
    <ResponseContainer>
      <ResponseHeader>
        <h3>Resposta da Marca</h3>
        <p>Envie documentos e informações para atualizar o status da sua marca</p>
      </ResponseHeader>

      <ResponseForm onSubmit={handleSubmit}>
        <FormField>
          <label>Nome do Responsável</label>
          <input type="text" required />
        </FormField>

        <FormField>
          <label>Cargo</label>
          <input type="text" required />
        </FormField>

        <FormField>
          <label>Justificativa</label>
          <textarea required />
        </FormField>

        <FileUpload>
          <input
            type="file"
            id="fileUpload"
            multiple
            onChange={handleFileChange}
          />
          <label htmlFor="fileUpload">
            <FiUpload size={24} />
            <p>Clique ou arraste arquivos aqui</p>
            <span>{files.length} arquivos selecionados</span>
          </label>
        </FileUpload>

        <Button type="submit">Enviar Resposta</Button>
      </ResponseForm>
    </ResponseContainer>
  );
};
