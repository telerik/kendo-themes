import { Upload, KendoUploadProps } from '../upload.spec';
import { UploadFile } from '../upload-file';
import { UploadChunk } from '../templates/upload-chunk';
import { UploadNormal } from '../templates/upload-normal';

const options = Upload.options;
const states = Upload.states;
const defaults = {
  ...Upload.defaultOptions,
  variant: 'empty',
};

const variants = [
  {
    name: 'empty',
    title: 'Empty',
  },
  {
    name: 'upload',
    title: 'Upload',
  },
  {
    name: 'uploading',
    title: 'Uploading',
  },
  {
    name: 'success',
    title: 'Success',
  },
  {
    name: 'failed',
    title: 'Failed',
  },

];
const modifiers = [];

export const UploadDemo = (props: KendoUploadProps & { variant?: (typeof variants)[number]['name'] }
) => {

  const { variant, ...other } = { ...defaults, ...props };

  switch (variant) {
    case 'success':
      return (
        <UploadChunk status="done" style={{ width: '586px' }} {...other}>
          <UploadFile status="success" validationMsg="File(s) uploaded successfully." name="Image1.png" icon="file-image"></UploadFile>
          <UploadFile status="success" validationMsg="File(s) uploaded successfully." name="Image2.png" icon="file-image"></UploadFile>
        </UploadChunk>
      );
    case 'failed':
      return (
        <UploadChunk status="failed" style={{ width: '586px' }} {...other}>
          <UploadFile status="error" validationMsg="File type not allowed." name="Movie1.mkv" icon="file-image"></UploadFile>
          <UploadFile status="error" validationMsg="File type not allowed." name="Video2.mkv" icon="file-image"></UploadFile>
        </UploadChunk>
      );
    case 'uploading':
      return (
        <UploadChunk status="uploading" style={{ width: '586px' }} {...other}>
          <UploadFile progress="50" status="progress" name="Document1.txt" icon="file-pdf" size="328.92 KB"></UploadFile>
          <UploadFile progress="70" status="progress" name="Document2.txt" icon="file-pdf" size="225.68 KB"></UploadFile>
        </UploadChunk>
      );
    case 'upload':
      return (
        <UploadChunk actions status="upload" style={{ width: '586px' }} {...other}>
          <UploadFile name="Image1.png" icon="file-image" size="51.23 KB"></UploadFile>
          <UploadFile name="Image2.jpg" icon="file-image" size="106.43 KB"></UploadFile>
        </UploadChunk>
      );
    case 'empty':
    default:
      return (
        <UploadNormal async status="upload" style={{ width: '586px' }}{...other}>
        </UploadNormal>
      );
  }
}


UploadDemo.options = options;
UploadDemo.states = states;
UploadDemo.variants = variants;
UploadDemo.defaultOptions = defaults;
UploadDemo.modifiers = modifiers;
UploadDemo.className = Upload.className;

export default UploadDemo;

