import ScrollingText from "@/components/ui/scrolling-text";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-neutral-950 text-dark-900 dark:text-gray-400">
      <div className="flex justify-between items-center">
      {/* Scrolling Text */}
        <ScrollingText />
      </div>
    </footer>
  );
}