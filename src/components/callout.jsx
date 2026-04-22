// components/Callout.jsx
export default function Callout({ children }) {
  return (
    <div style={{ border: '1px solid #4caf50', padding: '12px', borderRadius: '8px' }}>
      <strong>Note:</strong> {children}
    </div>
  );
}
