# Resume Builder

A modern, ATS-friendly resume builder inspired by Resume.io. Build beautiful resumes with real-time preview.

## Features

- ✅ **ATS-Friendly Template** - Clean, single-column design optimized for Applicant Tracking Systems
- ✅ **Real-Time Preview** - See your changes instantly in a split-screen editor
- ✅ **Auto-Save** - Your work is automatically saved to localStorage every 500ms
- ✅ **Multiple Sections** - Contact info, summary, experience, education, skills, and projects
- ⏳ **PDF Export** - Coming soon
- ⏳ **Multiple Templates** - Modern and Creative templates coming soon

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **State**: React Context API
- **Storage**: LocalStorage (auto-save)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repo
git clone https://github.com/sergenfloppy-lgtm/resume-builder.git
cd resume-builder

# Install dependencies
cd frontend
npm install

# Start dev server
npm run dev
```

Open http://localhost:5173 in your browser.

## Project Structure

```
resume-builder/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Editor/          # Editor components (forms)
│   │   │   └── Preview/         # Preview templates
│   │   ├── context/             # React Context (state management)
│   │   ├── types/               # TypeScript types
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
└── README.md
```

## Roadmap

### Phase 1 (Current) ✅
- [x] Basic editor with all sections
- [x] ATS-friendly template
- [x] Real-time preview
- [x] Auto-save to localStorage

### Phase 2 (Next)
- [ ] PDF export with react-pdf/renderer
- [ ] Drag-and-drop section reordering
- [ ] Import from JSON/LinkedIn
- [ ] Modern template

### Phase 3
- [ ] Creative template
- [ ] Dark mode
- [ ] Export to DOCX
- [ ] Backend with SQLite for multi-resume management

## Contributing

PRs welcome! Feel free to improve templates, add features, or fix bugs.

## License

MIT

---

**Built by Sergenfloppy** | 2026-03-06
