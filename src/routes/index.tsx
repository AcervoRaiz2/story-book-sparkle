import { createFileRoute } from "@tanstack/react-router";
import footerKids from "@/assets/footer-kids-reading.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Catálogo de la Biblioteca Infantil" },
      {
        name: "description",
        content:
          "Explora cuentos, aventuras y libros ilustrados en el catálogo de nuestra biblioteca infantil.",
      },
      { property: "og:title", content: "Catálogo de la Biblioteca Infantil" },
      {
        property: "og:description",
        content:
          "Busca, filtra y descubre libros para niños en nuestro catálogo ilustrado.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CatalogoPrototipo,
});

const categorias = [
  { nombre: "Cuentos", color: "bg-kid-berry" },
  { nombre: "Aventuras", color: "bg-kid-sky" },
  { nombre: "Animales", color: "bg-kid-forest" },
  { nombre: "Ciencia", color: "bg-kid-teal" },
  { nombre: "Poesía", color: "bg-kid-grape" },
  { nombre: "Cómics", color: "bg-kid-brick" },
];

const libros = [
  { titulo: "El Zorro Viajero", autor: "Ana Ruiz", cat: "Aventuras", color: "bg-kid-sky", disp: true },
  { titulo: "La Luna de Papel", autor: "Luis Peña", cat: "Cuentos", color: "bg-kid-berry", disp: true },
  { titulo: "Bichos Curiosos", autor: "M. Torres", cat: "Animales", color: "bg-kid-forest", disp: false },
  { titulo: "Estrellas y Cohetes", autor: "S. Vidal", cat: "Ciencia", color: "bg-kid-teal", disp: true },
  { titulo: "Versos de Colores", autor: "P. Ramos", cat: "Poesía", color: "bg-kid-grape", disp: true },
  { titulo: "El Dragón Dormido", autor: "C. Mena", cat: "Cómics", color: "bg-kid-brick", disp: true },
  { titulo: "Semillas Mágicas", autor: "J. Ortiz", cat: "Cuentos", color: "bg-kid-leaf", disp: false },
  { titulo: "El Mar Secreto", autor: "D. Cano", cat: "Aventuras", color: "bg-kid-mint", disp: true },
];

function CatalogoPrototipo() {
  return (
    <div className="min-h-screen bg-kid-cream text-kid-brick">
      {/* Encabezado */}
      <header className="relative overflow-hidden bg-kid-teal px-6 py-10 text-kid-cream">
        <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-kid-mint/30" />
        <div className="pointer-events-none absolute -bottom-16 right-10 h-48 w-48 rounded-full bg-kid-sun/20" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-kid-sun">
            Biblioteca
          </p>
          <h1 className="mt-2 text-4xl font-extrabold leading-tight sm:text-5xl">
            Catálogo de libros
          </h1>
          <p className="mt-3 max-w-xl text-kid-cream/90">
            Busca tu próxima historia favorita entre cuentos, aventuras y mucho más.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <input
              type="text"
              placeholder="Buscar por título o autor..."
              className="w-full max-w-sm rounded-full border-4 border-kid-sun bg-white/95 px-5 py-3 text-kid-brick placeholder:text-kid-brick/50 focus:outline-none focus:ring-4 focus:ring-kid-sun/40"
            />
            <button className="rounded-full bg-kid-sun px-6 py-3 font-bold text-kid-brick shadow-[0_5px_0_#8b4545] transition-transform hover:-translate-y-0.5">
              Buscar
            </button>
            <button className="rounded-full border-4 border-kid-cream/70 px-6 py-3 font-bold transition-colors hover:bg-kid-cream/15">
              Limpiar
            </button>
          </div>
        </div>
      </header>

      {/* Categorías */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <h2 className="mb-4 text-2xl font-extrabold">Categorías</h2>
        <div className="flex flex-wrap gap-3">
          {categorias.map((c) => (
            <button
              key={c.nombre}
              className={`${c.color} rounded-2xl px-5 py-2 font-bold text-white shadow-[0_4px_0_rgba(0,0,0,0.18)] transition-transform hover:-translate-y-0.5`}
            >
              {c.nombre}
            </button>
          ))}
        </div>
      </section>

      {/* Cuadrícula de libros */}
      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-extrabold">Todos los libros</h2>
          <span className="rounded-full bg-kid-sun px-4 py-1 text-sm font-bold text-kid-brick">
            {libros.length} resultados
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {libros.map((l) => (
            <article
              key={l.titulo}
              className="overflow-hidden rounded-3xl border-4 border-kid-brick/15 bg-white shadow-[0_8px_0_rgba(139,69,69,0.15)] transition-transform hover:-translate-y-1"
            >
              <div className={`${l.color} flex h-36 items-end justify-between p-4`}>
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-kid-brick">
                  {l.cat}
                </span>
                <span className="text-3xl">📚</span>
              </div>
              <div className="space-y-2 p-4">
                <h3 className="text-lg font-extrabold leading-snug">{l.titulo}</h3>
                <p className="text-sm text-kid-brick/70">{l.autor}</p>
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-bold text-white ${
                    l.disp ? "bg-kid-leaf" : "bg-kid-berry"
                  }`}
                >
                  {l.disp ? "Disponible" : "Prestado"}
                </span>
                <div className="flex gap-2 pt-2">
                  <button className="flex-1 rounded-xl bg-kid-sky px-3 py-2 text-sm font-bold text-white shadow-[0_4px_0_#3b558c]">
                    Ver
                  </button>
                  <button className="flex-1 rounded-xl bg-kid-sun px-3 py-2 text-sm font-bold text-kid-brick shadow-[0_4px_0_#c9a94e]">
                    Reservar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Ilustración de niños leyendo en el parque */}
      <footer className="relative mt-4">
        <div className="bg-gradient-to-b from-kid-cream to-kid-mint/40 pt-6">
          <img
            src={footerKids}
            alt="Niños leyendo libros en un parque, ilustración con textura afelpada"
            loading="lazy"
            className="mx-auto w-full max-w-5xl select-none"
          />
        </div>
        <div className="bg-kid-forest px-6 py-6 text-center text-kid-cream">
          <p className="font-bold">Biblioteca Infantil · Leer es jugar con la imaginación</p>
        </div>
      </footer>
    </div>
  );
}
