export function Card({ children, className = "" }) {
  return <div className={`bg-white rounded-lg shadow p-4 ${className}`}>{children}</div>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
