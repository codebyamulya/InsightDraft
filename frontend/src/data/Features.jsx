import {
  IconSummary,
  IconAction,
  IconFormats,
  IconSearch,
  IconTeam,
  IconShield,
} from "../components/Icons/Icons";
const FEATURES = [
  {
    icon: <IconSummary />,
    tone: "blue",
    title: "Auto summaries",
    desc: "Condenses long meetings and documents into a clear, skimmable brief.",
  },
  {
    icon: <IconAction />,
    tone: "orange",
    title: "Action item extraction",
    desc: "Pulls out owners, tasks, and deadlines so nothing falls through the cracks.",
  },
  {
    icon: <IconFormats />,
    tone: "blue",
    title: "Multi-format input",
    desc: "Works across audio, video, PDF, and DOCX without any conversion step.",
  },
  {
    icon: <IconSearch />,
    tone: "orange",
    title: "Searchable archive",
    desc: "Every past meeting and document becomes instantly searchable text.",
  },
  {
    icon: <IconTeam />,
    tone: "blue",
    title: "Team sharing",
    desc: "Send polished minutes of meeting to your team with one click.",
  },
  {
    icon: <IconShield />,
    tone: "orange",
    title: "Private by default",
    desc: "Your files and transcripts stay yours — encrypted in transit and at rest.",
  },
];

export default FEATURES;
