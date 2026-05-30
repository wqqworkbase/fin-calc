export default function MoneyBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "url('/hundred-dollar-bill.jpg')",
          backgroundSize: '360px auto',
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
