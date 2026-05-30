export default function MoneyBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='80' viewBox='0 0 160 80'%3E%3Crect x='2' y='2' width='156' height='76' rx='4' fill='none' stroke='%23111' stroke-width='1.5'/%3E%3Ctext x='80' y='38' text-anchor='middle' font-size='28' font-weight='900' fill='%23111' font-family='serif'%3E100%3C/text%3E%3Ctext x='80' y='58' text-anchor='middle' font-size='14' font-weight='700' fill='%23111' font-family='serif'%3EDOLLARS%3C/text%3E%3C/svg%3E")`,
          backgroundSize: '240px 120px',
          transform: 'rotate(-20deg) scale(1.5)',
          transformOrigin: 'center center',
          width: '200%',
          height: '200%',
          top: '-50%',
          left: '-50%',
        }}
      />
    </div>
  );
}
