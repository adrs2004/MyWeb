export default function GlowCard({ children, identifier }) {
    return (
      <div className={`relative group`}>
        <div
          className={`absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200 group-hover:duration-200 animate-tilt`}
        ></div>
        <div className="relative bg-[#2F2F2F] rounded-lg overflow-hidden">
          {children}
        </div>
      </div>
    );
  }