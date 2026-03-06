import { ResumeProvider } from './context/ResumeContext';
import Editor from './components/Editor/Editor';
import Preview from './components/Preview/Preview';

function App() {
  return (
    <ResumeProvider>
      <div className="flex h-screen bg-gray-100">
        {/* Editor Panel */}
        <div className="w-1/2 overflow-y-auto border-r border-gray-300 bg-white">
          <Editor />
        </div>
        
        {/* Preview Panel */}
        <div className="w-1/2 overflow-y-auto bg-gray-100 p-8">
          <Preview />
        </div>
      </div>
    </ResumeProvider>
  );
}

export default App;
