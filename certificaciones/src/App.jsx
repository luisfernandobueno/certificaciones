
import { useState } from "react";

const certifications = [
  {
    id: 1,
    title: "Inglés — C2 Proficient",
    subtitle: "Certificado EF SET",
    category: "Idiomas",
    type: "Certificación",
    date: "",
    file: "https://drive.google.com/file/d/1hUnupqlPlU50Zyhg-KVZSo00n6n5c-8U/view?usp=drive_link",
    favorite: true,
  },
  {
    id: 2,
    title: "Italiano — A2",
    subtitle: "EF Test",
    category: "Idiomas",
    type: "Evaluación de idioma",
    date: "",
    file: "https://drive.google.com/file/d/14ceKcvDl2QfpE-gkz6cnUwkYFZmVpawh/view?usp=drive_link",
    favorite: false,
  },
  {
    id: 3,
    title: "Auxiliar Administrativo",
    subtitle: "INFA",
    category: "Administración",
    type: "Certificación",
    date: "",
    file: "https://drive.google.com/file/d/1piP2EJ_Em5wOgtKI-g18ZJfjvZd86vDs/view?usp=drive_link",
    favorite: false,
  },
  {
    id: 4,
    title: "Evaluación de desempeño",
    subtitle: "Banco República — BROU",
    category: "Experiencia laboral",
    type: "Evaluación de desempeño",
    date: "",
    file: "https://drive.google.com/file/d/1NJnQzdgEySfb64aWohgFcz95APBsaP49/view?usp=drive_link",
    favorite: true,
  },
  {
    id: 5,
    title: "Desarrollo Web",
    subtitle: "Jóvenes a Programar — JaP",
    category: "Tecnología",
    type: "Certificación",
    date: "",
    file: "https://drive.google.com/file/d/1N-ncXgde9DFQxgDgfvgu-5brzORIMdg2/view?usp=drive_link",
    favorite: true,
  },
  {
    id: 6,
    title: "Lenguaje SQL",
    subtitle: "Educantel",
    category: "Tecnología",
    type: "Certificación",
    date: "",
    file: "https://drive.google.com/file/d/1JPM-MrSJCMHZ_GoC_zAhdI1LieFiXBu6/view?usp=drive_link",
    favorite: false,
  },
  {
    id: 7,
    title: "Introducción a la Programación",
    subtitle: "Educantel",
    category: "Tecnología",
    type: "Certificación",
    date: "",
    file: "https://drive.google.com/file/d/1j3jNXluGyFossNX1oOOnMcKHJSlxFDkW/view?usp=drive_link",
    favorite: false,
  },
  {
    id: 8,
    title: "Excel Básico",
    subtitle: "Educantel",
    category: "Administración",
    type: "Certificación",
    date: "",
    file: "https://drive.google.com/file/d/118O3Rv1bVNWdT6g8OAVRa0uDMM9YQzFn/view?usp=drive_link",
    favorite: false,
  },
  {
    id: 9,
    title: "Word Básico",
    subtitle: "Educantel",
    category: "Administración",
    type: "Certificación",
    date: "",
    file: "https://drive.google.com/file/d/1wxDsbW_LNoLHuERXti--PcuqAoNpU-X2/view?usp=drive_link",
    favorite: false,
  },
  {
    id: 10,
    title: "Carta de recomendación",
    subtitle: "Banco República — BROU",
    category: "Experiencia laboral",
    type: "Carta de referencia laboral",
    date: "",
    file: "https://drive.google.com/file/d/1KY5XL3e78QhgAC5U6U8_MNwnif2gSlK-/view?usp=drive_link",
    favorite: true,
  },
];

const categories = [
  "Idiomas",
  "Tecnología",
  "Administración",
  "Experiencia laboral",
];

function CertificateCard({ certificate }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">
      

      {/* Información */}
      <div className="flex flex-1 flex-col p-5">
        <span className="mb-2 w-fit rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
          {certificate.category}
        </span>

        <h3 className="text-base font-bold leading-snug text-slate-900">
          {certificate.title}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {certificate.subtitle}
        </p>

        <p className="mt-3 text-xs text-slate-400">
          {certificate.type}
        </p>

        <a
          href={certificate.file}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
        >
          Ver documento
          <span className="ml-2" aria-hidden="true">
            ↗
          </span>
        </a>
      </div>
    </article>
  );
}

