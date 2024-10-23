import ScrollingText from "@/components/ui/scrolling-text";

export default function Footer() {
  return (
    <footer className="bg-white text-dark-900">
      <div className="container mx-auto py-8">
        <div className="flex justify-between">
          <div>
            <p>Last Updated: 2024-10-23</p>
          </div>
          <div>
            <p>Contact me at jxsephz@gmail.com</p>
          </div>
        </div>
      </div>
      {/* Scrolling Text */}
      <ScrollingText />
    </footer>
  );
}