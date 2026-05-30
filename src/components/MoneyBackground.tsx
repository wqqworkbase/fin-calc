export default function MoneyBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      {/* Layer 1: rotated -20deg */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "url('/hundred-dollar-bill.jpg')",
          backgroundSize: '480px auto',
          backgroundRepeat: 'repeat',
          transform: 'rotate(-20deg) scale(1.3)',
          transformOrigin: 'center center',
          width: '200%',
          height: '200%',
          top: '-50%',
          left: '-50%',
        }}
      />
      {/* Layer 2: rotated +15deg offset, blends seams */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url('/hundred-dollar-bill.jpg')",
          backgroundSize: '520px auto',
          backgroundRepeat: 'repeat',
          transform: 'rotate(15deg) scale(1.2)',
          transformOrigin: '40% 60%',
          width: '200%',
          height: '200%',
          top: '-50%',
          left: '-50%',
        }}
      />
    </div>
  );
}
