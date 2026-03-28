export default function PhotographyBusinessWebsite() {
  const portfolio = [
    { title: "Parent & Child", category: "Family", image: "data:image/webp;base64,UklGRgyWAABXRUJQVlA4IACWAABQzQOdASq8Av0DPrVSo06nJC8vo/Sa+fAWiWlsYeeJv/7x2/cTIx7MSzQfnwNE/+Vr1dkB+XIpZyX+fpUu0P6r/seWhzr+6eBv9h/3/Fh7If9r3AP109NzCnoC8Z/P+/5/oofsHSQ/6PKX9uZOg0v71/vR60vZP/3/3fKX81/af/f/C9pf/Y07/Ff+3jq/yH/v1l/+3kL+wf8/mxd3nyqL7eFjzdf9fF8/29NfltHc//Xzq/cv72kQA822ITo2JcLgiIGp/AdQoM41gLSXT0hAOwnp0wLgK/M6AnXrKBxlGX6vlRB0DzYTmL7IpFAhyQWmVfp2pQkqeTyR/y3thHjdUhIPdK02FrC3UL86b+i2mfVemaygmdAvYZmfd50QTnK2mNQFV1XeAguUTR03gSnw+zwmJob/PMMFhABvAb/ye2wPFjI08zpbUVmzXkJ1Q/KeJPbdIYoLwJbqUzOMC4Gew1HMJ+CnBhkxxOObyURKf44rw/tB9ju/QnOsVs+1MPvVKpLlx/qo/nLhu9z9ed/Igsj5xsZDephKHU4Qy3aJG3OXclqCJWX6u0mj6IM9sC9xt/r0LapZmkx037htoVyOMq+BV76a6w68CUQzf2wcUjiqHv4ezHUmXWXSlu2IAbtglKu/GRa25YNVYgtXwR5YaqSLk5tTendSgN45eAQBmb8bU5MDHmE8oq9sd6sHcIrWvHqjhicgsC43EREwFhMLiBoxAXV0lxQSi5soHKKM+muccCZjx0psY3Hy2ehHKCvs8Xs9B2+GygCHnfwzVt3281BxYYDurnyAgfiO7sRgmsp5bOjtC5Ipwouo9X8FeoDKItpWas+LtryiH25S/chyisMP3lNris/BIRrfftDbrw9yaxUQDR1rhEA1meTP31EtAUFbkQDmsa6dfxsMSEtcu/HKxnmJEWduGa+XX7JF0Y93RhEm1q8jX3q6bcpWOaDznVOYwHdhyR3Fzaw3ZubRVtUVhW4WwtdK0QuED3FY+hou6TpnRN7ug41TluFxlCZT0aE1sOSPYPUhoZ/fVAmM6/whEokg3ynd6OvKZ6XriCP0R68ZLwlH5v07EOPg2zJxvjEkHzQvX93nO3dsIonbvG6dJS5v4ApeI6J/PT8Z3nHZwQTnlDTpErD4vRo2aL1BlOB5rCzKbLqKvzVsdXWFdseFoSOTtj8acKVA3eWMca5VXOI1ssO+JvK2yr+h58L/RN6t7f/LxDWcQRFPFL8PnryHkhpsoqj2LZR3+E4xQJrLT5tbHMt11q8IbqKx6lpTEB7e0CcSi2ihusi41ofSegUiQSt2EbIzUIZZrmcXCOen+zr5RsJWSbymu2U38IFiih1varzkKx7u7Y7PpSfrN8D68xgDs98A3NsEQP451uvLOYywB2ehUGCP/3iXies9/7/XwjFEUt/+jqn8Fv2DfjSEFkn082DJxG5Z86LLmhtvFVvFl5iJ1gEi40VQ7T21/HJ/2U49cR2O1MX0Ctpe20ItEDYq/F43OZssYpspahhfdvF1MfQHfXr7iAmdQg1AmsYAWqhshzKW7umuFOVFdnQMU7F+Hiz1LRyDjJ7QeQfOf97K6Av9SpbCwGYJQ1EpdczFzKko88cukqrfGxuY65tEo8guq07zyUkLeFCi4uPhfj+duQU0qN9qcFBs5RJhGax0+vYM1fmBEtMqFnTQrGe4IXtM8jOkKo1mEtMMhJ88iE0VU7fvymyI7AXjrNrvgUDpZVIuakujIQ5TQ6+HQDzOTYCVUhoeHSxgOzkCK6OvmJfW/HFlFRxqNwAAA==" },
    { title: "Childhood", category: "Portrait", image: "data:image/webp;base64,UklGRjxwAABXRUJQVlA4IDBwAACQdgOdASq8AtADPrVWo06nJD42ItWLQ9hgAASQbNW22i6sSLoPZ7IQA97Mb92w3+aP+49+vhf/3xf7+saZf4t+7nUD//jfdL4/zn/u6epBf/P7A/znE/27nvt/Lm0f7br5z9u//LbV//R//vv+x/6J8s/9/3/lf+4X7P+Z5T/x5ON2Wlcn76Vd+T67XsP9AAGy3GGD4zFrTUEOjlwmZh0lJ59ANjV73jM4D9OKy7odHSMSBh2EGq7pYu/hhGQdMW2ScCDfv5cJd0kL0U7B8WRuue+5j5AH9DFrRzOqlmP5UgPeDvwW7M89KqY1rx2eS6aPqhuwK8V0Q6Hyv0FwJjyRjW8uHOIT4RffqVJSeGX1zhEDb+CDqNNognoB7ryjsS3zJqQncO7aJlNLNI3QaLwDgT91WaXDzlPkECDYXH5bGYAXzLZJV0eN33w/ucnLeCM1JKLs98K8QMYRhFvVx0w2f73uK7Md7SUS7sih9Tz/49017Ezu/wKDhAFgL6dmmNwjoFpmt1s2bKdQnA7rtfW0GCDvAa3L7qqQ9s2grrGowv3p1g20w7lKPNfycD6jvZyoFao1mZs8V8rrwJVAKj7+sqnV5k1SFry3J4nQJye2FbsBOz27kNQ+s9B4ri5AE4BS0NoqgHvNVs6w4Wi0fVjtfuC91+Kd0a/rq+vdcrUyKlQzE8w9TY2Uk0cLDsEl12Tr1T7Di/3vfw6dSMjlBQ0b6QpxITr4Afh04V67Fr9s76HhJM23SKhVClS8Hg9M8s4zBAdUnMMx5e5oO40maHq/40hM2P2A0HCG6pIQYSCvTHqgMZYNpuv+1AJpUyI8PXUt8nWxl6A4up2P0M2p7WwM8Ckq0tnrc9Xa1od8WvPhIZrFc4QAC6I9sm96TZ/i42IKUabfFJ8cJxDbu7biuX2cz4SNKaM4v2v0mu0+vQ8Ec8AKVpwCgs6cFUMHvx5Guo9rNH0ljGcqIA5+06xU0b9GMu7g4kH4FW4AOm85fDqlHJ2agK44D8tB8R2P3dr6LJ4JRVQZutQwdpIGqNvVDtr9EPrYvde0JaWpKJhvjzW2LZCk7k83+gPbjewP7idbVnPEb7m9skf2z+FoS8dPDXeN0nmjlwmQAA/vjXxH61jDd7m4GXnWwxvV4K0AAA=" },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="fixed top-0 w-full z-50">
        <div className="mx-auto max-w-7xl flex justify-between items-center px-6 py-6">
          <p className="text-sm tracking-[0.3em] uppercase">Pryma</p>
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#portfolio">Portfolio</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-light tracking-wide">Pryma Photography</h1>
          <p className="mt-6 text-sm tracking-[0.3em] text-neutral-500">
            Boca Raton · Miami · Palm Beach
          </p>
        </div>
      </section>

      <section className="text-center px-6 py-24">
        <p className="text-2xl md:text-3xl font-light max-w-2xl mx-auto leading-relaxed">
          For the people you love most.
        </p>
      </section>

      <section id="portfolio" className="px-6 pb-24 max-w-6xl mx-auto space-y-16">
        {portfolio.map((item, index) => (
          <div key={item.title} className="grid md:grid-cols-2 gap-8 items-center">
            <img src={item.image} alt={item.title} className="w-full h-[500px] object-cover" />
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-neutral-400">{item.category}</p>
              <h3 className="mt-3 text-2xl font-light">{item.title}</h3>
            </div>
          </div>
        ))}
      </section>

      <section id="about" className="text-center px-6 py-24 max-w-3xl mx-auto">
        <p className="text-sm tracking-[0.3em] uppercase text-neutral-400">About</p>
        <p className="mt-8 leading-relaxed text-neutral-600">
          I’m originally from Belarus, now based in South Florida. My work is rooted in capturing real emotion — quiet, unposed, and deeply personal.
        </p>
        <p className="mt-6 leading-relaxed text-neutral-600">
          What started with photographing my own children shaped the way I see everything now: connection first, always.
        </p>
        <p className="mt-6 leading-relaxed text-neutral-600">
          My approach is calm, natural, and intentional — creating images that feel effortless and timeless.
        </p>
      </section>

      <section className="text-center px-6 py-24">
        <p className="text-sm tracking-[0.3em] uppercase text-neutral-400">Investment</p>
        <div className="mt-8 space-y-3 text-lg text-neutral-700">
          <p>Portrait sessions begin at $250</p>
          <p>Family sessions begin at $350</p>
          <p>Wedding collections begin at $2,400</p>
        </div>
        <p className="mt-6 text-neutral-400 italic">Custom collections available upon inquiry</p>
      </section>

      <section id="contact" className="text-center px-6 py-24">
        <h2 className="text-3xl font-light">Let’s create something beautiful</h2>
        <div className="mt-6 space-y-2">
          <p>prymaphoto@gmail.com</p>
          <p>@prymaphotography</p>
        </div>
      </section>
    </div>
  );
}