function App() {
  const [activeCategories, setActiveCategories] = useState([]);

  const favorites = certifications.filter(
    (certificate) => certificate.favorite
  );

  const filteredCertifications =
    activeCategories.length === 0
      ? certifications
      : certifications.filter((certificate) =>
          activeCategories.includes(certificate.category)
        );

  function toggleCategory(category) {
    setActiveCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category]
    );
  }

  function clearFilters() {
    setActiveCategories([]);
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Encabezado */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1600px] px-5 py-10 sm:px-8 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
            Perfil profesional
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Certificaciones y credenciales
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Una colección de mis certificaciones, evaluaciones de idiomas,
            referencias profesionales y logros educativos.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <div className="rounded-xl bg-slate-100 px-4 py-3">
              <span className="text-xl font-bold">
                {certifications.length}
              </span>
              <span className="ml-2 text-sm text-slate-600">
                Documentos
              </span>
            </div>

            <div className="rounded-xl bg-amber-50 px-4 py-3">
              <span className="text-xl font-bold text-amber-700">
                {favorites.length}
              </span>
              <span className="ml-2 text-sm text-amber-700">
                Destacados
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Distribución principal */}
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10 lg:px-10">

        {/* IZQUIERDA: Favoritos permanentes */}
        <aside className="self-start lg:sticky lg:top-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-5">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-600">
                Selección destacada
              </p>

              <h2 className="mt-2 text-xl font-bold">
                Documentos destacados
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Mis cualificaciones y referencias profesionales más relevantes.
              </p>
            </div>

            <div className="space-y-3">
              {favorites.map((certificate) => (
                <a
                  key={certificate.id}
                  href={certificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 rounded-xl border border-slate-200 p-3 transition hover:border-amber-300 hover:bg-amber-50"
                >
                  <span className="mt-0.5 text-lg text-amber-500">
                    ★
                  </span>

                  <div className="min-w-0">
                    <p className="text-sm font-bold leading-snug text-slate-800 group-hover:text-amber-800">
                      {certificate.title}
                    </p>

                    <p className="mt-1 text-xs leading-relaxed text-slate-500">
                      {certificate.subtitle}
                    </p>

                    <p className="mt-2 text-xs font-medium text-indigo-600">
                      Ver documento ↗
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <p className="mt-5 border-t border-slate-100 pt-4 text-xs leading-relaxed text-slate-400">
              Los documentos destacados permanecen visibles independientemente
              de los filtros seleccionados en la colección principal.
            </p>
          </div>
        </aside>

        {/* DERECHA: Certificaciones filtrables */}
        <section className="min-w-0">
          {/* Título de la sección */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-600">
                Biblioteca de documentos
              </p>

              <h2 className="mt-2 text-2xl font-black">
                Todas las certificaciones
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Explorá mis cualificaciones por categoría.
              </p>
            </div>

            <p className="text-sm text-slate-500">
              Mostrando{" "}
              <span className="font-bold text-slate-900">
                {filteredCertifications.length}
              </span>{" "}
              de {certifications.length}
            </p>
          </div>

          {/* Filtros por categoría */}
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={clearFilters}
                aria-pressed={activeCategories.length === 0}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  activeCategories.length === 0
                    ? "border-indigo-600 bg-indigo-600 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300"
                }`}
              >
                Todas
              </button>

              {categories.map((category) => {
                const isActive = activeCategories.includes(category);

                return (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    aria-pressed={isActive}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                      isActive
                        ? "border-indigo-600 bg-indigo-600 text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-indigo-300"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
              <p className="text-xs leading-relaxed text-slate-500">
                Seleccioná varias categorías para combinar los resultados.
              </p>

              {activeCategories.length > 0 && (
                <button
                  onClick={clearFilters}
                  className="shrink-0 text-xs font-bold text-indigo-600 hover:text-indigo-800"
                >
                  Limpiar filtros
                </button>
              )}
            </div>
          </div>

          {/* Cuadrícula de certificaciones */}
          {filteredCertifications.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredCertifications.map((certificate) => (
                <CertificateCard
                  key={certificate.id}
                  certificate={certificate}
                />
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <h3 className="text-lg font-bold">
                No se encontraron documentos
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Probá seleccionando otra categoría.
              </p>

              <button
                onClick={clearFilters}
                className="mt-5 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                Mostrar todas las certificaciones
              </button>
            </div>
          )}
        </section>
      </div>

      {/* Pie de página */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-[1600px] px-5 py-6 text-center text-sm text-slate-500 sm:px-8">
          Portafolio profesional · Certificaciones y credenciales
        </div>
      </footer>
    </main>
  );
}

export default App;
