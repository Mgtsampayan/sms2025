export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-bg-primary">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-text-primary mb-4">
          Welcome to School University
        </h1>
        <p className="text-lg text-text-secondary">
          The Future of School Management - 2025 Edition.
        </p>
        {/* Add links to dashboard, login, etc. here */}
      </div>
    </main>
  );
}