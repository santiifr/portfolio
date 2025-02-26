import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

function About() {
  return (
    <section className="flex justify-center py-10">
      <Card className="w-full max-w-2xl bg-surface dark:bg-surface-dark rounded-xl shadow-lg p-6">
        <CardContent className="flex items-center gap-6">
          <Image
            src="/santi.jpg"
            alt="Profile Picture"
            width={175}
            height={175}
            className="rounded-full border-4 border-primary"
            priority
          />
          <div className="flex flex-col">
            <h2 className="text-3xl font-extrabold">Santi</h2>
            <h3 className="text-lg font-semibold text-muted-foreground">
              Fullstack Engineer @ Huspy
            </h3>
            <p className="text-base text-muted-foreground mt-4 leading-relaxed">
              Building scalable real estate solutions at Huspy using{" "}
              <span className="font-semibold">React, Next.js, TypeScript, Kotlin, Python and Kafka</span>.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export { About };
