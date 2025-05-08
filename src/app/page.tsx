import Quiz from '@/components/quiz';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 sm:p-8 md:p-12 bg-background">
      <header className="w-full max-w-3xl mb-8 sm:mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary drop-shadow-sm">
          Accessibility Quiz
        </h1>
        <p className="mt-2 text-lg sm:text-xl text-muted-foreground">
          Test your knowledge of WCAG 2.2 and web accessibility.
        </p>
      </header>
      <div className="w-full max-w-3xl">
        <Quiz />
      </div>
    </main>
  );
}
