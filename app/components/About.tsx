import Image from "next/image"

function About() {
  return (
    <section id="about" className="py-10 max-w-2xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="relative w-32 h-32 md:w-36 md:h-36 flex-shrink-0">
          <Image
            src="/santi.jpg"
            alt="Santiago Fonseca Ribes"
            fill
            className="rounded-full object-cover border-4 border-primary"
            priority
          />
        </div>

        <div className="flex flex-col text-center md:text-left">
          <h2 className="text-2xl font-bold">Santiago Fonseca Ribes</h2>
          <h3 className="text-lg text-muted-foreground">Fullstack Engineer @ Huspy</h3>

          <div className="w-16 h-1 bg-primary rounded-full mx-auto md:mx-0 my-3"></div>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Building scalable real estate solutions at Huspy using{" "}
            <span className="font-semibold">React, Next.js, TypeScript, Kotlin, Python and Kafka</span>.
          </p>
        </div>
      </div>
    </section>
  )
}

export { About }
